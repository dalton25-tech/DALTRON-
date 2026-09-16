export interface ModelProvider {
  name: string;

  generate(
    systemPrompt: string,
    input: string
  ): Promise<string>;
}