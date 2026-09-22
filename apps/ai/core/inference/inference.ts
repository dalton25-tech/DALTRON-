import {
  supportsStreaming,
  supportsTools,
  getContextWindow,
} from "../models/capabilities.js";

import type { AIModel } from "../models/model.js";
import type { AIConfig } from "../config/config.js";
import { defaultSystemPrompt } from "../prompts/system.js";

export class InferenceEngine {
  constructor(
    private model: AIModel,
    private config: AIConfig
  ) {}

  async generate(input: string): Promise<string> {
    console.log(`Using model: ${this.config.modelName}`);
    console.log(`Temperature: ${this.config.temperature}`);
    console.log(`Max tokens: ${this.config.maxTokens}`);
    console.log(`System prompt loaded: ${defaultSystemPrompt.trim()}`);

    console.log(
      `Streaming supported: ${supportsStreaming(this.model)}`
    );

    console.log(
      `Tools supported: ${supportsTools(this.model)}`
    );

    console.log(
      `Context window: ${getContextWindow(this.model)}`
    );

    return this.model.provider.generate(
      defaultSystemPrompt,
      input
    );
  }
}