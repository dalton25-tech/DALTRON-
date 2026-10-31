const NEXA_API_URL = import.meta.env.VITE_NEXA_API_URL || 'http://localhost:4000';

export interface NexaReply {
  output: string;
  model: string;
  provider: string;
}

export async function sendMessageToNexa(message: string): Promise<NexaReply> {
  const response = await fetch(`${NEXA_API_URL}/api/nexa/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
    }),
  });

  if (!response.ok) {
    let detail = 'Failed to connect to Nexa Backend';

    try {
      const body = (await response.json()) as { error?: string };
      if (body.error) detail = body.error;
    } catch {
      // Response had no JSON body; keep the generic message.
    }

    throw new Error(detail);
  }

  return (await response.json()) as NexaReply;
}
