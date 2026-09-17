import express from 'express'
import cors from 'cors'
import nexaRoutes from './routes/nexaRoutes'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({
    status: 'online',
    system: 'Nexa Backend',
  })
})

app.use('/api/nexa', nexaRoutes)

const PORT = 4000

app.listen(PORT, () => {
  console.log(`Nexa Backend running on http://localhost:${PORT}`)
})