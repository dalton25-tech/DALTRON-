export interface GenerateOptions {
  model: string;
  systemPrompt: string;
  input: string;
  temperature: number;
  maxTokens: number;
}

export interface ModelProvider {
  name: string;

  generate(options: GenerateOptions): Promise<string>;
}
