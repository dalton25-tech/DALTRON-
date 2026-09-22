import type { Request, Response } from 'express'
import { AIEngine } from '../../core/engine.js'

const engine = new AIEngine()

export async function chatWithNexa(req: Request, res: Response) {
  const { message } = req.body

  if (!message || typeof message !== 'string') {
    return res.status(400).json({
      error: 'A message is required.',
    })
  }

  try {
    const result = await engine.run({
      input: message,
    })

    return res.json(result)
  } catch (error) {
    console.error('Nexa AI error:', error)

    return res.status(500).json({
      error: 'Nexa AI failed to process the request.',
    })
  }
}