from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel, Field
from typing import List
import json

from app.bot import bot_engine
from app.config import settings

app = FastAPI(title="AI Chatbot Backend Service")

# Mount static frontend assets
app.mount("/static", StaticFiles(directory="static"), name="static")


class Message(BaseModel):
    role: str = Field(..., description="Role of the sender: 'user' or 'assistant'")
    content: str = Field(..., description="Text content of the message")


class ChatRequest(BaseModel):
    messages: List[Message]


class ChatResponse(BaseModel):
    reply: Message


@app.get("/")
async def read_index():
    return FileResponse("static/index.html")


@app.post("/api/chat", response_model=ChatResponse)
async def http_chat_endpoint(payload: ChatRequest):
    """Standard REST HTTP endpoint for sending/receiving chat messages."""
    if not payload.messages:
        raise HTTPException(status_code=400, detail="Messages payload cannot be empty.")
    
    formatted_history = [msg.model_dump() for msg in payload.messages]
    reply_content = await bot_engine.generate_response(formatted_history)
    
    return ChatResponse(
        reply=Message(role="assistant", content=reply_content)
    )


@app.websocket("/ws/chat")
async def websocket_chat_endpoint(websocket: WebSocket):
    """Real-time bi-directional WebSocket chat endpoint."""
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            payload = json.loads(data)
            
            history = payload.get("messages", [])
            reply_content = await bot_engine.generate_response(history)
            
            await websocket.send_json({
                "role": "assistant",
                "content": reply_content
            })
    except WebSocketDisconnect:
        pass
    except Exception as e:
        await websocket.close(code=1011, reason=str(e))