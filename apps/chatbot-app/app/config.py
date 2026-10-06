from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    bot_name: str = "Assistant"
    system_prompt: str = "You are a helpful AI assistant."
    openai_api_key: str = ""

    class Config:
        env_file = ".env"

settings = Settings()