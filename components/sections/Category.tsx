import Image from "next/image";

export default function Category() {
  const items = [
    { name: "예약", icon: "/images/index/calendar.webp" },
    { name: "상담", icon: "/images/index/inquiry.webp" },
    { name: "고객", icon: "/images/index/customer.webp" },
    { name: "견적", icon: "/images/index/estimate.webp" },
    { name: "결제", icon: "/images/index/payment.webp" },
    { name: "통합", icon: "/images/index/integration.webp" },
  ];

  return (
    <section className="max-w-3xl mx-auto py-24">
      <div className="grid grid-cols-6 gap-8 text-center">
        {items.map((item) => (
          <div key={item.name}>
            <div className="w-24 h-24 bg-[#f5f5f5] rounded-xl mx-auto flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.name}
                width={48}
                height={48}
              />
            </div>

            <p className="mt-3">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}