import Link from "next/link";
import {
  CalendarClock,
  Headset,
  Users,
  FileSignature,
  CreditCard,
  Workflow,
  HeartPulse,
  Scale,
  Calculator,
  Building2,
  GraduationCap,
  ShoppingCart,
  Sparkles,
  Briefcase,
  MessageCircle,
  Search,
  PencilRuler,
  Code2,
  Settings,
  Rocket,
  Presentation,
  Bot,
  TrendingUp,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "예약 자동화",
      desc: "예약 접수부터 알림까지 자동화",
      href: "#",
      icon: CalendarClock,
    },
    {
      title: "상담 자동화",
      desc: "문의 접수와 상담 프로세스 자동화",
      href: "#",
      icon: Headset,
    },
    {
      title: "고객관리",
      desc: "고객 데이터를 체계적으로 관리",
      href: "#",
      icon: Users,
    },
    {
      title: "견적 · 계약",
      desc: "견적서와 계약서 업무 자동화",
      href: "#",
      icon: FileSignature,
    },
    {
      title: "결제 자동화",
      desc: "결제 및 정산 프로세스 자동화",
      href: "#",
      icon: CreditCard,
    },
    {
      title: "통합 구축",
      desc: "업무 흐름 전체를 하나로 연결",
      href: "#",
      icon: Workflow,
    },
  ];

const industries = [
  {
    title: "의료 · 헬스케어",
    icon: HeartPulse,
  },
  {
    title: "법률 · 특허",
    icon: Scale,
  },
  {
    title: "세무 · 회계",
    icon: Calculator,
  },
  {
    title: "공공 · 행정",
    icon: Building2,
  },
  {
    title: "교육 · 학원",
    icon: GraduationCap,
  },
  {
    title: "고객 서비스",
    icon: Headset,
  },
  {
    title: "이커머스 · 유통",
    icon: ShoppingCart,
  },
  {
    title: "뷰티 · 웰니스",
    icon: Sparkles,
  },
];

  const process = [
    {
      step: "STEP 01",
      title: "상담",
      icon: MessageCircle,
    },
    {
      step: "STEP 02",
      title: "진단",
      icon: Search,
    },
    {
      step: "STEP 03",
      title: "설계",
      icon: PencilRuler,
    },
    {
      step: "STEP 04",
      title: "구축",
      icon: Code2,
    },
    {
      step: "STEP 05",
      title: "운영",
      icon: Settings,
    },
  ];

  const growthPrograms = [
    {
      title: "MVP 파트너",
      desc: "아이디어를 실제 서비스로 검증",
      icon: Rocket,
    },
    {
      title: "사업계획서 지원",
      desc: "정부지원 및 투자자료 제작",
      icon: Presentation,
    },
    {
      title: "PPT 자동화",
      desc: "제안서 및 보고서 자동 생성",
      icon: Bot,
    },
    {
      title: "마케팅 자동화",
      desc: "콘텐츠 생산 및 운영 자동화",
      icon: TrendingUp,
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute left-1/2 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center px-6 text-center">
          <div>
            <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-300">
              Business Automation
            </span>

            <h1 className="mt-8 text-5xl font-bold md:text-7xl">
              운영을 단순하게
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 md:text-xl">
              예약부터 상담, 고객관리, 결제까지
              <br />
              하나의 업무 흐름으로 연결합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            핵심 서비스
          </h2>

          <p className="mt-6 text-zinc-600">
            반복 업무를 줄이고 생산성을 높이는 자동화 솔루션
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-zinc-600">
                  {service.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-zinc-50 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              적용 가능 분야
            </h2>

            <p className="mt-6 text-zinc-600">
              다양한 산업의 반복 업무를 자동화합니다.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="rounded-3xl border bg-white p-8 transition hover:shadow-lg"
                >
                  <Icon
                    size={34}
                    className="mb-5 text-blue-600"
                  />

                  <h3 className="font-semibold text-lg">
                    {industry.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              구축 프로세스
            </h2>

            <p className="mt-6 text-zinc-600">
              상담부터 운영까지 단계별로 함께 진행합니다.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-5">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border bg-white p-8 text-center"
                >
                  <Icon
                    size={36}
                    className="mx-auto mb-4 text-blue-600"
                  />

                  <div className="text-sm font-semibold text-blue-600">
                    {item.step}
                  </div>

                  <h3 className="mt-3 font-bold">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Growth Program */}
      <section className="bg-zinc-50 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="border-b pb-6 text-3xl font-bold">
                성장 자동화 프로그램
              </h2>

              <div className="divide-y">
                {growthPrograms.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-6 py-8"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white border">
                        <Icon size={24} />
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-sm text-zinc-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="border-b pb-6 text-3xl font-bold">
                지원 안내
              </h2>

              <div className="space-y-8 pt-8">
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="text-zinc-500">
                    MVP 제작
                  </span>

                  <span>
                    2~4주 내 프로토타입 구축
                  </span>
                </div>

                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="text-zinc-500">
                    사업계획서
                  </span>

                  <span>
                    정부지원사업 및 투자용
                  </span>
                </div>

                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="text-zinc-500">
                    자동화 구축
                  </span>

                  <span>
                    예약 · 상담 · CRM 자동화
                  </span>
                </div>

                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="text-zinc-500">
                    상담 방식
                  </span>

                  <span>
                    온라인 미팅 및 방문 상담
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-32 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold md:text-6xl">
            업무 자동화를 시작해보세요
          </h2>

          <p className="mt-8 text-zinc-400">
            반복 업무는 줄이고,
            성장에 집중할 수 있도록 함께 설계합니다.
          </p>

          <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
            무료 상담 신청
          </button>
        </div>
      </section>
    </main>
  );
}