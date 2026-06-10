import Image from "next/image";
import Link from "next/link";

const templates = [ 
  {
    title: "피부과 운영 프로세스",
    image: "/images/index/skin.webp",
    href: "/images/index/skin",
    description: "상담 · 예약 · CRM 자동화",
  },
  {
    title: "성형외과 운영 프로세스",
    image: "/images/index/cosmetic.webp",
    href: "/images/index/cosmetic",
    description: "상담 · 예약 · 사후관리 자동화",
  },
  {
    title: "영어학원 운영 프로세스",
    image: "/images/index/academy.webp",
    href: "/images/index/academy",
    description: "상담 · 레벨테스트 · 등록 자동화",
  },
  {
    title: "법률사무소 운영 프로세스",
    image: "/images/index/law.webp",
    href: "/images/index/law",
    description: "상담접수 · 사건관리 자동화",
  },
];


export default function PortfolioSection() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mt-4">
          NEW WORKFLOW
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
      {templates.map((item) => (
      <Link
      key={item.title}
      href={item.href}
      className="group"
      >
        <div className="overflow-hidden border border-[#ddd]">
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={800}
            sizes="25vw"
            className="w-full h-auto transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-base">
          {item.title}
          </h3>

          <p className="text-xs text-zinc-500">
          FlowOS 구축 사례 보기 →
          </p>
      </div>
    </Link>
  ))}
</div>
    </section>
  );
}