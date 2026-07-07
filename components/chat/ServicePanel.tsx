'use client';

interface ServicePanelProps {
  service: {
    title: string;
    info: string;
    price: string;
  };
  onEstimate: () => void;
  onContact: () => void;
  onHome: () => void;
}

export default function ServicePanel({ service, onEstimate, onContact, onHome }: ServicePanelProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <h2 style={{ margin: 0 }}>{service.title}</h2>
      <p style={{ color: "#666", lineHeight: 1.6 }}>{service.info}</p>
      <div style={{ padding: "15px", background: "#f8f9fa", borderRadius: 10 }}>
        <strong>가격:</strong> {service.price}
      </div>
      <button onClick={onEstimate} style={buttonStyle}>견적 요청하기</button>
      <button onClick={onContact} style={buttonStyle}>상담원 연결</button>
      <button onClick={onHome} style={{ ...buttonStyle, background: "#eee", color: "#333" }}>처음으로</button>
    </div>
  );
}

const buttonStyle = { padding: "12px", borderRadius: 10, border: "none", background: "#007bff", color: "#fff", cursor: "pointer", fontWeight: "bold" as const };