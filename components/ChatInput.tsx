"use client";

import { useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export default function ChatInput({
  onSend,
}: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;

    onSend(input);
    setInput("");
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="input-area">
      <div className="input-wrapper">
        <button
          className="input-icon-button"
          title="Upload document"
        >
          +
        </button>

        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about your code..."
          rows={1}
        />

        <div className="input-actions">
          <button
            className="input-icon-button"
            title="Voice input"
          >
            ♫
          </button>

          <button
            className={`send-button ${
              input.trim() ? "send-active" : ""
            }`}
            onClick={handleSubmit}
            disabled={!input.trim()}
          >
            ↑
          </button>
        </div>
      </div>

      <div className="input-footer">
        <span>DevDocs AI can make mistakes. Verify important information.</span>

        <span>
          Enter ↵ &nbsp; Shift + Enter ↵
        </span>
      </div>
    </div>
  );
}