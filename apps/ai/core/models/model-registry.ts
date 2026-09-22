import type { AIModel } from "./model.js";
import type { ModelProvider } from "./providers/providers.js";

const models: Record<string, Omit<AIModel, "provider">> = {
  "gemini-2.5-flash": {
    name: "gemini-2.5-flash",

    capabilities: {
      streaming: false,
      tools: false,
    },

    contextWindow: 1000000,
  },
  "gemini-3.6-flash": {
    name: "gemini-3.6-flash",

    capabilities: {
      streaming: false,
      tools: false,
    },

    contextWindow: 1000000,
  },  
};

export function getModel(
  name: string,
  provider: ModelProvider
): AIModel {
  const model = models[name];

  if (!model) {
    throw new Error(`Model not found: ${name}`);
  }

  return {
    ...model,
    provider,
  };
}