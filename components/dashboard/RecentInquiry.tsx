import {
  MessageSquare,
  Phone,
} from "lucide-react";

const inquiries = [
  {
    id: 1,
    name: "김철수",
    title: "에어컨 설치 문의",
    time: "10분 전",
  },
  {
    id: 2,
    name: "박영희",
    title: "사무실 청소 견적",
    time: "35분 전",
  },
  {
    id: 3,
    name: "이민수",
    title: "인테리어 상담 요청",
    time: "1시간 전",
  },
  {
    id: 4,
    name: "최유진",
    title: "이사 서비스 문의",
    time: "2시간 전",
  },
];

export default function RecentInquiry() {
  return (
    <div className="bg-white border rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">

        <div
          className="
            w-12 h-12
            rounded-xl
            bg-green-100
            flex items-center justify-center
          "
        >
          <MessageSquare
            size={24}
            className="text-green-600"
          />
        </div>

        <div>

          <h2 className="font-bold text-xl">
            최근 문의
          </h2>

          <p className="text-sm text-slate-500">
            신규 문의 고객
          </p>

        </div>

      </div>

      <div className="space-y-3">

        {inquiries.map((item) => (
          <div
            key={item.id}
            className="
              p-3
              border
              rounded-xl
              hover:bg-slate-50
              transition
            "
          >

            <div className="flex justify-between">

              <div>

                <p className="font-semibold">
                  {item.name}
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  {item.title}
                </p>

              </div>

              <div className="text-right">

                <p className="text-xs text-slate-400">
                  {item.time}
                </p>

                <button
                  className="
                    mt-2
                    flex
                    items-center
                    gap-1
                    text-indigo-600
                    text-sm
                  "
                >
                  <Phone size={14} />
                  연락
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}