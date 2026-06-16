import {
  CalendarDays,
  Clock,
} from "lucide-react";

const schedules = [
  {
    time: "10:00",
    title: "김철수 고객 상담",
    status: "예정",
  },
  {
    time: "13:30",
    title: "견적 검토 회의",
    status: "진행",
  },
  {
    time: "15:00",
    title: "현장 방문",
    status: "예정",
  },
  {
    time: "17:00",
    title: "계약서 발송",
    status: "대기",
  },
];

export default function ScheduleWidget() {
  return (
    <div className="bg-white border rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">

        <div className="
          w-12 h-12
          rounded-xl
          bg-blue-100
          flex items-center justify-center
        ">
          <CalendarDays
            size={24}
            className="text-blue-600"
          />
        </div>

        <div>
          <h2 className="font-bold text-xl">
            오늘 일정
          </h2>

          <p className="text-sm text-slate-500">
            예정된 업무 4건
          </p>
        </div>

      </div>

      <div className="space-y-3">

        {schedules.map((item) => (
          <div
            key={item.time}
            className="
              border
              rounded-xl
              p-3
              hover:bg-slate-50
            "
          >

            <div className="flex justify-between">

              <div>

                <div className="flex items-center gap-2">

                  <Clock
                    size={14}
                    className="text-slate-400"
                  />

                  <span className="text-sm text-slate-500">
                    {item.time}
                  </span>

                </div>

                <p className="font-medium mt-1">
                  {item.title}
                </p>

              </div>

              <span
                className="
                  h-fit
                  px-2
                  py-1
                  rounded-lg
                  text-xs
                  bg-blue-100
                  text-blue-600
                "
              >
                {item.status}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}