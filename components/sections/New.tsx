"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  "전체",
  "뷰티/헬스",
  "비즈니스",
  "교육/컨설팅",
  "IT/서비스",
];

const templates = [
  {
    category: "뷰티/헬스",
    title: "피부과 운영 프로세스",
    image: "/images/index/skin.webp",
    href: "/workflow/skin",
    description: "상담 · 예약 · CRM 자동화",
  },
  {
    category: "뷰티/헬스",
    title: "성형외과 운영 프로세스",
    image: "/images/index/cosmetic.webp",
    href: "/workflow/cosmetic",
    description: "상담 · 예약 · 사후관리 자동화",
  },
  {
    category: "교육/컨설팅",
    title: "영어학원 운영 프로세스",
    image: "/images/index/academy.webp",
    href: "/workflow/academy",
    description: "상담 · 레벨테스트 · 등록 자동화",
  },
  {
    category: "비즈니스",
    title: "법률사무소 운영 프로세스",
    image: "/images/index/law.webp",
    href: "/workflow/law",
    description: "상담접수 · 사건관리 자동화",
  },
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredTemplates =
    selectedCategory === "전체"
      ? templates
      : templates.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* 타이틀 */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            업무에 맞는 최적의 솔루션
          </h2>

          <p className="mt-4 text-zinc-500">
            업종별 AI Workflow 구축 사례를 확인해보세요.
          </p>
        </div>

        {/* 카테고리 */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all
                ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-white border border-zinc-200 text-zinc-700 hover:border-indigo-300"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {filteredTemplates.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group"
            >
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* 이미지 */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="25vw"
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* 내용 */}
                <div className="p-6">
                  <span
                    className="
                      inline-flex
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-medium
                      bg-indigo-50
                      text-indigo-600
                    "
                  >
                    {item.category}
                  </span>

                  <h3 className="mt-4 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    {item.description}
                  </p>

                  <div
                    className="
                      mt-6
                      text-indigo-600
                      font-medium
                      flex items-center gap-2
                    "
                  >
                    자세히 보기
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}