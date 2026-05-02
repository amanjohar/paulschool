import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { Quote, Users, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" subtitle="Discover the story, vision and people behind Paul International School." image="https://www.mindandlife.org/wp-content/uploads/2023/01/Happiness_Activity_Delhi_Government_School-1024x616.jpg" />

      <section id="about-school" className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-secondary" />
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold">Section One</p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary">About the <span className="text-secondary">School</span></h2>
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>Paul International School, started in July 2002, has acquired the reputation of being one of the best educational institutions in this part of the country. The school is affiliated to CBSE, Delhi and has come up to meet the burgeoning needs and aspirations of the people.</p>
            <p>It is run purely on Public-School lines and, by providing quality education, prepares students to compete exceptionally well with their counterparts in other states. Our students have the same confidence and bearing that typifies a true public-school child.</p>
            <p>Under the dynamic leadership of Mr. Ramanjit Singh Johar, Chairman, and Mrs. Rashmi Johar, MD (Academics), the school has won name and fame for itself in academics, co-curricular activities and sports in a very short span of time.</p>
            <p>The rich blend of tradition and modernity is a special feature that makes the school stand out. Ideal location, dedicated staff, a scientifically tested curriculum and good grounding in English provide ample opportunity to students — not only to develop their personality but also to excel in every field of activity.</p>
            <p>The well-equipped laboratories with the latest educational and audio-visual aids make teaching a pleasure. The computer lab is well equipped to match the highest standards. Special arrangements are also made for hobbies such as painting, craft, music, dance and dramatics. We love to teach our students — and our students love to be taught by us.</p>
          </div>
          <aside className="bg-accent/40 rounded-lg p-6 h-fit shadow-sm">
            <h3 className="font-display font-semibold text-lg text-primary mb-4">At a Glance</h3>
            <dl className="space-y-3 text-sm">
              <div><dt className="text-muted-foreground">Established</dt><dd className="font-semibold text-primary">July 2002</dd></div>
              <div><dt className="text-muted-foreground">Affiliation</dt><dd className="font-semibold text-primary">CBSE, Delhi</dd></div>
              <div><dt className="text-muted-foreground">Chairman</dt><dd className="font-semibold text-primary">Mr. Ramanjit Singh Johar</dd></div>
              <div><dt className="text-muted-foreground">MD (Academics)</dt><dd className="font-semibold text-primary">Mrs. Rashmi Johar</dd></div>
              <div><dt className="text-muted-foreground">Principal</dt><dd className="font-semibold text-primary">Mr. Vikas Shukla</dd></div>
              <div><dt className="text-muted-foreground">Location</dt><dd className="font-semibold text-primary">Lakhimpur Kheri, U.P.</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section id="principal" className="bg-accent/30 py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-secondary" />
            <p className="text-sm uppercase tracking-widest text-secondary font-semibold">Section Two</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary">Principal&rsquo;s <span className="text-secondary">Message</span></h2>

          <div className="mt-8 grid md:grid-cols-3 gap-8 items-start">
            <div className="bg-card rounded-lg p-6 shadow-md text-center">
              <div className="w-28 h-28 rounded-full bg-primary text-primary-foreground mx-auto flex items-center justify-center font-display text-3xl font-bold">VS</div>
              <p className="font-display font-bold text-lg text-primary mt-4">Mr. Vikas Shukla</p>
              <p className="text-sm text-muted-foreground">Principal</p>
              <p className="text-xs text-muted-foreground mt-1">M.Sc., B.Ed.</p>
            </div>
            <div className="md:col-span-2 bg-card rounded-lg p-8 shadow-md relative">
              <Quote className="w-10 h-10 text-secondary/40 absolute top-4 right-4" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Dear Parents and Students,</p>
                <p>It gives me immense pleasure to welcome you to Paul International School — an institution that is more than a school; it is a family. Since 2002, we have endeavoured to nurture young minds with values of discipline, compassion and academic excellence.</p>
                <p>Our approach blends a rigorous CBSE curriculum with vibrant co-curricular experiences, ensuring every child discovers their unique strengths. We believe education must prepare students not only for examinations but for life — making them confident, responsible citizens of tomorrow.</p>
                <p>I invite you to partner with us in this remarkable journey of learning, growth and excellence.</p>
                <p className="font-display font-semibold text-primary">— Mr. Vikas Shukla, Principal</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/about/staff" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:opacity-90">
              <Users className="w-4 h-4" /> Meet Our Staff <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
