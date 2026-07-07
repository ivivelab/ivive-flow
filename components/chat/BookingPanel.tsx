'use client';

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface BookingData {
  customer_name: string;
  phone: string;
  agreed: boolean;
}

interface BookingPanelProps {
  onHome: () => void;
}

export default function BookingPanel({
  onHome,
}: BookingPanelProps) {

  const [bookingData, setBookingData] = useState<BookingData>({
    customer_name: "",
    phone: "",
    agreed: false,
  });

  const [availableTime, setAvailableTime] = useState("");
  const [reservationDone, setReservationDone] = useState(false);

  const findAvailableTime = async () => {

    if (
      !bookingData.customer_name ||
      !bookingData.phone ||
      !bookingData.agreed
    ) {
      alert("개인정보 동의, 이름, 전화번호를 입력해주세요.");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    const TIMES = [
      "10:00:00",
      "11:00:00",
      "14:00:00",
      "15:00:00",
      "16:00:00",
      "17:00:00",
    ];

    const { data } = await supabase
      .from("appointments")
      .select("appointment_time")
      .eq("appointment_date", today);

    const booked =
      data?.map((item: any) => item.appointment_time) || [];

    const available = TIMES.find(
      (time) => !booked.includes(time)
    );

    if (!available) {
      alert("오늘 예약이 모두 마감되었습니다.");
      return;
    }

    setAvailableTime(available);
  };

  const createReservation = async () => {

    const today = new Date().toISOString().split("T")[0];

    const { error } = await supabase
      .from("appointments")
      .insert({
        customer_name: bookingData.customer_name,
        phone: bookingData.phone,
        appointment_date: today,
        appointment_time: availableTime,
        status: "confirmed",
        registration_source:
          localStorage.getItem("source") || "direct",
        agreed_privacy: true,
      });

    if (error) {
      console.error(error);
      alert("예약 저장 실패");
      return;
    }

    setReservationDone(true);
  };

  if (reservationDone) {

    return (
      <>
        <h3
          style={{
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          🎉 예약 완료
        </h3>

        <p
          style={{
            textAlign: "center",
          }}
        >
          예약시간 : {availableTime}
        </p>

        <button
          style={buttonStyle}
          onClick={onHome}
        >
          처음으로
        </button>
      </>
    );

  }

  return (
    <>

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
          checked={bookingData.agreed}
          onChange={(e)=>
            setBookingData({
              ...bookingData,
              agreed:e.target.checked,
            })
          }
          style={{marginRight:8}}
        />

        개인정보 수집 및 이용 동의

      </label>

      <input
        placeholder="이름"
        value={bookingData.customer_name}
        onChange={(e)=>
          setBookingData({
            ...bookingData,
            customer_name:e.target.value,
          })
        }
        style={inputStyle}
      />

      <input
        placeholder="전화번호"
        value={bookingData.phone}
        onChange={(e)=>
          setBookingData({
            ...bookingData,
            phone:e.target.value,
          })
        }
        style={{
          ...inputStyle,
          marginTop:10,
        }}
      />

      {!availableTime ? (

        <button
          style={buttonStyle}
          onClick={findAvailableTime}
        >
          예약 가능 시간 확인
        </button>

      ) : (

        <>
          <div
            style={{
              marginTop:20,
              marginBottom:15,
              padding:15,
              background:"#eef6ff",
              borderRadius:12,
              textAlign:"center",
            }}
          >
            가장 빠른 예약시간

            <br/>

            <strong>{availableTime}</strong>

          </div>

          <button
            style={buttonStyle}
            onClick={createReservation}
          >
            예약 확정
          </button>

        </>

      )}

    </>
  );

}

const inputStyle = {
  width:"100%",
  padding:"12px",
  borderRadius:12,
  border:"1px solid #ddd",
  boxSizing:"border-box" as const,
};

const buttonStyle = {
  width:"100%",
  marginTop:15,
  padding:"14px",
  border:"none",
  borderRadius:15,
  background:"#333",
  color:"#fff",
  cursor:"pointer",
};