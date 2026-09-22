import type { ModelProvider } from "./providers.js";

export class TestProvider implements ModelProvider {
  name = "Test Provider";

  async generate(
    systemPrompt: string,
    input: string
  ): Promise<string> {
    return `Provider received: ${input}`;
  }
}