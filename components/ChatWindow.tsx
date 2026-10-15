
"use client";

import { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

interface ChatWindowProps {
  sidebarOpen: boolean;
  onOpenSidebar: () => void;
}

export default function ChatWindow({
  sidebarOpen,
  onOpenSidebar,
}: ChatWindowProps) {
  const [messages, setMessages] = useState<any[]>([]);

  const handleSend = (message: string) => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "This is a UI preview. Later, this response will come from our FastAPI + LLM backend.",
          sources: [
            {
              title: "React Documentation",
              page: "Page 12",
            },
          ],
        },
      ]);
    }, 700);
  };

  return (
    <section
      className={`chat-container ${
        sidebarOpen ? "" : "chat-full-width"
      }`}
    >
      <header className="chat-header">
        {!sidebarOpen && (
          <button
            className="icon-button"
            onClick={onOpenSidebar}
          >
            ☰
          </button>
        )}

        <div className="header-title">
          <span className="status-dot"></span>
          <span>AI Assistant</span>
        </div>

        <button className="icon-button">•••</button>
      </header>

      <div className="messages-container">
        {messages.length === 0 ? (
          <WelcomeScreen onPromptClick={handleSend} />
        ) : (
          <div className="messages-list">
            {messages.map((message, index) => (
              <MessageBubble
                key={index}
                role={message.role}
                content={message.content}
                sources={message.sources}
              />
            ))}
          </div>
        )}
      </div>

      <ChatInput onSend={handleSend} />
    </section>
  );
}