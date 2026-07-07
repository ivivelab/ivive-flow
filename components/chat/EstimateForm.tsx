'use client';

import { useState } from 'react';

export default function EstimateForm({ serviceId, onHome }: { serviceId: string | null, onHome: (id: string) => void }) {
  const [formData, setFormData] = useState({ name: '', detail: '' });

  const handleSubmit = () => {
    // 여기에 견적 요청 제출 로직 (Supabase 등)을 추가하세요.
    console.log("견적 요청 데이터:", { serviceId, ...formData });
    alert("견적 요청이 접수되었습니다.");
    onHome("main");
  };

  return (
    <div style={{ padding: '10px' }}>
      <h3 style={{ marginBottom: '15px' }}>견적 요청</h3>
      <input 
        placeholder="성함" 
        onChange={(e) => setFormData({...formData, name: e.target.value})} 
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #ddd' }}
      />
      <textarea 
        placeholder="요구사항을 간단히 적어주세요." 
        onChange={(e) => setFormData({...formData, detail: e.target.value})} 
        style={{ width: '100%', padding: '10px', height: '100px', borderRadius: '10px', border: '1px solid #ddd' }}
      />
      <button 
        onClick={handleSubmit} 
        style={{ width: '100%', padding: '12px', marginTop: '10px', borderRadius: '15px', border: 'none', background: '#333', color: '#fff', cursor: 'pointer' }}
      >
        제출하기
      </button>
      <button 
        onClick={() => onHome("main")} 
        style={{ width: '100%', padding: '10px', marginTop: '10px', background: 'none', border: 'none', color: '#999', cursor: 'pointer' }}
      >
        처음으로 돌아가기
      </button>
    </div>
  );
}