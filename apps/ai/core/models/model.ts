import type { ModelProvider } from "./providers/providers.js";

export interface AIModel {
  name: string;
  provider: ModelProvider;

  capabilities: {
    streaming: boolean;
    tools: boolean;
  };

  contextWindow: number;
}