export interface AIRequest {
  input: string;
}

export function validateAIRequest(request: AIRequest): string {
  if (typeof request.input !== "string") {
    throw new Error("AI request input must be a string.");
  }

  const input = request.input.trim();

  if (!input) {
    throw new Error("AI request input cannot be empty.");
  }

  return input;
}
