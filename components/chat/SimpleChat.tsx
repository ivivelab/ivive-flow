'use client';
import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMenu from "./ChatMenu";
import ServicePanel from "./ServicePanel";
import BookingForm from "./BookingForm";
import EstimateForm from "./EstimateForm";
import ContactPanel from "./ContactPanel"; // 새로 만든 상담 연결용 컴포넌트
import { NAVIGATION } from "@/data/navigation";

export default function SimpleChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState("main");
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleMenuClick = (id: string) => {
    // 1. 처음으로 돌아가기
    if (id === "main") { setCurrentStep("main"); setSelectedService(null); return; }
    
    // 2. 3단계 기능들 (정보/견적/예약/상담)
    if (["info", "estimate", "booking", "contact"].includes(id)) {
      setCurrentStep(id);
      return;
    }

    // 3. 네비게이션 이동 (1단계 -> 2단계)
    if (NAVIGATION[id as keyof typeof NAVIGATION]) {
      setCurrentStep(id);
    } else {
      setSelectedService(id);
      setCurrentStep("service_sub");
    }
  };

  // '이전으로' 버튼 로직: 1단계 메뉴(main)가 아닐 때만 노출
  const backTarget = ["info", "estimate", "booking", "contact"].includes(currentStep) 
    ? "service_sub" 
    : (currentStep === "service_sub" ? "main" : null);

  return (
    <div style={{ position: 'fixed', bottom: 30, right: 30, zIndex: 1000 }}>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src="/images/dashboard/catprofile.webp" style={{ width: 80, height: 80, borderRadius: '50%' }} />
        </button>
      )}

      {isOpen && (
        <div style={{ width: 360, height: 550, background: '#fff', borderRadius: 25, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
          <ChatHeader onClose={() => setIsOpen(false)} />
          
          <div style={{ padding: 20, flex: 1, overflowY: 'auto' }}>
            {/* '이전으로' 버튼 */}
            {backTarget && (
              <button onClick={() => setCurrentStep(backTarget)} style={{ marginBottom: 15, background: 'none', border: 'none', cursor: 'pointer', color: '#666', fontSize: '0.85rem' }}>
                ◀ 이전으로
              </button>
            )}

            {/* 3단계 렌더링 분기 */}
            {currentStep === "info" ? <ServicePanel serviceId={selectedService} onHome={() => handleMenuClick("main")} /> :
             currentStep === "estimate" ? <EstimateForm serviceId={selectedService} onHome={() => handleMenuClick("main")} /> :
             currentStep === "booking" ? <BookingForm serviceId={selectedService} onHome={() => handleMenuClick("main")} /> :
             currentStep === "contact" ? <ContactPanel onHome={() => handleMenuClick("main")} /> :
             <ChatMenu currentStep={currentStep} onSelect={handleMenuClick} />}
          </div>
        </div>
      )}
    </div>
  );
}