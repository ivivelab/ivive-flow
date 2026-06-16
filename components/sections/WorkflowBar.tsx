import Image from "next/image";

const integrations = [
  {
    name: "OpenAI",
    logo: "/images/index/opai-logo.webp",
    width: 120,
    height: 40,
  },
  {
    name: "Google",
    logo: "/images/index/goo-logo.webp",
    width: 120,
    height: 40,
  },
  {
    name: "Naver",
    logo: "/images/index/naver-logo.webp",
    width: 120,
    height: 40,
  },
  {
    name: "Kakao",
    logo: "/images/index/kakao-logo.webp",
    width: 120,
    height: 40,
  },
  {
    name: "Slack",
    logo: "/images/index/slack-logo.webp",
    width: 120,
    height: 40,
  },
  {
    name: "Notion",
    logo: "/images/index/notion-logo.webp",
    width: 120,
    height: 40,
  },
];

export default function LogoStrip() {
  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="mb-8 text-center text-sm text-gray-500">
          다양한 서비스와 연동 가능합니다
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="opacity-60 transition hover:opacity-100"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={item.width}
                height={item.height}
                className="h-10 w-auto object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}