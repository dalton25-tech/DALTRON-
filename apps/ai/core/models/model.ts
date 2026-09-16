import type { ModelProvider } from "./providers/provider";

export interface AIModel {
  name: string;
  provider: ModelProvider;

  capabilities: {
    streaming: boolean;
    tools: boolean;
  };

  contextWindow: number;
}