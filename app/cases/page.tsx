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
            Cases
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-zinc-300">
            실제 구축 사례로 증명하는,
            <br />
            업무 자동화 성과를 확인하세요.
          </p>
        </div>
      </section>

{/* Case Studies */}
<section className="mx-auto max-w-7xl px-6 py-32">
  <div className="text-center mb-20">
    <h2 className="text-4xl md:text-6xl font-bold">
      구축 사례
    </h2>

    <p className="mt-6 text-zinc-600 text-lg">
      실제 운영 현장에서 검증된 자동화 사례
    </p>
  </div>

  <div className="space-y-12">

    {/* CASE 1 */}
    <div className="overflow-hidden rounded-[40px] bg-zinc-100">
      <div className="grid lg:grid-cols-2">

        {/* Image */}
        <div>
          <img
            src="/cases/hospital.jpg"
            alt="병원 자동화"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-10 py-16 lg:px-20">

          <span className="text-sm font-medium text-blue-600">
            의료기관
          </span>

          <h3 className="mt-4 text-4xl font-bold leading-tight">
            상담부터 예약까지.
            <br />
            병원 업무를 자동화하다.
          </h3>

          <p className="mt-8 text-lg leading-8 text-zinc-600">
            카카오톡, 홈페이지, 네이버 예약으로
            분산되던 문의를 하나로 통합하고
            AI 상담 및 예약 프로세스를 구축했습니다.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">

            <div>
              <p className="text-4xl font-bold">
                80%
              </p>
              <p className="text-zinc-500">
                상담 업무 감소
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold">
                35%
              </p>
              <p className="text-zinc-500">
                예약 전환율 향상
              </p>
            </div>

          </div>

          <a
            href="#"
            className="mt-10 text-blue-600 font-medium"
          >
            사례 자세히 보기 →
          </a>

        </div>
      </div>
    </div>

    {/* CASE 2 */}
    <div className="overflow-hidden rounded-[40px] bg-zinc-100">
      <div className="grid lg:grid-cols-2">

        <div>
          <img
            src="/cases/tax.jpg"
            alt="세무사 자동화"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-10 py-16 lg:px-20">

          <span className="text-sm font-medium text-blue-600">
            세무사 사무소
          </span>

          <h3 className="mt-4 text-4xl font-bold leading-tight">
            서류 수집과 상담을
            <br />
            하나의 워크플로우로.
          </h3>

          <p className="mt-8 text-lg leading-8 text-zinc-600">
            고객 상담, 서류 요청,
            계약서 발송까지 자동화하여
            반복 업무를 최소화했습니다.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">

            <div>
              <p className="text-4xl font-bold">
                70%
              </p>
              <p className="text-zinc-500">
                업무 시간 감소
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold">
                24H
              </p>
              <p className="text-zinc-500">
                무인 상담 운영
              </p>
            </div>

          </div>

          <a
            href="#"
            className="mt-10 text-blue-600 font-medium"
          >
            사례 자세히 보기 →
          </a>

        </div>
      </div>
    </div>

  </div>
</section>
    </main>
  );
}