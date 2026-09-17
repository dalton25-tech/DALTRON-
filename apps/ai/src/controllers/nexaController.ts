import type { Request, Response } from 'express'

export function chatWithNexa(req: Request, res: Response) {
  const { message } = req.body

  if (!message || typeof message !== 'string') {
    return res.status(400).json({
      error: 'A message is required.',
    })
  }

  return res.json({
    message: `Nexa Backend received: ${message}`,
  })
}