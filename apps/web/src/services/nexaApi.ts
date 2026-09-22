const NEXA_API_URL =
  import.meta.env.VITE_NEXA_API_URL || 'http://localhost:4000'

export async function sendMessageToNexa(message: string) {
  const response = await fetch(`${NEXA_API_URL}/api/nexa/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to connect to Nexa Backend')
  }

  return response.json()
}