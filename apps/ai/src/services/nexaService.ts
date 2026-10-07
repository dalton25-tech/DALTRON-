import { AIEngine } from '../../core/engine.js'

const engine = new AIEngine()

export async function processNexaMessage(message: string) {
  return engine.run({
    input: message,
  })
}
