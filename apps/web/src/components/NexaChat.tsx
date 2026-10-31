import { useState } from 'react';
import { sendMessageToNexa } from '../services/nexaApi';

interface ChatMessage {
  sender: string;
  text: string;
  type: 'ai' | 'user';
}

function NexaChat() {
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'Nexa',
      text: "Hello. I'm Nexa, the intelligent assistant within the DALTRON ecosystem.",
      type: 'ai',
    },
  ]);

  async function handleSend() {
    const userMessage = input.trim();

    if (!userMessage || isSending) return;

    setMessages((previous) => [
      ...previous,
      {
        sender: 'You',
        text: userMessage,
        type: 'user',
      },
    ]);

    setInput('');
    setIsSending(true);

    try {
      const response = await sendMessageToNexa(userMessage);

      setMessages((previous) => [
        ...previous,
        {
          sender: 'Nexa',
          text: response.output,
          type: 'ai',
        },
      ]);
    } catch (error) {
      const reason = error instanceof Error ? error.message : 'Unknown error';

      setMessages((previous) => [
        ...previous,
        {
          sender: 'Nexa',
          text: `Sorry, I couldn't respond right now. (${reason})`,
          type: 'ai',
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="nexa-chat" className="nexa-chat">
      <div className="nexa-chat-header">
        <div>
          <p className="section-label">NEXA INTELLIGENCE</p>
          <h2>Talk to Nexa.</h2>
        </div>

        <div className="nexa-online">
          <span></span>
          SYSTEM READY
        </div>
      </div>

      <div className="nexa-chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`nexa-message ${
              message.type === 'ai' ? 'nexa-message-ai' : 'nexa-message-user'
            }`}
          >
            {message.type === 'ai' && <div className="nexa-avatar">N</div>}

            <div className="nexa-message-content">
              <strong>{message.sender}</strong>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="nexa-input-area">
        <input
          type="text"
          placeholder="Ask Nexa anything..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSend();
            }
          }}
        />

        <button type="button" onClick={handleSend} disabled={isSending}>
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </div>
    </section>
  );
}

export default NexaChat;
