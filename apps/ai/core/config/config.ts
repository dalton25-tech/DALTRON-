export interface AIConfig {
  modelName: string;
  providerName: string;
  temperature: number;
  maxTokens: number;
}

export const defaultAIConfig: AIConfig = {
  modelName: "gemini-3.6-flash",
  providerName: "gemini",
  temperature: 0.7,
  maxTokens: 1000,
};