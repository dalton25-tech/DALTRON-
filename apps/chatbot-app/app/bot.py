import asyncio
from typing import List, Dict
from app.config import settings

class ChatbotEngine:
    def __init__(self):
        self.system_prompt = settings.system_prompt

    async def generate_response(self, history: List[Dict[str, str]]) -> str:
        """
        Processes conversation history and returns a response.
        Swap this logic with an LLM call (e.g., OpenAI, Ollama, HuggingFace) as needed.
        """
        # Extract last user message
        last_message = history[-1]["content"] if history else ""
        
        # Rule-based/Mock processing delay
        await asyncio.sleep(0.5)

        # Simple Echo/Response Logic (Replace with actual LLM call)
        if "hello" in last_message.lower():
            return "Hello! How can I assist you with your project today?"
        elif "help" in last_message.lower():
            return "I can answer questions, summarize text, or help debug code."
        else:
            return f"Received your message: '{last_message}'. (Backend pipeline processing operational)."

bot_engine = ChatbotEngine()