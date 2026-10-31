# Security boundaries
- Simulated activity only; no external execution endpoints.
- Authenticate protected API requests with Supabase Auth.
- Use a publishable key plus the caller's JWT for normal data access so RLS remains active.
- Do not introduce a service-role/secret key into this prototype without a separately reviewed need; if ever used, keep it server-only and never expose it to browser code.
- Keep secret/admin keys out of `VITE_*` variables.
- Enable and test RLS on every exposed table.
- Workspace membership and role checks must be enforced server-side and in the database.
- Ordinary clients must not write workspace memberships or audit events.
- Test denied access as well as successful access before enabling writes.
