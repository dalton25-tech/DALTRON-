import type { AIModel } from "./model";
import type { ModelProvider } from "./providers/provider";

const models: Record<string, Omit<AIModel, "provider">> = {
  "test-model": {
    name: "test-model",

    capabilities: {
      streaming: false,
      tools: false,
    },

    contextWindow: 4000,
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