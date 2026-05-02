import { PageHero } from '@/components/page-hero';
import { prisma } from '@/lib/db';
import { GraduationCap } from 'lucide-react';

export const dynamic = 'force-dynamic';

function initials(name: string) {
  return name.split(/\s+/).map((p) => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
}

function colorFor(designation: string) {
  const d = designation?.toUpperCase?.() ?? '';
  if (d.includes('PRINCIPAL')) return 'bg-secondary text-primary';
  if (d.includes('PGT')) return 'bg-primary text-primary-foreground';
  if (d.includes('TGT')) return 'bg-primary/80 text-primary-foreground';
  if (d.includes('PRT')) return 'bg-accent text-primary';
  return 'bg-muted text-primary';
}

export default async function StaffPage() {
  const staff = await prisma.staff.findMany({ orderBy: { sno: 'asc' } });
  return (
    <>
      <PageHero title="Our Staff" subtitle="Meet the dedicated team of educators shaping young minds at Paul International School." />
      <section className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {staff.map((s) => (
            <div key={s.id} className="bg-card rounded-lg p-5 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center font-display font-bold ${colorFor(s.designation)}`}>{initials(s.name)}</div>
              <p className="font-display font-semibold text-primary mt-3 leading-tight">{s.name}</p>
              <div className="flex items-center gap-1.5 mt-1 text-xs uppercase tracking-wider text-secondary font-semibold">
                <GraduationCap className="w-3.5 h-3.5" /> {s.designation}
              </div>
              <p className="text-xs text-muted-foreground mt-2 font-mono">{s.qualification}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
