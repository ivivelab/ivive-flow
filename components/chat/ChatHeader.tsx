'use client';

interface ChatHeaderProps {
  title?: string;
  onClose: () => void;
}

export default function ChatHeader({
  title = "상담 서비스",
  onClose,
}: ChatHeaderProps) {
  return (
    <div
      style={{
        padding: "20px",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <strong>{title}</strong>

      <button
        onClick={onClose}
        style={{
          border: "none",
          background: "none",
          fontSize: 24,
          cursor: "pointer",
        }}
      >
        ×
      </button>
    </div>
  );
}