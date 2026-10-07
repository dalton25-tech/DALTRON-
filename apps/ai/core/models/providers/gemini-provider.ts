import { GoogleGenAI } from "@google/genai";
import type { ModelProvider, GenerateOptions } from "./providers.js";

export class GeminiProvider implements ModelProvider {
  name = "Gemini";

  private ai: GoogleGenAI;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error(
        "GEMINI_API_KEY is not set in the environment."
      );
    }

    this.ai = new GoogleGenAI({
      apiKey,
    });
  }

  async generate(options: GenerateOptions): Promise<string> {
    const response = await this.ai.models.generateContent({
      model: options.model,
      contents: options.input,
      config: {
        systemInstruction: options.systemPrompt,
        temperature: options.temperature,
        maxOutputTokens: options.maxTokens,
      },
    });

    return response.text ?? "";
  }
}
