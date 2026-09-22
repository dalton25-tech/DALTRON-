import type { AIModel } from "./model.js";

export function supportsStreaming(model: AIModel): boolean {
  return model.capabilities.streaming;
}

export function supportsTools(model: AIModel): boolean {
  return model.capabilities.tools;
}

export function getContextWindow(model: AIModel): number {
  return model.contextWindow;
}