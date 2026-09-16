import type { ModelProvider } from "./provider";

export class TestProvider implements ModelProvider {
  name = "Test Provider";

  async generate(
    systemPrompt: string,
    input: string
  ): Promise<string> {
    return `Provider received: ${input}`;
  }
}