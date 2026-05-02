import { PageHero } from '@/components/page-hero';
import { CBSE_LINKS } from '@/lib/cbse-links';
import { FileText, ExternalLink } from 'lucide-react';

export default function CBSEDisclosurePage() {
  return (
    <>
      <PageHero title="Mandatory CBSE Disclosure" subtitle="Public disclosure documents as per CBSE norms. Click any document to view or download." />
      <section className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CBSE_LINKS.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="group bg-card rounded-lg p-5 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 flex items-start gap-4">
              <div className="w-11 h-11 rounded-md bg-accent text-primary flex items-center justify-center shrink-0 group-hover:bg-secondary transition">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-display font-semibold text-primary leading-tight">{l.label}</p>
                <p className="text-xs text-muted-foreground mt-1 inline-flex items-center gap-1">View PDF <ExternalLink className="w-3 h-3" /></p>
              </div>
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-10 text-center">Documents are hosted on the official Paul International School website.</p>
      </section>
    </>
  );
}
