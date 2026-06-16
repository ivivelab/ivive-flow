import Link from "next/link";

export default function StartupPage() {
  const products = [
    {
      title: "사업계획서 자동화",
      desc: "정부지원사업, 투자유치, 창업 지원사업 작성을 빠르게.",
      price: "39,000원",
      badge: "BEST",
    },
    {
      title: "크리에이터 자동화",
      desc: "쇼츠 기획, 스크립트 작성, 콘텐츠 운영 템플릿.",
      price: "59,000원",
      badge: "HOT",
    },
    {
      title: "상담 자동화 키트",
      desc: "문의 접수부터 예약 연결까지 자동화.",
      price: "79,000원",
      badge: "NEW",
    },
    {
      title: "CRM 스타터 킷",
      desc: "고객관리와 후속 관리 시스템 구축.",
      price: "49,000원",
      badge: "",
    },
    {
      title: "랜딩페이지 템플릿",
      desc: "서비스 소개부터 문의 전환까지 검증된 구조.",
      price: "99,000원",
      badge: "POPULAR",
    },
    {
      title: "기업 홈페이지 템플릿",
      desc: "회사소개, 서비스, 문의까지 바로 사용 가능.",
      price: "149,000원",
      badge: "",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute left-1/2 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="relative mx-auto flex min-h-[50vh] max-w-6xl items-center justify-center px-6 text-center">
          <div>
            <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-300">
              Startup Kit
            </span>

            <h1 className="mt-8 text-5xl font-bold md:text-7xl">
              혼자 시작해도 됩니다
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 md:text-xl">
              창업 초기 반복 업무를 줄이는
              <br />
              실전 자동화 템플릿과 시스템
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-6xl">
            창업 초기에 부족한 건
            <br />
            대부분 시간입니다
          </h2>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            "고객 문의 대응",
            "사업계획서 작성",
            "예약 관리",
            "견적서 작성",
            "SNS 운영",
            "고객관리",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border p-8 text-center text-lg font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="bg-zinc-50 py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold md:text-6xl">
            직접 만들 필요 없습니다
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-600">
            이미 검증된 템플릿과 자동화 시스템을 바로 사용하세요.
          </p>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-6 py-32"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-6xl">
            창업 키트
          </h2>

          <p className="mt-6 text-zinc-600">
            바로 사용할 수 있는 실전 템플릿
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="group rounded-[32px] border bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              {product.badge && (
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  {product.badge}
                </span>
              )}

              <h3 className="mt-5 text-2xl font-bold">
                {product.title}
              </h3>

              <p className="mt-4 text-zinc-600">
                {product.desc}
              </p>

              <div className="mt-8 text-3xl font-bold">
                {product.price}
              </div>

              <button className="mt-8 w-full rounded-2xl bg-black py-4 font-medium text-white transition hover:opacity-90">
                자세히 보기
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Compare */}
      <section className="bg-zinc-50 py-32">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold md:text-6xl">
              구축보다 빠르게
            </h2>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            <div className="rounded-[40px] border bg-white p-10">
              <h3 className="text-3xl font-bold">
                맞춤 구축
              </h3>

              <ul className="mt-8 space-y-4 text-zinc-600">
                <li>기간 2~8주</li>
                <li>비용 수백만원 이상</li>
                <li>맞춤 설계 가능</li>
                <li>기업 운영 최적화</li>
              </ul>
            </div>

            <div className="rounded-[40px] border border-blue-600 bg-blue-600 p-10 text-white">
              <h3 className="text-3xl font-bold">
                템플릿
              </h3>

              <ul className="mt-8 space-y-4">
                <li>즉시 사용</li>
                <li>수만원대 비용</li>
                <li>검증된 구조 제공</li>
                <li>창업 초기 최적</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-32">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            자주 묻는 질문
          </h2>
        </div>

        <div className="mt-16 space-y-6">

          <div className="rounded-3xl border p-8">
            <h3 className="font-semibold">
              템플릿만으로도 사용할 수 있나요?
            </h3>

            <p className="mt-3 text-zinc-600">
              네. 초보자도 바로 사용할 수 있도록 구성되어 있습니다.
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <h3 className="font-semibold">
              커스터마이징도 가능한가요?
            </h3>

            <p className="mt-3 text-zinc-600">
              가능합니다. 필요 시 구축 서비스와 연계할 수 있습니다.
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <h3 className="font-semibold">
              웹사이트 템플릿도 제공하나요?
            </h3>

            <p className="mt-3 text-zinc-600">
              랜딩페이지, 기업 홈페이지, 포트폴리오 템플릿을 제공합니다.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-black py-32 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold md:text-6xl">
            시간을 사는 것이
            <br />
            가장 좋은 투자입니다
          </h2>

          <p className="mt-8 text-lg text-zinc-400">
            검증된 시스템으로 더 빠르게 시작하세요.
          </p>

          <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-semibold text-black">
            템플릿 둘러보기
          </button>

        </div>

      </section>
    </main>
  );
}