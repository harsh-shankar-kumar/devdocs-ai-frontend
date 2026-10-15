"use client";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({
  isOpen,
  onToggle,
}: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <div className="sidebar-header">
        {isOpen && (
          <div className="logo-container">
            <div className="logo-icon">
              {"</>"}
            </div>

            <div>
              <h1>DevDocs AI</h1>
              <span>Developer Assistant</span>
            </div>
          </div>
        )}

        <button
          className="icon-button sidebar-toggle"
          onClick={onToggle}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <>
          <button className="new-chat-button">
            <span>+</span>
            New Chat
          </button>

          <div className="sidebar-section">
            <div className="section-title">
              <span>Recent Chats</span>
            </div>

            <div className="chat-history">
              <button className="history-item active">
                <span className="history-icon">💬</span>
                <span className="history-text">
                  Explain React Server Components
                </span>
              </button>

              <button className="history-item">
                <span className="history-icon">💬</span>
                <span className="history-text">
                  Understanding RAG
                </span>
              </button>

              <button className="history-item">
                <span className="history-icon">💬</span>
                <span className="history-text">
                  FastAPI authentication
                </span>
              </button>

              <button className="history-item">
                <span className="history-icon">💬</span>
                <span className="history-text">
                  PostgreSQL indexing
                </span>
              </button>
            </div>
          </div>

          <div className="sidebar-bottom">
            <button className="sidebar-menu-item">
              <span>📚</span>
              Knowledge Base
            </button>

            <button className="sidebar-menu-item">
              <span>⚙️</span>
              Settings
            </button>

            <div className="user-profile">
              <div className="avatar">H</div>

              <div className="user-info">
                <strong>Developer</strong>
                <span>Free Plan</span>
              </div>

              <button className="more-button">•••</button>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}