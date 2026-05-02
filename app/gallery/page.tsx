import { PageHero } from '@/components/page-hero';

const images = [
  { id: 1, url: 'https://example.com/image1.jpg', caption: 'School event', album: 'Events' },
  { id: 2, url: 'https://example.com/image2.jpg', caption: 'Classroom', album: 'Campus' },
  // Add more images as needed
];

export default function GalleryPage() {
  const albums = Array.from(new Set(images.map((i) => i.album)));
  return (
    <>
      <PageHero title="Gallery" subtitle="A glimpse into life at Paul International School — our campus, classrooms and celebrations." />
      <section className="max-w-[1200px] mx-auto px-4 py-16">
        {albums.map((album) => (
          <div key={album} className="mb-12">
            <h2 className="font-display text-2xl font-bold tracking-tight text-primary mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-secondary" /> {album}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.filter((i) => i.album === album).map((img) => (
                <figure key={img.id} className="group rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition relative bg-muted aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent text-primary-foreground p-3 text-sm font-medium">{img.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
