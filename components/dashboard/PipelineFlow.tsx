import {
  MessageCircle,
  FileText,
  CalendarDays,
  Handshake,
  CreditCard,
  Play,
  CheckCircle2,
} from "lucide-react";

const flowData = [
  {
    title: "문의",
    count: 25,
    color: "bg-purple-500",
    icon: MessageCircle,
    growth: "+12%",
  },
  {
    title: "견적",
    count: 12,
    color: "bg-green-500",
    icon: FileText,
    growth: "+8%",
  },
  {
    title: "예약",
    count: 8,
    color: "bg-orange-500",
    icon: CalendarDays,
    growth: "+5%",
  },
  {
    title: "계약",
    count: 4,
    color: "bg-amber-500",
    icon: Handshake,
    growth: "+2%",
  },
  {
    title: "결제",
    count: 3,
    color: "bg-emerald-500",
    icon: CreditCard,
    growth: "+1%",
  },
  {
    title: "진행",
    count: 2,
    color: "bg-blue-500",
    icon: Play,
    growth: "+0%",
  },
  {
    title: "완료",
    count: 1,
    color: "bg-indigo-500",
    icon: CheckCircle2,
    growth: "+0%",
  },
];

export default function PipelineFlow() {
  const inquiry = flowData[0].count;
  const completed = flowData[flowData.length - 1].count;

  const conversionRate = Math.round(
    (completed / inquiry) * 100
  );

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-6">

      <div className="flex items-center justify-between">

        {flowData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                flex
                items-center
                flex-1
              "
            >

              <div className="flex flex-col items-center">

                <div
                  className={`
                    w-14
                    h-14
                    rounded-full
                    text-white
                    flex
                    items-center
                    justify-center
                    ${item.color}
                  `}
                >
                  <Icon size={24} />
                </div>

                <div className="mt-3 text-center">

                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <p className="text-3xl font-bold">
                    {item.count}
                  </p>

                  <p className="text-green-500 text-sm">
                    {item.growth}
                  </p>

                </div>

              </div>

              {index !== flowData.length - 1 && (
                <div className="flex-1 h-1 bg-slate-200 mx-3 rounded-full" />
              )}

            </div>
          );
        })}
      </div>
      
    </div>
  );
}