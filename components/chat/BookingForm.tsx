'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

// 견적폼과 동일한 스타일 적용
const inputStyle = { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #ddd', boxSizing: 'border-box' as const };
const buttonStyle = { width: '100%', padding: '12px', marginTop: '10px', borderRadius: '15px', border: 'none', background: '#333', color: '#fff', cursor: 'pointer' };

export default function BookingForm({ serviceId, onHome }: { serviceId: string | null, onHome: (id: string) => void }) {
  const [bookingData, setBookingData] = useState({ customer_name: '', phone: '', agreed: false });
  const [availableTime, setAvailableTime] = useState('');
  const [reservationDone, setReservationDone] = useState(false);

  const findAvailableTime = async () => {
    if (!bookingData.customer_name || !bookingData.phone || !bookingData.agreed) {
      alert('이름, 전화번호, 개인정보 동의를 확인해주세요.');
      return;
    }
    const today = new Date().toISOString().split('T')[0];
    const TIMES = ['10:00:00', '11:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00'];
    const { data } = await supabase.from('appointments').select('appointment_time').eq('appointment_date', today);
    const booked = data?.map((item: any) => item.appointment_time) || [];
    const available = TIMES.find((time) => !booked.includes(time));
    
    if (!available) { alert('오늘 예약이 모두 마감되었습니다.'); return; }
    setAvailableTime(available);
  };

  const createReservation = async () => {
    const { error } = await supabase.from('appointments').insert({
      customer_name: bookingData.customer_name,
      phone: bookingData.phone,
      appointment_date: new Date().toISOString().split('T')[0],
      appointment_time: availableTime,
      status: 'confirmed',
      registration_source: serviceId || 'direct'
    });
    if (!error) setReservationDone(true);
  };

  return (
    <div style={{ padding: '10px' }}>
      <h3 style={{ marginBottom: '15px' }}>예약 신청</h3>
      
      {!reservationDone ? (
        <>
          <label style={{ fontSize: '0.85rem', marginBottom: '10px', display: 'block' }}>
            <input type="checkbox" onChange={(e) => setBookingData({...bookingData, agreed: e.target.checked})} /> 개인정보 수집 및 이용 동의
          </label>
          <input placeholder="이름" onChange={(e) => setBookingData({...bookingData, customer_name: e.target.value})} style={inputStyle} />
          <input placeholder="전화번호" onChange={(e) => setBookingData({...bookingData, phone: e.target.value})} style={inputStyle} />
          
          {!availableTime ? (
            <button onClick={findAvailableTime} style={buttonStyle}>예약 가능 시간 확인</button>
          ) : (
            <button onClick={createReservation} style={{...buttonStyle, background: '#28a745'}}>예약 확정하기 ({availableTime})</button>
          )}
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>예약 완료 😊</h3>
          <p style={{ fontSize: '0.9rem' }}>예약 시간: {availableTime}</p>
        </div>
      )}
      
      <button onClick={() => onHome("main")} style={{ width: '100%', padding: '10px', marginTop: '10px', background: 'none', border: 'none', color: '#999', cursor: 'pointer' }}>
        처음으로 돌아가기
      </button>
    </div>
  );
}