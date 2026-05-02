import Link from 'next/link';
import { ArrowRight, Award, BookOpen, FlaskConical, Music, Users, Trophy, Calendar, Sparkles } from 'lucide-react';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

const features = [
  { icon: BookOpen, title: 'CBSE Curriculum', desc: 'Affiliated to CBSE, Delhi with a scientifically tested, balanced curriculum.' },
  { icon: FlaskConical, title: 'Modern Labs', desc: 'Well-equipped science and computer laboratories with audio-visual aids.' },
  { icon: Music, title: 'Hobbies & Arts', desc: 'Painting, craft, music, dance and dramatics nurturing every interest.' },
  { icon: Trophy, title: 'Sports & Co-curricular', desc: 'A culture of competition and teamwork through inter-house events.' },
  { icon: Users, title: 'Dedicated Faculty', desc: 'Experienced PGT, TGT and PRT teachers committed to every learner.' },
  { icon: Award, title: 'A Family School', desc: 'Not-for-profit, inclusive ethos — more than a school; a family.' },
];

export default async function HomePage() {
  const events = await prisma.event.findMany({ orderBy: { date: 'asc' }, take: 3 });
  const gallery = await prisma.galleryImage.findMany({ orderBy: { ord: 'asc' }, take: 4 });

  return (
    <>
      {/* HERO */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(218_70%_15%)]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-[1200px] mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-xs font-semibold mb-5">
              <Sparkles className="w-3.5 h-3.5" /> Established 2002 • CBSE Affiliated
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              More than a school. <span className="text-secondary">A family.</span>
            </h1>
            <p className="mt-6 text-lg opacity-90 max-w-2xl">
              Paul International School blends tradition and modernity to nurture confident, compassionate learners in the heart of Lakhimpur Kheri.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-secondary text-primary font-semibold hover:brightness-95 shadow">
                Discover the School <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 font-semibold border border-white/20">
                Visit Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-2">Welcome</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary">A legacy of <span className="text-secondary">excellence</span> since 2002</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Established in July 2002, Paul International School has earned its reputation as one of the finest educational institutions in the region. Run on Public-School lines and affiliated to CBSE, Delhi, the school prepares students to compete and lead with confidence.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Under the dynamic leadership of Mr. Ramanjit Singh Johar (Chairman) and Mrs. Rashmi Johar (MD – Academics), the school has carved a name in academics, co-curricular activities and sports.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all">
              Read more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {gallery.slice(0, 4).map((g) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img key={g.id} src={g.url} alt={g.caption} className="rounded-lg shadow-md w-full aspect-[4/3] object-cover hover:scale-[1.02] transition" />
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-accent/40 py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-2">What we offer</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary">A campus that <span className="text-secondary">inspires</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="group bg-card rounded-lg p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-11 h-11 rounded-md bg-primary text-primary-foreground flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-primary transition">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg text-primary">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOPPERS */}
      <section className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-2">Pride of Paul</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary">Toppers <span className="text-secondary">2024–25</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <div className="bg-card rounded-lg p-6 shadow-md border-l-4 border-secondary">
            <Award className="w-7 h-7 text-secondary mb-3" />
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Class 10 Topper</p>
            <p className="font-display font-bold text-2xl text-primary mt-1">Aditya Pratap Singh</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-md border-l-4 border-secondary">
            <Award className="w-7 h-7 text-secondary mb-3" />
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Class 12 Topper</p>
            <p className="font-display font-bold text-2xl text-primary mt-1">Shubhangi Nandan</p>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-2">Calendar</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Upcoming <span className="text-secondary">Events</span></h2>
            </div>
            <Link href="/events" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">View all <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {events.map((e) => (
              <div key={e.id} className="bg-white/5 backdrop-blur rounded-lg p-5 hover:bg-white/10 transition border border-white/10">
                <div className="flex items-center gap-2 text-secondary text-sm font-mono">
                  <Calendar className="w-4 h-4" />
                  {new Date(e.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                </div>
                <h3 className="font-display font-semibold text-lg mt-2">{e.title}</h3>
                <p className="text-sm opacity-80 mt-2 line-clamp-3">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
