export function PageHero({ title, subtitle, image }: { title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" className="w-full h-full object-cover opacity-25" />
        </div>
      )}
      <div className="relative max-w-[1200px] mx-auto px-4 py-16 md:py-20">
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary text-primary text-xs font-semibold tracking-wide uppercase">Paul International School</div>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base md:text-lg opacity-90">{subtitle}</p>}
      </div>
    </section>
  );
}
