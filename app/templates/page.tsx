"use client";

import Link from "next/link";
import Image from "next/image";

const industryCategories = [
  {
    title: "뷰티/헬스",
    image: "/images/category/beauty.webp",
    description: "피부과, 성형외과, 헬스케어",
  },
  {
    title: "기업/비즈니스",
    image: "/images/category/business.webp",
    description: "법무, 세무, 일반 기업",
  },
  {
    title: "교육/컨설팅",
    image: "/images/category/education.webp",
    description: "학원, 코칭, 컨설팅",
  },
  {
    title: "IT/서비스",
    image: "/images/category/it.webp",
    description: "SaaS, 플랫폼, IT 서비스",
  },
];

const automationTemplates = [
  {
    title: "피부과 운영 자동화",
    category: "뷰티 · 헬스",
    image: "/images/index/skin.webp",
    href: "/workflow/skin",
    description: "상담 · 예약 · CRM 자동화",
  },
  {
    title: "성형외과 운영 자동화",
    category: "뷰티 · 헬스",
    image: "/images/index/cosmetic.webp",
    href: "/workflow/cosmetic",
    description: "상담 · 예약 · 사후관리 자동화",
  },
  {
    title: "영어학원 운영 자동화",
    category: "교육 · 컨설팅",
    image: "/images/index/academy.webp",
    href: "/workflow/academy",
    description: "상담 · 등록 · 학생관리 자동화",
  },
  {
    title: "법률사무소 운영 자동화",
    category: "법률",
    image: "/images/index/law.webp",
    href: "/workflow/law",
    description: "상담접수 · 사건관리 자동화",
  },
];

const startupPackages = [
  {
    badge: "BEST",
    title: "사업계획서 자동화",
    price: "39,000원",
    description:
      "정부지원사업, 투자유치, 창업지원사업 작성 자동화",
  },
  {
    badge: "HOT",
    title: "크리에이터 자동화",
    price: "59,000원",
    description:
      "쇼츠 기획, 스크립트 작성, 콘텐츠 운영",
  },
  {
    badge: "NEW",
    title: "상담 자동화 키트",
    price: "79,000원",
    description:
      "문의 접수부터 예약 연결까지 자동화",
  },
  {
    badge: "",
    title: "CRM 스타터 킷",
    price: "49,000원",
    description:
      "고객관리와 후속관리 시스템 구축",
  },
  {
    badge: "POPULAR",
    title: "랜딩페이지 템플릿",
    price: "99,000원",
    description:
      "전환 중심 구조의 검증된 랜딩페이지",
  },
  {
    badge: "",
    title: "기업 홈페이지 템플릿",
    price: "149,000원",
    description:
      "회사소개, 서비스, 문의 페이지 포함",
  },
];

export default function TemplatesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute left-1/2 top-20 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="relative mx-auto flex min-h-[50vh] max-w-6xl items-center justify-center px-6 text-center">
          <div>
            <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-300">
              INDUSTRY TEMPLATE
            </span>

            <h1 className="mt-8 text-5xl font-bold md:text-7xl">
              업종별 템플릿
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 md:text-xl">
             검증된 AI Workflow와 창업 패키지를
            <br />
             업종에 맞게 바로 적용하세요.
            </p>
          </div>
        </div>
      </section>

      {/* 업종 카테고리 */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold">
              업무에 맞는 최적의 솔루션
            </h2>

            <p className="mt-4 text-zinc-500">
              다양한 업종별 템플릿을 확인해보세요.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {industryCategories.map((item) => (
              <Link
                key={item.title}
                href="#automation"
                className="group"
              >
                <div
                  className="
                    border
                    border-zinc-200
                    bg-white
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:shadow-xl
                  "
                >

                  <div className="relative aspect-[4/3]">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />

                  </div>

                  <div className="p-6">

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-zinc-500">
                      {item.description}
                    </p>

                    <div className="mt-5 text-blue-600 font-medium">
                      자세히 보기 →
                    </div>

                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* 운영 자동화 */}
      <section
        id="automation"
        className="pb-32 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">

            <h2 className="text-3xl font-bold">
              운영 자동화
            </h2>

            <p className="mt-3 text-zinc-500">
              업종별 반복 업무를 자동화하여
              운영 효율을 높입니다.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {automationTemplates.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group"
              >
                <div
                  className="
                    border
                    border-zinc-200
                    overflow-hidden
                    bg-white
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                >

                  <div className="relative aspect-[4/5]">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />

                  </div>

                  <div className="p-6">

                    <span className="text-xs font-medium text-blue-600">
                      {item.category}
                    </span>

                    <h3 className="mt-3 text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-500">
                      {item.description}
                    </p>

                    <div className="mt-6 text-sm font-medium text-blue-600">
                      자세히 보기 →
                    </div>

                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* 창업 패키지 */}
      <section className="pb-32 px-6 bg-zinc-50">

        <div className="max-w-7xl mx-auto">

          <div className="py-20">

            <h2 className="text-3xl font-bold">
              창업 패키지
            </h2>

            <p className="mt-3 text-zinc-500">
              홈페이지, CRM, 상담 자동화까지
              빠르게 시작하세요.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {startupPackages.map((item) => (
              <div
                key={item.title}
                className="
                  border
                  border-zinc-200
                  bg-white
                  p-8
                "
              >

                {item.badge && (
                  <div
                    className="
                      inline-flex
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      bg-blue-50
                      text-blue-600
                    "
                  >
                    {item.badge}
                  </div>
                )}

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-zinc-500">
                  {item.description}
                </p>

                <div className="mt-8">
                  <span className="text-5xl font-bold">
                    {item.price}
                  </span>
                </div>

                <button
                  className="
                    mt-10
                    w-full
                    bg-black
                    text-white
                    py-4
                    font-medium
                    hover:opacity-90
                    transition
                  "
                >
                  자세히 보기
                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            어떤 템플릿이 맞을지 고민되시나요?
          </h2>

          <p className="mt-5 text-zinc-500">
            업종과 상황에 맞는 솔루션을
            무료로 상담해드립니다.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              mt-10
              bg-black
              text-white
              px-8
              py-4
              font-medium
            "
          >
            무료 상담 신청
          </Link>

        </div>

      </section>

    </main>
  );
}