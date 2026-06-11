export default function Category() {
  const items = [
    {
      name: "예약",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M16 3v4" />
          <path d="M8 3v4" />
          <path d="M4 11h16" />
        </svg>
      ),
    },

    {
      name: "상담",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M8 9h8" />
          <path d="M8 13h6" />
          <path d="M5 18l-1 4l4 -1h10a3 3 0 0 0 3 -3v-11a3 3 0 0 0 -3 -3h-11a3 3 0 0 0 -3 3v11a3 3 0 0 0 3 3" />
        </svg>
      ),
    },

    {
      name: "고객",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
      ),
    },

    {
      name: "견적",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        </svg>
      ),
    },

    {
      name: "결제",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M3 10h18" />
        </svg>
      ),
    },

    {
      name: "통합",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 6v12" />
          <path d="M6 12h12" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
  ];

  return (
    <section className="mx-auto max-w-5xl py-24">

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

        {items.map((item) => (
          <div
            key={item.name}
            className="
              group
              rounded-3xl
              border
              border-zinc-200
              p-6
              text-center
              transition-all
              hover:-translate-y-1
              hover:border-black
              hover:shadow-lg
            "
          >
            <div className="flex justify-center text-zinc-800">
              {item.icon}
            </div>

            <p className="mt-4 font-medium">
              {item.name}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}