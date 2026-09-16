export interface AIConfig {
  modelName: string;
  providerName: string;
  temperature: number;
  maxTokens: number;
}

export const defaultAIConfig: AIConfig = {
  modelName: "test-model",
  providerName: "test",
  temperature: 0.7,
  maxTokens: 1000,
};