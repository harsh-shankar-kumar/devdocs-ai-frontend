interface SourceCardProps {
  title: string;
  page: string;
}

export default function SourceCard({
  title,
  page,
}: SourceCardProps) {
  return (
    <button className="source-card">
      <div className="source-file-icon">
        📄
      </div>

      <div className="source-info">
        <strong>{title}</strong>
        <span>{page}</span>
      </div>

      <span className="source-arrow">↗</span>
    </button>
  );
}