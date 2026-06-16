import {
  CalendarClock,
  Headset,
  Users,
  CreditCard,
  FileSignature,
  Workflow
} from "lucide-react";

const items = [
  {
    title: "예약 자동화",
    icon: CalendarClock,
  },
  {
    title: "상담 자동화",
    icon: Headset,
  },
  {
    title: "고객관리",
    icon: Users,
  },
  {
    title: "견적 · 계약",
    icon: FileSignature,
  },
  {
    title: "결제 자동화",
    icon: CreditCard,
  },
  {
    title: "통합 구축",
    icon: Workflow,
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-zinc-50 py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            핵심 서비스
          </h2>

          <p className="mt-6 text-zinc-500">
            반복 업무를 줄이고 생산성을 높이는 자동화 솔루션
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border bg-white p-8"
              >
                <Icon className="mb-4" />

                <h3 className="font-semibold text-xl">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}