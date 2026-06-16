import {
  MessageCircle,
  Phone,
  FileText,
  Handshake,
  Play,
  Check,
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
    title: "상담",
    count: 12,
    color: "bg-green-500",
    icon: Phone,
    growth: "+8%",
  },
  {
    title: "견적",
    count: 8,
    color: "bg-orange-500",
    icon: FileText,
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
    title: "실행",
    count: 3,
    color: "bg-blue-500",
    icon: Play,
    growth: "+0%",
  },
  {
    title: "완료",
    count: 2,
    color: "bg-indigo-500",
    icon: Check,
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
    <div className="bg-white border rounded-2xl p-6">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-2xl font-bold">
          비즈니스 흐름
        </h2>

        <select
          className="
            border
            rounded-lg
            px-3
            py-2
            text-sm
          "
        >
          <option>이번 달</option>
          <option>지난 달</option>
        </select>

      </div>

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

      <div className="mt-10">

        <div className="flex justify-between mb-2">

          <span className="text-sm text-slate-500">
            전환율
          </span>

          <span className="font-semibold">
            {conversionRate}%
          </span>

        </div>

        <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">

          <div
            className="
              h-full
              bg-indigo-600
              rounded-full
            "
            style={{
              width: `${conversionRate}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}