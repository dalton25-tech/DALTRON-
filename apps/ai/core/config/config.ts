export interface AIConfig {
  modelName: string;
  providerName: string;
  temperature: number;
  maxTokens: number;
}

export const defaultAIConfig: AIConfig = {
  modelName: process.env.DALTRON_AI_MODEL ?? "gemini-3.6-flash",
  providerName: process.env.DALTRON_AI_PROVIDER ?? "gemini",
  temperature: Number(process.env.DALTRON_AI_TEMPERATURE ?? "0.7"),
  maxTokens: Number(process.env.DALTRON_AI_MAX_TOKENS ?? "1000"),
};
