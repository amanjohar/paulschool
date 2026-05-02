'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, FileText, GraduationCap } from 'lucide-react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/about/staff', label: 'Our Staff' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? '/';
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-primary/95 text-primary-foreground shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-display font-bold tracking-tight">
          <span className="w-9 h-9 rounded-md bg-secondary text-primary flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm sm:text-base">Paul International</span>
            <span className="block text-[10px] sm:text-xs opacity-80">School • Lakhimpur Kheri</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => {
            const active = pathname === n.href || (n.href !== '/' && pathname?.startsWith(n.href));
            return (
              <Link key={n.href} href={n.href} className={`px-3 py-2 rounded-md text-sm transition-colors ${active ? 'bg-secondary text-primary font-semibold' : 'hover:bg-white/10'}`}>
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/cbse-disclosure" className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-secondary text-primary font-semibold text-sm hover:brightness-95 transition shadow-sm">
            <FileText className="w-4 h-4" /> CBSE Disclosure
          </Link>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-4 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm hover:bg-white/10">{n.label}</Link>
            ))}
            <Link href="/cbse-disclosure" onClick={() => setOpen(false)} className="sm:hidden px-3 py-2 rounded-md bg-secondary text-primary font-semibold text-sm flex items-center gap-1.5 mt-1">
              <FileText className="w-4 h-4" /> CBSE Disclosure
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
