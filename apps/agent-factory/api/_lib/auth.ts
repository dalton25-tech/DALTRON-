import { createClient } from "@supabase/supabase-js";
import type { ApiRequest } from "./types";
import { readBearerToken } from "./http";

export async function authenticate(req: ApiRequest) {
  const token = readBearerToken(req.headers);
  if (!token) return { ok: false as const, status: 401 as const, message: "Authentication required." };

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    return { ok: false as const, status: 503 as const, message: "Authentication service is not configured." };
  }

  // Use a publishable key plus the caller JWT. Do not use a service-role key:
  // database calls made with this client must remain subject to RLS.
  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { Authorization: `Bearer ${token}` } }
  });
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) {
    return { ok: false as const, status: 401 as const, message: "Invalid or expired session." };
  }
  return { ok: true as const, userId: data.user.id, supabase };
}
