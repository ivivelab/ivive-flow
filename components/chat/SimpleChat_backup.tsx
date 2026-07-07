'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const MENU_DATA: any = {
  main: {
    text: "안녕하세요! 무엇을 도와드릴까요?",
    items: [
      { id: 'automation', title: '업무 자동화' },
      { id: 'pricing', title: '가격 문의' },
      { id: 'booking', title: '예약 하기' },
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
    text: "예약 신청 정보를 입력해주세요.",
    items: [
      { id: 'booking_request', title: '예약 신청' },
      { id: 'contact_admin', title: '상담원 연결' },
    ]
  }
};

export default function SimpleChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState('main');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [bookingData, setBookingData] = useState({
    customer_name: '',
    phone: '',
    agreed: false,
  });
  const [availableTime, setAvailableTime] = useState('');
  const [reservationDone, setReservationDone] = useState(false);

  // URL에서 source 파라미터를 가져와 저장
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('source');
    if (source) {
      localStorage.setItem('source', source);
    }
  }, []);

  const handleMenuClick = (id: string, title: string) => {
    if (id === 'contact_admin') {
      window.open('https://pf.kakao.com/your-channel-id', '_blank');
      return;
    }
    if (id === 'booking_request') {
      setCurrentStep('booking');
      return;
    }
    setSelectedTitle(title);
    if (id === 'action') {
      setCurrentStep('final');
    } else {
      setCurrentStep(id);
    }
  };

  const findAvailableTime = async () => {
    if (!bookingData.customer_name || !bookingData.phone || !bookingData.agreed) {
      alert('개인정보 동의, 이름, 전화번호를 입력해주세요.');
      return;
    }
    const today = new Date().toISOString().split('T')[0];
    const TIMES = ['10:00:00', '11:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00'];
    const { data } = await supabase
      .from('appointments')
      .select('appointment_time')
      .eq('appointment_date', today);

    const booked = data?.map((item: any) => item.appointment_time) || [];
    const available = TIMES.find((time) => !booked.includes(time));
    if (!available) {
      alert('오늘 예약이 모두 마감되었습니다.');
      return;
    }
    setAvailableTime(available);
  };

  const createReservation = async () => {
    const today = new Date().toISOString().split('T')[0];
    const { error } = await supabase
      .from('appointments')
      .insert({
        customer_name: bookingData.customer_name,
        phone: bookingData.phone,
        appointment_date: today,
        appointment_time: availableTime,
        status: 'confirmed',
        registration_source: localStorage.getItem('source') || 'direct',
        agreed_privacy: true,
      });

    if (error) {
      console.error(error);
      alert('예약 저장 실패');
      return;
    }
    setReservationDone(true);
  };

  return (
    <div style={{ position: 'fixed', bottom: 30, right: 30, zIndex: 1000 }}>
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <img 
            src="/images/dashboard/catprofile.webp" 
            alt="Profile" 
            style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} 
          />
        </button>
      )}

      {isOpen && (
        <div style={{
          width: 360,
          height: 550,
          background: '#ffffff',
          border: '1px solid #e0e0e0',
          borderRadius: 25,
          overflow: 'hidden',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* 헤더 */}
          <div style={{ padding: '20px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong style={{ fontSize: '1.1rem' }}>상담 서비스</strong>
            <button onClick={() => setIsOpen(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.5rem', color: '#999' }}>&times;</button>
          </div>

          {/* 콘텐츠 */}
          <div style={{ padding: 20, flex: 1, overflowY: 'auto' }}>
            {currentStep !== 'booking' && currentStep !== 'final' && (
              <>
                <div style={{ marginBottom: 20, fontSize: '0.95rem', color: '#555' }}>
                  {MENU_DATA[currentStep]?.text}
                </div>
                {MENU_DATA[currentStep]?.items.map((item: any) => (
                  <button
                    key={item.title}
                    onClick={() => handleMenuClick(item.id, item.title)}
                    style={{ 
                      display: 'block', 
                      width: '100%', 
                      marginBottom: 12, 
                      padding: '15px',
                      background: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: 15,
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}
                  >
                    {item.title}
                  </button>
                ))}
              </>
            )}

            {currentStep === 'booking' && !reservationDone && (
              <>
                <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem', marginBottom: 10 }}>
                  <input type="checkbox" checked={bookingData.agreed} onChange={(e) => setBookingData({...bookingData, agreed: e.target.checked})} style={{ marginRight: 8 }} />
                  개인정보 수집 및 이용 동의
                </label>
                <input placeholder="이름" value={bookingData.customer_name} onChange={(e) => setBookingData({...bookingData, customer_name: e.target.value})} style={{ width: '100%', padding: '10px', marginTop: 5, borderRadius: 10, border: '1px solid #ddd' }} />
                <input placeholder="전화번호" value={bookingData.phone} onChange={(e) => setBookingData({...bookingData, phone: e.target.value})} style={{ width: '100%', padding: '10px', marginTop: 10, borderRadius: 10, border: '1px solid #ddd' }} />
                {!availableTime ? (
                  <button onClick={findAvailableTime} style={{ width: '100%', marginTop: 15, padding: '12px', borderRadius: 15, border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer' }}>예약 가능 시간 확인</button>
                ) : (
                  <>
                    <div style={{ marginTop: 20, padding: '15px', background: '#e7f1ff', borderRadius: 15, textAlign: 'center' }}>
                      가장 빠른 시간: <strong>{availableTime}</strong>
                    </div>
                    <button onClick={createReservation} style={{ width: '100%', marginTop: 10, padding: '12px', borderRadius: 15, border: 'none', background: '#28a745', color: '#fff', cursor: 'pointer' }}>예약 확정</button>
                  </>
                )}
              </>
            )}

            {reservationDone && (
              <div style={{ textAlign: 'center', marginTop: 40 }}>
                <h3 style={{ marginBottom: 10 }}>예약 완료 😊</h3>
                <p>예약 시간 : {availableTime}</p>
                <button onClick={() => { setReservationDone(false); setCurrentStep('main'); }} style={{ marginTop: 20, padding: '10px 20px', borderRadius: 10, border: 'none', background: '#eee', cursor: 'pointer' }}>처음으로</button>
              </div>
            )}

            {currentStep === 'final' && (
              <>
                <div style={{ marginBottom: 20, padding: '15px', borderRadius: 15, background: '#fff3cd' }}>[{selectedTitle}] 선택하셨습니다.</div>
                <button onClick={() => setCurrentStep('main')} style={{ width: '100%', padding: '12px', borderRadius: 15, border: 'none', background: '#333', color: '#fff', cursor: 'pointer' }}>처음으로</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}