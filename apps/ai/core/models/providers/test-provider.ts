import type { ModelProvider, GenerateOptions } from "./providers.js";

export class TestProvider implements ModelProvider {
  name = "Test Provider";

  async generate(options: GenerateOptions): Promise<string> {
    return `Provider received: ${options.input}`;
  }
}
