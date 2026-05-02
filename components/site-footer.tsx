import Link from 'next/link';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-[1200px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-display font-bold mb-3">
            <GraduationCap className="w-5 h-5 text-secondary" />
            <span>Paul International School</span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">A CBSE-affiliated, family-spirited school established in 2002, blending tradition and modernity in Lakhimpur Kheri.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-secondary">Explore</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link href="/about" className="hover:text-secondary">About Us</Link></li>
            <li><Link href="/events" className="hover:text-secondary">Events</Link></li>
            <li><Link href="/gallery" className="hover:text-secondary">Gallery</Link></li>
            <li><Link href="/cbse-disclosure" className="hover:text-secondary">CBSE Disclosure</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-secondary">Reach Us</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Near Jal Bhawan, Sitapur Road, Lakhimpur Kheri – 262701</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> 8765285114</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> contact@paulinternationalschool.edu.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs opacity-70">© {new Date().getFullYear()} Paul International School. All rights reserved.</div>
    </footer>
  );
}
