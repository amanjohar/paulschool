import { PageHero } from '@/components/page-hero';
import { ContactForm } from '@/components/contact-form';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you — reach out for admissions, queries or a campus visit." />
      <section className="max-w-[1200px] mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-card rounded-lg p-6 shadow-sm flex gap-4">
            <div className="w-11 h-11 rounded-md bg-primary text-primary-foreground flex items-center justify-center shrink-0"><MapPin className="w-5 h-5" /></div>
            <div>
              <h3 className="font-display font-semibold text-primary">Address</h3>
              <p className="text-sm text-muted-foreground mt-1">Near Jal Bhawan, Sitapur Road,<br />Lakhimpur Kheri – 262701, Uttar Pradesh, India</p>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm flex gap-4">
            <div className="w-11 h-11 rounded-md bg-primary text-primary-foreground flex items-center justify-center shrink-0"><Phone className="w-5 h-5" /></div>
            <div>
              <h3 className="font-display font-semibold text-primary">Phone</h3>
              <a href="tel:8765285114" className="text-sm text-muted-foreground mt-1 block hover:text-primary">8765285114</a>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm flex gap-4">
            <div className="w-11 h-11 rounded-md bg-primary text-primary-foreground flex items-center justify-center shrink-0"><Mail className="w-5 h-5" /></div>
            <div>
              <h3 className="font-display font-semibold text-primary">Email</h3>
              <a href="mailto:contact@paulinternationalschool.edu.in" className="text-sm text-muted-foreground mt-1 block hover:text-primary break-all">contact@paulinternationalschool.edu.in</a>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm flex gap-4">
            <div className="w-11 h-11 rounded-md bg-primary text-primary-foreground flex items-center justify-center shrink-0"><Clock className="w-5 h-5" /></div>
            <div>
              <h3 className="font-display font-semibold text-primary">School Hours</h3>
              <p className="text-sm text-muted-foreground mt-1">Monday – Saturday • 8:00 AM – 2:30 PM</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm aspect-video bg-muted">
            <iframe title="Map" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/India_Uttar_Pradesh_districts_2012_Lakhimpur_Kheri.svg/250px-India_Uttar_Pradesh_districts_2012_Lakhimpur_Kheri.svg.png" className="w-full h-full border-0" loading="lazy" />
          </div>
        </div>
        <div className="bg-card rounded-lg p-6 md:p-8 shadow-md">
          <h2 className="font-display text-2xl font-bold text-primary tracking-tight">Send us a <span className="text-secondary">message</span></h2>
          <p className="text-sm text-muted-foreground mt-1">We'll respond as soon as possible. Submissions are saved securely on our servers.</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
