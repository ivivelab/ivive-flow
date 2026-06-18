"use client";

import { 
  MessageCircle, FileText, CalendarDays, Handshake, 
  CreditCard, Play, CheckCircle2, Settings 
} from "lucide-react";

const flowData = [
  { title: "문의", count: 25, colorKey: "purple", icon: MessageCircle, growth: "+12%" },
  { title: "견적", count: 12, colorKey: "green", icon: FileText, growth: "+8%" },
  { title: "예약", count: 8, colorKey: "orange", icon: CalendarDays, growth: "+5%" },
  { title: "계약", count: 4, colorKey: "amber", icon: Handshake, growth: "+2%" },
  { title: "결제", count: 3, colorKey: "emerald", icon: CreditCard, growth: "+1%" },
  { title: "진행", count: 2, colorKey: "blue", icon: Play, growth: "+0%" },
  { title: "완료", count: 1, colorKey: "indigo", icon: CheckCircle2, growth: "+0%" },
];

const colorMap: Record<string, { bg: string, text: string }> = {
  purple: { bg: "bg-purple-100/60", text: "text-purple-600" },
  green: { bg: "bg-green-100/60", text: "text-green-600" },
  orange: { bg: "bg-orange-100/60", text: "text-orange-600" },
  amber: { bg: "bg-amber-100/60", text: "text-amber-600" },
  emerald: { bg: "bg-emerald-100/60", text: "text-emerald-600" },
  blue: { bg: "bg-blue-100/60", text: "text-blue-600" },
  indigo: { bg: "bg-indigo-100/60", text: "text-indigo-600" },
};

export default function PipelineFlow() {
  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-8 h-full">
      <div className="flex items-start">
        {flowData.map((item, index) => {
          const Icon = item.icon;
          const style = colorMap[item.colorKey];
          const isLast = index === flowData.length - 1;

          return (
            <div key={item.title} className={`flex items-start ${isLast ? "flex-none" : "flex-1"}`}>
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${style.bg}`}>
                  <Icon size={24} className={style.text} strokeWidth={2.5} />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wide">{item.title}</p>
                  <p className="text-2xl font-black text-zinc-900 mt-1">{item.count}</p>
                  <p className="text-xs font-bold text-emerald-600 mt-1">{item.growth}</p>
                </div>
              </div>

              {!isLast && (
                <div className="flex-1 h-px bg-zinc-100 mt-7 mx-4" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}