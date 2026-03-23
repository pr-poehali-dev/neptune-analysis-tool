import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useUIStore } from "@/lib/ui-store"
import { Button } from "@/components/ui/button"

const QUICK_CHIPS = ["Что такое Vilong?", "Продукты", "Контакты"]

const RESPONSES: Record<string, string> = {
  "Что такое Vilong?": "Vilong Company — экосистема брендов, охватывающая все сферы вашей жизни: от книг до электроники. Мы создаём продукты, которые делают жизнь лучше.",
  "Продукты":
    "В нашей экосистеме: VilongBooks — книги и знания, Videluxe — премиальные ноутбуки, и многое другое. Открой раздел «Продукты», чтобы узнать больше!",
  "Контакты":
    "Свяжитесь с нами через форму обратной связи или напишите напрямую. Мы всегда рады новым партнёрствам и сотрудничеству!",
}

const ACTION_RESPONSES: Record<string, { response: string; action: string }> = {
  "открой продукты": { response: "Открываю каталог продуктов Vilong!", action: "art" },
  "покажи продукты": { response: "Вот что мы производим!", action: "art" },
  "открой о компании": { response: "Рассказываю о Vilong Company!", action: "about" },
  "покажи о компании": { response: "Открываю раздел о компании!", action: "about" },
  "открой новости": { response: "Открываю последние новости!", action: "writings" },
  "покажи новости": { response: "Вот наши последние новости!", action: "writings" },
  "открой бренды": { response: "Открываю портфель брендов!", action: "resume" },
  "покажи бренды": { response: "Вот бренды нашей экосистемы!", action: "resume" },
}

type AppType = "about" | "resume" | "writings" | "art"

export function ChatPanel() {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([])
  const [inputValue, setInputValue] = useState("")
  const { openOS } = useUIStore()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleChipClick = (chip: string) => {
    const response = RESPONSES[chip] || "Интересный вопрос! Дайте мне подумать..."
    setMessages((prev) => [...prev, { text: chip, isUser: true }, { text: response, isUser: false }])
  }

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setInputValue("")

    const lowerMessage = userMessage.toLowerCase()
    const actionMatch = Object.keys(ACTION_RESPONSES).find((key) => lowerMessage.includes(key))

    if (actionMatch) {
      const { response, action } = ACTION_RESPONSES[actionMatch]
      setMessages((prev) => [...prev, { text: userMessage, isUser: true }, { text: response, isUser: false }])

      setTimeout(() => {
        openOS(action as AppType)
      }, 1000)
    } else {
      const defaultResponse =
        "Добро пожаловать в Vilong! Попробуйте написать «открой продукты» или «покажи бренды»."
      setMessages((prev) => [...prev, { text: userMessage, isUser: true }, { text: defaultResponse, isUser: false }])
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6 space-y-3 h-32 overflow-y-auto scroll-smooth">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] p-3 border-[3px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                msg.isUser ? "bg-[#1A1AFF] text-white" : "bg-white text-black"
              }`}
            >
              <p className="text-sm font-medium leading-tight">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleInputSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Спросите о продуктах Vilong..."
            className="flex-1 p-3 border-[3px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white text-black font-medium text-sm focus:outline-none focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[1px] focus:translate-y-[1px] transition-all"
          />
          <Button
            type="submit"
            className="bg-[#1A1AFF] text-white border-[3px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-bold px-4"
          >
            Отправить
          </Button>
        </div>
      </form>

      <div className="flex flex-wrap gap-2 justify-center">
        {QUICK_CHIPS.map((chip) => (
          <Button
            key={chip}
            onClick={() => handleChipClick(chip)}
            className="bg-white text-black border-[3px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-bold text-xs px-3 py-2 h-auto"
          >
            {chip}
          </Button>
        ))}
      </div>
    </div>
  )
}
