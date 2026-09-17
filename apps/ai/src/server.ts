import express from 'express'

const app = express()

app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({
    status: 'online',
    system: 'Nexa Backend',
  })
})

app.post('/api/nexa/chat', (req, res) => {
  const { message } = req.body

  if (!message || typeof message !== 'string') {
    return res.status(400).json({
      error: 'A message is required.',
    })
  }

  res.json({
    message: `Nexa Backend received: ${message}`,
  })
})

const PORT = 4000

app.listen(PORT, () => {
  console.log(`Nexa Backend running on http://localhost:${PORT}`)
})