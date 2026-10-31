import { AIEngine } from '../../core/engine.js';

let engine: AIEngine | undefined;

// The engine is created on first use so the server can start (and /health can
// respond) even when provider configuration such as GEMINI_API_KEY is missing.
function getEngine(): AIEngine {
  engine ??= new AIEngine();
  return engine;
}

export async function processNexaMessage(message: string) {
  return getEngine().run({
    input: message,
  });
}
