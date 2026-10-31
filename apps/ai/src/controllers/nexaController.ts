import type { Request, Response } from 'express';
import { processNexaMessage } from '../services/nexaService.js';

export const MAX_MESSAGE_LENGTH = 4000;

export async function chatWithNexa(req: Request, res: Response) {
  const message: unknown = req.body?.message;

  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({
      error: 'A message is required.',
    });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(413).json({
      error: `Message is too long (maximum ${MAX_MESSAGE_LENGTH} characters).`,
    });
  }

  try {
    const result = await processNexaMessage(message);

    return res.json(result);
  } catch (error) {
    console.error('Nexa AI error:', error);

    return res.status(500).json({
      error: 'Nexa AI failed to process the request.',
    });
  }
}
