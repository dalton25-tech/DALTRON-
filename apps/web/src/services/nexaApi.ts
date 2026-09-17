export async function sendMessageToNexa(message: string) {
  const response = await fetch('http://localhost:4000/api/nexa/chat', {
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