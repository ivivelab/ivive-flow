'use client';

import { useState } from "react";

export default function ContactPanel({
  onHome,
}: {
  onHome: () => void;
}) {
  const [form, setForm] = useState({
    agreed: false,
    name: "",
    phone: "",
    email: "",
    content: "",
  });

  const handleSubmit = () => {
    if (
      !form.agreed ||
      !form.name ||
      !form.phone ||
      !form.content
    ) {
      alert("개인정보 동의, 이름, 전화번호, 문의내용을 입력해주세요.");
      return;
    }

    // TODO : Supabase 저장

    alert("상담 문의가 접수되었습니다.\n담당자가 확인 후 답변드리겠습니다.");

    onHome();
  };

  return (
    <div style={{ padding: "10px" }}>
      <h3 style={{ marginBottom: 20 }}>
        상담 문의
      </h3>

      <p
        style={{
          fontSize: 14,
          color: "#666",
          lineHeight: 1.6,
          marginBottom: 20,
        }}
      >
        궁금하신 내용을 남겨주시면
        <br />
        담당자가 확인 후 답변드리겠습니다.
      </p>

      <label
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 15,
          fontSize: 14,
        }}
      >
        <input
          type="checkbox"
          checked={form.agreed}
          onChange={(e) =>
            setForm({
              ...form,
              agreed: e.target.checked,
            })
          }
          style={{ marginRight: 8 }}
        />

        개인정보 수집 및 이용에 동의합니다.
      </label>

      <input
        placeholder="이름"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
        style={inputStyle}
      />

      <input
        placeholder="전화번호"
        value={form.phone}
        onChange={(e) =>
          setForm({
            ...form,
            phone: e.target.value,
          })
        }
        style={{
          ...inputStyle,
          marginTop: 10,
        }}
      />

      <input
        placeholder="이메일 (선택)"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
        style={{
          ...inputStyle,
          marginTop: 10,
        }}
      />

      <textarea
        placeholder="문의 내용을 입력해주세요."
        value={form.content}
        onChange={(e) =>
          setForm({
            ...form,
            content: e.target.value,
          })
        }
        style={{
          ...inputStyle,
          marginTop: 10,
          minHeight: 140,
          resize: "none",
        }}
      />

      <button
        onClick={handleSubmit}
        style={buttonStyle}
      >
        상담 문의 접수
      </button>

      <button
        onClick={onHome}
        style={{
          width: "100%",
          marginTop: 10,
          border: "none",
          background: "none",
          color: "#999",
          cursor: "pointer",
        }}
      >
        처음으로
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: 12,
  border: "1px solid #ddd",
  boxSizing: "border-box" as const,
};

const buttonStyle = {
  width: "100%",
  marginTop: 15,
  padding: "14px",
  border: "none",
  borderRadius: 15,
  background: "#333",
  color: "#fff",
  cursor: "pointer",
};