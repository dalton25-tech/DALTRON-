import type { ModelProvider } from "./providers.js";
import { TestProvider } from "./test-provider.js";
import { GeminiProvider } from "./gemini-provider.js";

const providers: Record<string, () => ModelProvider> = {
  test: () => new TestProvider(),
  gemini: () => new GeminiProvider(),
};

export function getProvider(name: string): ModelProvider {
  const factory = providers[name];

  if (!factory) {
    throw new Error(`Provider not found: ${name}`);
  }

  return factory();
}
