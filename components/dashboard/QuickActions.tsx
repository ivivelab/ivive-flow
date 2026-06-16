import {
  Plus,
  FileText,
  Calendar,
  Handshake,
} from "lucide-react";

const actions = [
  {
    title: "문의 등록",
    icon: Plus,
  },
  {
    title: "견적 작성",
    icon: FileText,
  },
  {
    title: "예약 생성",
    icon: Calendar,
  },
  {
    title: "계약 등록",
    icon: Handshake,
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white border rounded-2xl p-6">

      <h2 className="text-xl font-bold mb-6">
        빠른 실행
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="
                p-5
                border
                rounded-xl
                hover:bg-slate-50
                hover:border-indigo-300
                transition
                text-left
              "
            >
              <Icon
                size={24}
                className="mb-3 text-indigo-600"
              />

              <p className="font-medium">
                {action.title}
              </p>
            </button>
          );
        })}

      </div>

    </div>
  );
}