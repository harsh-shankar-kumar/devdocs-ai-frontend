interface WelcomeScreenProps {
  onPromptClick: (prompt: string) => void;
}

const suggestions = [
  {
    icon: "⚛️",
    title: "Explain React",
    prompt: "Explain React Server Components in simple terms",
  },
  {
    icon: "🧠",
    title: "Learn RAG",
    prompt: "Explain RAG and how it works",
  },
  {
    icon: "🐍",
    title: "FastAPI",
    prompt: "How should I structure a FastAPI project?",
  },
  {
    icon: "🗄️",
    title: "PostgreSQL",
    prompt: "Explain PostgreSQL indexing",
  },
];

export default function WelcomeScreen({
  onPromptClick,
}: WelcomeScreenProps) {
  return (
    <div className="welcome-container">
      <div className="welcome-icon">
        <span>✦</span>
      </div>

      <h2>
        How can I help you
        <span> build?</span>
      </h2>

      <p>
        Ask questions about your code, upload documentation,
        or explore your developer knowledge base.
      </p>

      <div className="suggestions-grid">
        {suggestions.map((item) => (
          <button
            key={item.title}
            className="suggestion-card"
            onClick={() => onPromptClick(item.prompt)}
          >
            <div className="suggestion-icon">
              {item.icon}
            </div>

            <div>
              <strong>{item.title}</strong>
              <span>{item.prompt}</span>
            </div>

            <span className="suggestion-arrow">→</span>
          </button>
        ))}
      </div>

      <div className="welcome-note" >
        <span>⌘</span>
        Your private developer knowledge assistant
      </div>
    </div>
  );
}