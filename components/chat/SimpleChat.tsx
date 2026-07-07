'use client';

import { useState } from "react";

import ChatHeader from "./ChatHeader";
import ChatMenu from "./ChatMenu";
import ServicePanel from "./ServicePanel";
import BookingForm from "./BookingForm";
import EstimateForm from "./EstimateForm";
import ContactPanel from "./ContactPanel";

import { NAVIGATION } from "@/data/navigation";
import { SERVICES } from "@/data/services";

export default function SimpleChat() {

  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState("main");
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleMenuClick = (id: string) => {

    // 처음으로
    if (id === "main") {
      setCurrentStep("main");
      setSelectedService(null);
      return;
    }

    // 3단계
    if (["info", "estimate", "booking", "contact"].includes(id)) {
      setCurrentStep(id);
      return;
    }

    // 메뉴 이동
    if (NAVIGATION[id as keyof typeof NAVIGATION]) {
      setCurrentStep(id);
      return;
    }

    // 서비스 선택
    setSelectedService(id);
    setCurrentStep("service_sub");

  };

  const backTarget =
    ["info", "estimate", "booking", "contact"].includes(currentStep)
      ? "service_sub"
      : currentStep === "service_sub"
      ? "main"
      : null;

  const service =
    selectedService
      ? SERVICES[selectedService as keyof typeof SERVICES]
      : null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 30,
        right: 30,
        zIndex: 1000,
      }}
    >
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src="/images/dashboard/catprofile.webp"
            alt=""
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
            }}
          />
        </button>
      )}

      {isOpen && (
        <div
          style={{
            width: 360,
            height: 550,
            background: "#fff",
            borderRadius: 25,
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ChatHeader onClose={() => setIsOpen(false)} />

          <div
            style={{
              padding: 20,
              flex: 1,
              overflowY: "auto",
            }}
          >
            {backTarget && (
              <button
                onClick={() => setCurrentStep(backTarget)}
                style={{
                  marginBottom: 15,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#666",
                  fontSize: "0.85rem",
                }}
              >
                ◀ 이전으로
              </button>
            )}

            {currentStep === "info" && service ? (
              <ServicePanel
                service={service}
                onEstimate={() => setCurrentStep("estimate")}
                onContact={() => setCurrentStep("contact")}
                onHome={() => handleMenuClick("main")}
              />
            ) : currentStep === "estimate" ? (
              <EstimateForm
                serviceId={selectedService}
                onHome={() => handleMenuClick("main")}
              />
            ) : currentStep === "booking" ? (
              <BookingForm
                serviceId={selectedService}
                onHome={() => handleMenuClick("main")}
              />
            ) : currentStep === "contact" ? (
              <ContactPanel
                onHome={() => handleMenuClick("main")}
              />
            ) : (
              <ChatMenu
                currentStep={currentStep}
                onSelect={handleMenuClick}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}