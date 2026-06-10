import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <div className="w-20 h-20 mx-auto rounded-full bg-black text-white flex items-center justify-center text-3xl font-bold">
            F
          </div>

          <h1 className="mt-8 text-4xl md:text-6xl font-bold tracking-tight">
            FlowOS 고객센터
          </h1>

          <p className="mt-6 text-lg text-zinc-600">
            도움이 필요하신가요?
            <br />
            필요한 정보를 빠르게 찾아보세요.
          </p>

        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Quick Menu */}
        <section>
          <div className="grid md:grid-cols-3 gap-6">

            <Link
              href="/support/start"
              className="rounded-3xl bg-zinc-100 p-8 text-center transition hover:bg-zinc-200"
            >
              <h3 className="font-semibold text-lg">
                서비스 시작하기
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                처음 사용하는 고객
              </p>
            </Link>

            <Link
              href="/support/faq"
              className="rounded-3xl bg-zinc-100 p-8 text-center transition hover:bg-zinc-200"
            >
              <h3 className="font-semibold text-lg">
                자주 묻는 질문
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                FAQ 확인하기
              </p>
            </Link>

            <Link
              href="/support/contact"
              className="rounded-3xl bg-zinc-100 p-8 text-center transition hover:bg-zinc-200"
            >
              <h3 className="font-semibold text-lg">
                문의 접수
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                기술 지원 요청
              </p>
            </Link>

          </div>
        </section>

        {/* Search */}
        <section className="py-24">

          <h2 className="text-center text-3xl md:text-4xl font-bold">
            무엇을 도와드릴까요?
          </h2>

          <div className="max-w-3xl mx-auto mt-10">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="
                w-full
                h-14
                rounded-full
                border
                border-zinc-300
                px-6
                text-lg
                outline-none
                focus:ring-2
                focus:ring-black
              "
            />
          </div>

        </section>

        {/* Bento Grid */}
        <section className="pb-24">

          <div className="grid lg:grid-cols-2 gap-6">

            <div className="bg-zinc-100 rounded-[32px] p-10 h-[320px] flex flex-col justify-between">
              <div>
                <span className="text-blue-600 text-sm">
                  Getting Started
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  FlowOS 시작하기
                </h3>

                <p className="mt-4 text-zinc-600">
                  회원가입부터 첫 자동화 구축까지.
                </p>
              </div>

              <Link href="#" className="font-medium">
                자세히 보기 →
              </Link>
            </div>

            <div className="bg-zinc-100 rounded-[32px] p-10 h-[320px] flex flex-col justify-between">
              <div>
                <span className="text-blue-600 text-sm">
                  Automation
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  자동화 가이드
                </h3>

                <p className="mt-4 text-zinc-600">
                  예약, 상담, CRM 설정 방법
                </p>
              </div>

              <Link href="#" className="font-medium">
                자세히 보기 →
              </Link>
            </div>

            <div className="bg-zinc-100 rounded-[32px] p-10 h-[320px] flex flex-col justify-between">
              <div>
                <span className="text-blue-600 text-sm">
                  Integration
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  연동 가이드
                </h3>

                <p className="mt-4 text-zinc-600">
                  카카오톡, 네이버, Google 연동
                </p>
              </div>

              <Link href="#" className="font-medium">
                자세히 보기 →
              </Link>
            </div>

            <div className="bg-zinc-100 rounded-[32px] p-10 h-[320px] flex flex-col justify-between">
              <div>
                <span className="text-blue-600 text-sm">
                  Support
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  기술 지원
                </h3>

                <p className="mt-4 text-zinc-600">
                  문제 해결 및 문의 접수
                </p>
              </div>

              <Link href="#" className="font-medium">
                자세히 보기 →
              </Link>
            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="pb-24">

          <h2 className="text-4xl font-bold text-center">
            자주 묻는 질문
          </h2>

          <div className="max-w-4xl mx-auto mt-12 space-y-4">

            <details className="bg-zinc-100 rounded-2xl p-6">
              <summary className="font-semibold cursor-pointer">
                구축 기간은 얼마나 걸리나요?
              </summary>

              <p className="mt-4 text-zinc-600">
                프로젝트 규모에 따라 1주~4주 정도 소요됩니다.
              </p>
            </details>

            <details className="bg-zinc-100 rounded-2xl p-6">
              <summary className="font-semibold cursor-pointer">
                기존 홈페이지와 연동 가능한가요?
              </summary>

              <p className="mt-4 text-zinc-600">
                대부분의 홈페이지 및 플랫폼과 연동 가능합니다.
              </p>
            </details>

            <details className="bg-zinc-100 rounded-2xl p-6">
              <summary className="font-semibold cursor-pointer">
                유지보수도 제공하나요?
              </summary>

              <p className="mt-4 text-zinc-600">
                운영 및 유지보수 서비스를 함께 제공합니다.
              </p>
            </details>

          </div>

        </section>

        {/* CTA */}
        <section className="pb-32">

          <div className="rounded-[40px] bg-black text-white p-16 text-center">

            <h2 className="text-4xl md:text-5xl font-bold">
              원하는 답변을 찾지 못하셨나요?
            </h2>

            <p className="mt-6 text-zinc-300">
              전문가와 직접 상담해보세요.
            </p>

            <Link
              href="/contact"
              className="inline-flex mt-10 rounded-full bg-white text-black px-8 py-4 font-medium"
            >
              문의하기
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}