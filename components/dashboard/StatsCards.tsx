import {
  MessageCircle,
  Phone,
  FileText,
  Calendar,
  ClipboardCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    title: "오늘 해야 할 일",
    value: "6건",
    icon: MessageCircle,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "문의 / 신규",
    value: "25건",
    icon: Phone,
    color: "bg-green-100 text-green-600",
    badge: "+12%",
  },
  {
    title: "견적 진행 중",
    value: "8건",
    icon: FileText,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "예약 확정",
    value: "3건",
    icon: Calendar,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "계약 진행 중",
    value: "4건",
    icon: ClipboardCheck,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "이번 달 결재",
    value: "14,500,000원",
    icon: Briefcase,
    color: "bg-purple-100 text-purple-600",
    badge: "+12%",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-5">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              bg-white
              rounded-2xl
              border
              border-zinc-200
              p-5
              hover:shadow-md
              transition
            "
          >

            <div className="flex items-center justify-between">

              <div
                className={`
                  w-14
                  h-14
                  rounded-full
                  flex
                  items-center
                  justify-center
                  ${card.color}
                `}
              >
                <Icon size={26} />
              </div>

              {card.badge && (
                <span
                  className="
                    text-green-600
                    bg-green-50
                    px-2
                    py-1
                    rounded-md
                    text-xs
                    font-semibold
                  "
                >
                  {card.badge}
                </span>
              )}

            </div>

            <p className="mt-4 text-slate-500 text-sm">
              {card.title}
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              {card.value}
            </h2>

            <button
              className="
                mt-4
                flex
                items-center
                gap-1
                text-indigo-600
                text-sm
                font-medium
              "
            >
            </button>

          </div>
        );
      })}
    </div>
  );
}