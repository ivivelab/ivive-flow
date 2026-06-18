"use client";

import {
  MessageCircle,
  FileText,
  CalendarDays,
  Handshake,
  CreditCard,
} from "lucide-react";

const activities = [
  {
    type: "문의 접수",
    description: "이영희님이 문의를 남겼습니다.",
    time: "5분 전",
    icon: MessageCircle,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    type: "견적서 발송",
    description: "박지훈님에게 견적서를 발송했습니다.",
    time: "1시간 전",
    icon: FileText,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    type: "예약 확정",
    description: "최민수님이 예약을 확정했습니다.",
    time: "3시간 전",
    icon: CalendarDays,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    type: "결제 완료",
    description: "한빛건설의 결제가 완료되었습니다.",
    time: "1일 전",
    icon: CreditCard,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-6 h-full shadow-sm">
      {/* 헤더 부분 통일: 오늘 할 일 위젯과 동일한 구조 */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-lg font-black text-zinc-900">최근 활동</h2>
          <p className="text-xs font-bold text-zinc-400 mt-1">
            실시간으로 업데이트되는 활동 내역
          </p>
        </div>
        <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700">
          전체 보기 →
        </button>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex gap-4">
              {/* Icon + Line */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-10 h-10 rounded-xl flex items-center justify-center shrink-0 
                    ${activity.iconBg}
                  `}
                >
                  <Icon size={18} className={activity.iconColor} />
                </div>
                {index !== activities.length - 1 && (
                  <div className="w-[2px] flex-1 bg-zinc-100 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-zinc-900">
                    {activity.type}
                  </h3>
                  <span className="text-[10px] font-bold text-zinc-400">
                    {activity.time}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mt-1 font-medium leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}