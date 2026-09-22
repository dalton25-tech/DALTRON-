import { GoogleGenAI } from "@google/genai";
import type { ModelProvider } from "./providers.js";

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

  async generate(
    systemPrompt: string,
    input: string
  ): Promise<string> {
    const response = await this.ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: input,
      config: {
        systemInstruction: systemPrompt,
      },
    });

    return response.text ?? "";
  }
}