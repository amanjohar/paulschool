import { PageHero } from '@/components/page-hero';
import { prisma } from '@/lib/db';
import { Calendar, Clock, Tag } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function EventsPage() {
  const events = await prisma.event.findMany({ orderBy: { date: 'asc' } });
  return (
    <>
      <PageHero title="School Events" subtitle="From cultural celebrations to academic milestones — stay updated with everything happening at Paul International School." image="https://i.ytimg.com/vi/WvgehH5hkYA/hq720.jpg" />
      <section className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-5">
          {events.map((e) => {
            const d = new Date(e.date);
            return (
              <article key={e.id} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 flex gap-5">
                <div className="shrink-0 w-20 text-center bg-primary text-primary-foreground rounded-md py-3">
                  <p className="text-xs uppercase opacity-80">{d.toLocaleString('en-IN', { month: 'short' })}</p>
                  <p className="font-display text-3xl font-bold leading-none mt-1">{d.getDate()}</p>
                  <p className="text-xs opacity-80 mt-1">{d.getFullYear()}</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-secondary font-semibold">
                    <Tag className="w-3.5 h-3.5" /> {e.category}
                  </div>
                  <h3 className="font-display font-semibold text-xl text-primary mt-1">{e.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{e.description}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{d.toLocaleDateString('en-IN', { weekday: 'long' })}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />Whole day</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
