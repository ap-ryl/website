const LOGOS = [
  { name: "Saturn", style: "font-semibold tracking-wide" },
  { name: "Slice", style: "font-bold" },
  { name: "Commenda", style: "font-medium tracking-wide" },
  { name: "Raaz", style: "font-bold uppercase tracking-widest text-[13px]" },
  { name: "Glide", style: "font-semibold" },
];

export function LogoStrip() {
  return (
    <section className="px-6 py-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-600 mb-10">
          Trusted by engineers at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {LOGOS.map((logo) => (
            <span
              key={logo.name}
              className={`text-sm text-gray-500 ${logo.style}`}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
