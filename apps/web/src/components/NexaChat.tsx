import { useState } from 'react'
import { sendMessageToNexa } from '../services/nexaApi'

function NexaChat() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      sender: 'Nexa',
      text: "Hello. I'm Nexa, the intelligent assistant within the DALTRON ecosystem.",
      type: 'ai',
    },
  ])

  async function handleSend() {
    if (!input.trim()) return

    const userMessage = input

    setMessages((previous) => [
      ...previous,
      {
        sender: 'You',
        text: userMessage,
        type: 'user',
      },
    ])

    setInput('')

    const response = await sendMessageToNexa(userMessage)

    setMessages((previous) => [
      ...previous,
      {
        sender: 'Nexa',
        text: response.message,
        type: 'ai',
      },
    ])
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
              message.type === 'ai'
                ? 'nexa-message-ai'
                : 'nexa-message-user'
            }`}
          >
            {message.type === 'ai' && (
              <div className="nexa-avatar">N</div>
            )}

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
              handleSend()
            }
          }}
        />

        <button type="button" onClick={handleSend}>
          Send
        </button>
      </div>
    </section>
  )
}

export default NexaChat