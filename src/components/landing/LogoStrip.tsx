const PARTNERS = [
  { name: "RAAZ", style: "font-bold uppercase tracking-widest text-[13px]" },
  { name: "IXI ELIXIR", style: "font-semibold tracking-wide" },
  { name: "faff.", style: "font-bold italic" },
];

export function LogoStrip() {
  return (
    <section className="px-6 py-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-600 mb-10">
          Design Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {PARTNERS.map((partner) => (
            <span
              key={partner.name}
              className={`text-sm text-gray-500 ${partner.style}`}
            >
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
