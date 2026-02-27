import React, { useState } from 'react'
import { Send, Bot, User } from 'lucide-react'
import './ModuleStyles.css'

function ChatModule({ demoMode }) {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hello! I\'m your AI assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const demoResponses = [
    "That's a great question! Let me help you with that.",
    "I understand what you're looking for. Here's what I can tell you...",
    "Based on your question, I'd recommend exploring these options.",
    "That's an interesting topic! Let me break it down for you.",
    "I can definitely assist with that. Here's my suggestion..."
  ]

  const handleSend = () => {
    if (!input.trim() || loading) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    setTimeout(() => {
      const aiResponse = {
        role: 'ai',
        content: demoResponses[Math.floor(Math.random() * demoResponses.length)]
      }
      setMessages(prev => [...prev, aiResponse])
      setLoading(false)
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>AI Chat Assistant</h2>
        <p>Have a conversation with our intelligent AI assistant</p>
      </div>

      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.role}`}>
              <div className={`message-avatar ${msg.role}`}>
                {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
              </div>
              <div className="message-content">
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="chat-message ai">
              <div className="message-avatar ai">
                <Bot size={18} />
              </div>
              <div className="message-content">
                <div className="loading" />
              </div>
            </div>
          )}
        </div>

        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
          />
          <button 
            className="btn btn-primary"
            onClick={handleSend}
            disabled={loading || !input.trim()}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatModule
