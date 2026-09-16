import type { ModelProvider } from "./provider";
import { TestProvider } from "./test-provider";

const providers: Record<string, ModelProvider> = {
  test: new TestProvider(),
};

export function getProvider(name: string): ModelProvider {
  const provider = providers[name];

  if (!provider) {
    throw new Error(`Provider not found: ${name}`);
  }

  return provider;
}