'use client';

import { useState } from 'react';

// 메뉴 데이터 구조
const MENU_DATA: any = {
  main: {
    text: "안녕하세요! 무엇을 도와드릴까요?",
    items: [
      { id: 'automation', title: '업무 자동화' },
      { id: 'pricing', title: '가격 문의' },
      { id: 'booking', title: '예약 안내' },
    ]
  },
  automation: {
    text: "업무 자동화 서비스입니다. 항목을 선택하세요.",
    items: [
      { id: 'action', title: '상담 자동화' },
      { id: 'action', title: '예약 자동화' },
      { id: 'action', title: '매출 관리' },
      { id: 'action', title: '고객 관리' },
      { id: 'action', title: '마케팅 자동화' },
    ]
  },
  pricing: {
    text: "가격 문의 항목입니다.",
    items: [
      { id: 'action', title: '웹사이트 개발' },
      { id: 'action', title: '업무 자동화' },
      { id: 'action', title: '창업 패키지' },
      { id: 'action', title: '개별 템플릿' },
    ]
  },
  booking: {
    text: "예약 안내입니다.",
    items: [
      { id: 'booking_action', title: '예약 신청' },
      { id: 'booking_action', title: '위치 안내' },
      { id: 'contact_admin', title: '상담원 연결' },
    ]
  }
};

export default function SimpleChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState('main');
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleMenuClick = (id: string, title: string) => {
    if (id === 'contact_admin') {
      window.open('https://pf.kakao.com/your-channel-id', '_blank');
      return;
    }
    
    setSelectedTitle(title);
    if (id === 'action' || id === 'booking_action') {
      setCurrentStep('final');
    } else {
      setCurrentStep(id);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000 }}>
      {/* 닫혔을 때 보이는 프로필 버튼 */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          style={{ 
            width: '65px', 
            height: '65px', 
            borderRadius: '50%', 
            border: 'none', 
            cursor: 'pointer', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
            padding: 0,
            overflow: 'hidden'
          }}
        >
          <img 
            src="/images/dashboard/catprofile.webp" 
            alt="Chat" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </button>
      )}

      {/* 열렸을 때 보이는 채팅창 */}
      {isOpen && (
        <div style={{ width: '360px', height: '550px', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #ddd', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}>
          <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong>상담 서비스</strong>
            <button onClick={() => setIsOpen(false)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>X</button>
          </div>

          <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
              <img 
                src="/images/dashboard/catprofile.webp" 
                alt="Profile" 
                style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px', objectFit: 'cover', border: '1px solid #eee' }} 
              />
              <div style={{ padding: '12px 15px', borderRadius: '15px', backgroundColor: '#f1f0f0', maxWidth: '75%', fontSize: '14px', lineHeight: '1.4' }}>
                {currentStep === 'final' 
                  ? `[${selectedTitle}] 선택하셨습니다. 어떻게 할까요?` 
                  : MENU_DATA[currentStep]?.text || "상세 안내입니다."
                }
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {currentStep === 'final' ? (
                <>
                  <button style={{ padding: '10px', borderRadius: '8px', border: '1px solid #007bff', background: '#fff', cursor: 'pointer' }}>견적 요청하기</button>
                  <button onClick={() => window.open('https://pf.kakao.com/your-channel-id', '_blank')} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #28a745', background: '#fff', cursor: 'pointer' }}>상담원 연결</button>
                  <button onClick={() => setCurrentStep('main')} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc', background: '#fff', cursor: 'pointer' }}>처음으로</button>
                </>
              ) : (
                MENU_DATA[currentStep]?.items.map((item: any) => (
                  <button key={item.title} onClick={() => handleMenuClick(item.id, item.title)} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #007bff', background: '#fff', cursor: 'pointer' }}>
                    {item.title}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}