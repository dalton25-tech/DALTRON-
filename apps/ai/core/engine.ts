import type { AIConfig } from "./config/config.js";
import { defaultAIConfig } from "./config/config.js";
import { InferenceEngine } from "./inference/inference.js";
import { getModel } from "./models/model-registry.js";
import { getProvider } from "./models/providers/provider-registry.js";
import type { AIRequest } from "./request.js";
import type { AIResponse } from "./response.js";

export class AIEngine {
  private inference: InferenceEngine;

  constructor(
    private config: AIConfig = defaultAIConfig
  ) {
    const provider = getProvider(config.providerName);
    const model = getModel(config.modelName, provider);

    this.inference = new InferenceEngine(
      model,
      config
    );
  }

  async run(request: AIRequest): Promise<AIResponse> {
    const output = await this.inference.generate(request.input);

    return {
      output,
      model: this.config.modelName,
      provider: this.config.providerName,
    };
  }
}