import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, RotateCcw, ExternalLink } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import './Chatbot.css'

export function parseSSEChunk(rawChunk) {
  const lines = rawChunk.split('\n')
  const tokens = []
  let isDone = false

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed.startsWith('data:')) continue

    const payload = trimmed.replace(/^data:\s*/, '')
    try {
      const data = JSON.parse(payload)
      if (data.done) isDone = true
      if (data.text) tokens.push(data.text)
    } catch {
      // ignore non-json keep-alive
    }
  }

  return { tokens, isDone }
}

const INITIAL_MESSAGE = {
  role: 'assistant',
  content: 'Hi! Ask me anything about De Anza courses, schedules, transfer requirements, or registration.',
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(true)
  const [messages, setMessages] = useState([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  const handleSend = async (e) => {
    e?.preventDefault()
    const userText = input.trim()
    if (!userText || isLoading) return

    const newHistory = [...messages, { role: 'user', content: userText }]
    setMessages(newHistory)
    setInput('')
    setIsLoading(true)

    // Append placeholder for assistant response
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

    try {
      const response = await fetch('https://deanza-chatbot.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          history: messages.slice(1).map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!response.ok || !response.body) {
        throw new Error(`Status ${response.status}`)
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { value, done } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        const { tokens } = parseSSEChunk(chunk)

        if (tokens.length > 0) {
          accumulated += tokens.join('')
          setMessages((prev) => {
            const copy = [...prev]
            copy[copy.length - 1] = {
              role: 'assistant',
              content: accumulated,
            }
            return copy
          })
        }
      }
    } catch {
      setMessages((prev) => {
        const copy = [...prev]
        copy[copy.length - 1] = {
          role: 'assistant',
          content: 'Sorry, I could not complete the request. Please try again.',
        }
        return copy
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE])
    setInput('')
    setIsLoading(false)
  }

  const handleExpand = () => {
    const realMessages = messages.slice(1).map((m) => ({
      role: m.role,
      content: m.content,
    }))
    const targetUrl = realMessages.length > 0
      ? `https://deanza-chatbot.onrender.com/?history=${encodeURIComponent(JSON.stringify(realMessages))}`
      : 'https://deanza-chatbot.onrender.com/'
    window.open(targetUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className={`chatbot-window ${messages.length > 1 ? 'is-expanded' : 'is-compact'}`}>
          <header className="chatbot-header">
            <h3 className="chatbot-title">De Anza Assistant</h3>
            <div className="chatbot-header-actions">
              <button
                type="button"
                onClick={handleReset}
                className="chatbot-action-btn"
                aria-label="Refresh conversation"
                title="Refresh conversation"
              >
                <RotateCcw size={16} />
              </button>
              <button
                type="button"
                onClick={handleExpand}
                className="chatbot-action-btn"
                aria-label="Expand to full website"
                title="Open in full website"
              >
                <ExternalLink size={16} />
              </button>
            </div>
          </header>

          <div className="chatbot-messages">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`chatbot-msg chatbot-msg-${m.role}`}
              >
                {m.content ? (
                  m.role === 'assistant' ? (
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => (
                          <a {...props} target="_blank" rel="noreferrer" />
                        ),
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  ) : (
                    m.content
                  )
                ) : (
                  <div className="chatbot-loading-dots">
                    <span></span><span></span><span></span>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-form" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              className="chatbot-send-btn"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        className="chatbot-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={30} /> : <MessageCircle size={30} />}
      </button>
    </div>
  )
}
