import type { AIConfig } from "./config/config";
import { defaultAIConfig } from "./config/config";
import { InferenceEngine } from "./inference/inference";
import { getModel } from "./models/model-registry";
import { getProvider } from "./models/providers/provider-registry";
import type { AIRequest } from "./request";
import type { AIResponse } from "./response";

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