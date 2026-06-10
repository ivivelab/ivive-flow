import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "예약 자동화",
      desc: "예약 접수부터 알림까지 자동화",
      href: "#",
    },
    {
      title: "상담 자동화",
      desc: "문의 접수와 상담 프로세스 자동화",
      href: "#",
    },
    {
      title: "고객관리",
      desc: "고객 데이터를 체계적으로 관리",
      href: "#",
    },
    {
      title: "견적 · 계약",
      desc: "견적서와 계약서 업무 자동화",
      href: "#",
    },
    {
      title: "결제 자동화",
      desc: "결제 및 정산 프로세스 자동화",
      href: "#",
    },
    {
      title: "통합 구축",
      desc: "업무 흐름 전체를 하나로 연결",
      href: "#",
    },
  ];

  return (
    <main>

      {/* Hero */}
      <section className="relative flex h-[50vh] items-center justify-center bg-black text-white">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Services
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-zinc-300">
            예약부터 결제까지,
            <br />
            하나의 업무 흐름으로 자동화합니다.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          운영을 단순하게
        </h2>

        <p className="mt-8 text-zinc-600 leading-8">
          반복 업무는 줄이고,
          성장에 집중할 수 있도록
          업무 프로세스를 설계하고 구축합니다.
        </p>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="
                rounded-3xl
                border
                p-8
                transition
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <h3 className="text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 text-zinc-600">
                {service.desc}
              </p>
            </Link>
          ))}

        </div>
      </section>


    {/* Growth Automation */}
{/* Growth Guide */}
<section className="mx-auto max-w-7xl px-6 pb-32">

  <div className="grid lg:grid-cols-2 gap-16">

    {/* Left */}
    <div>

      <h2 className="text-3xl font-bold border-b pb-6">
        성장 자동화 프로그램
      </h2>

      <div className="divide-y">

        <div className="flex items-center gap-6 py-8">
          <div className="w-14 h-14 rounded-xl bg-zinc-100 flex items-center justify-center">
            🚀
          </div>

          <div>
            <h3 className="font-semibold">
              MVP 파트너
            </h3>

            <p className="text-zinc-500 text-sm">
              아이디어를 실제 서비스로 검증
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 py-8">
          <div className="w-14 h-14 rounded-xl bg-zinc-100 flex items-center justify-center">
            📊
          </div>

          <div>
            <h3 className="font-semibold">
              사업계획서 지원
            </h3>

            <p className="text-zinc-500 text-sm">
              정부지원 및 투자자료 제작
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 py-8">
          <div className="w-14 h-14 rounded-xl bg-zinc-100 flex items-center justify-center">
            🤖
          </div>

          <div>
            <h3 className="font-semibold">
              PPT 자동화
            </h3>

            <p className="text-zinc-500 text-sm">
              제안서 및 보고서 자동 생성
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 py-8">
          <div className="w-14 h-14 rounded-xl bg-zinc-100 flex items-center justify-center">
            📈
          </div>

          <div>
            <h3 className="font-semibold">
              마케팅 자동화
            </h3>

            <p className="text-zinc-500 text-sm">
              콘텐츠 생산 및 운영 자동화
            </p>
          </div>
        </div>

      </div>

    </div>

    {/* Right */}
    <div>

      <h2 className="text-3xl font-bold border-b pb-6">
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

</section>
    </main>
  );
}