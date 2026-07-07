'use client';

import { NAVIGATION } from "@/data/navigation";

interface ChatMenuProps {
  currentStep: string;
  onSelect: (id: string, title: string) => void;
}

export default function ChatMenu({
  currentStep,
  onSelect,
}: ChatMenuProps) {

  const menu =
    NAVIGATION[currentStep as keyof typeof NAVIGATION];

  if (!menu) return null;

  return (
    <>
      <div
        style={{
          marginBottom: 20,
          fontSize: "0.95rem",
          color: "#666",
          fontWeight: 600,
        }}
      >
        {menu.title}
      </div>

      {menu.items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id, item.title)}
          style={buttonStyle}
        >
          {item.title}
        </button>
      ))}
    </>
  );
}

const buttonStyle = {
  display: "block",
  width: "100%",
  marginBottom: 12,
  padding: "14px",
  background: "#f8f9fa",
  border: "1px solid #e5e5e5",
  borderRadius: 15,
  cursor: "pointer",
  textAlign: "left" as const,
  fontSize: "15px",
  fontWeight: 600,
};