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
            Startup
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-zinc-300">
            준비부터 성장까지
            <br />
            성공적인 창업을 지원합니다.
          </p>
        </div>
      </section>

{/* Consulting Service */}
{/* Consulting */}
<section className="mx-auto max-w-7xl px-6 py-24">

  <div className="text-center mb-20">
    <h2 className="text-4xl md:text-6xl font-bold">
      컨설팅 서비스
    </h2>

    <p className="mt-6 text-lg text-zinc-600">
      운영 흐름을 분석하고
      가장 효율적인 자동화 전략을 제안합니다.
    </p>
  </div>

  <div className="overflow-hidden rounded-[40px] bg-zinc-100">

    <div className="grid lg:grid-cols-2">

      {/* Image */}
      <div>
        <img
          src="/images/consulting.jpg"
          alt="컨설팅"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center px-10 py-16 lg:px-20">

        <span className="text-sm font-medium text-blue-600">
          Business Consulting
        </span>

        <h3 className="mt-4 text-4xl font-bold leading-tight">
          운영의 병목을 발견하고
          <br />
          자동화를 설계합니다.
        </h3>

        <p className="mt-8 text-lg leading-8 text-zinc-600">
          상담, 예약, CRM, 문서 업무를 분석하여
          비효율적인 운영 구조를 진단하고
          데이터 기반의 개선 전략을 제안합니다.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-8">

          <div>
            <p className="text-3xl font-bold">
              Process
            </p>
            <p className="text-zinc-500">
              운영 프로세스 분석
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold">
              Data
            </p>
            <p className="text-zinc-500">
              데이터 기반 진단
            </p>
          </div>

        </div>

        <Link
          href="/contact"
          className="mt-10 text-blue-600 font-medium"
        >
          상담 신청하기 →
        </Link>

      </div>

    </div>

  </div>

</section>
    </main>
  );
}