import SourceCard from "./SourceCard";

interface Source {
  title: string;
  page: string;
}

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
}

export default function MessageBubble({
  role,
  content,
  sources,
}: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      className={`message-wrapper ${
        isUser ? "user-message" : "assistant-message"
      }`}
    >
      {!isUser && (
        <div className="message-avatar ai-avatar">
          ✦
        </div>
      )}

      <div className="message-content-wrapper">
        <div className="message-label">
          {isUser ? "You" : "DevDocs AI"}
        </div>

        <div className="message-content">
          {content}
        </div>

        {sources && sources.length > 0 && (
          <div className="sources-container">
            <div className="sources-title">
              Sources
            </div>

            {sources.map((source, index) => (
              <SourceCard
                key={index}
                title={source.title}
                page={source.page}
              />
            ))}
          </div>
        )}
      </div>

      {isUser && (
        <div className="message-avatar user-avatar">
          H
        </div>
      )}
    </div>
  );
}