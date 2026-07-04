import Link from 'next/link';
import Image from 'next/image';
import { Camera, ArrowRight } from 'lucide-react';

export default function GalleryPreview() {
  const images = [
    '/images/pose-warrior.jpg',
    '/images/pose-meditation.jpg',
    '/images/pose-lotus.jpg',
    '/images/pose-prone.jpg',
    '/images/pose-sunset.jpg',
  ];

  return (
    <section className="py-24 bg-sacred-cream relative overflow-hidden">
      {/* Background mandala decoration */}
      <div className="absolute -bottom-64 -right-64 w-[800px] h-[800px] bg-saffron-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/20 bg-saffron-50 text-saffron-700 text-xs font-semibold uppercase tracking-widest mb-4">
              <Camera size={14} className="text-saffron-500" />
              Inside The Academy
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark mt-2">
              Moments of <span className="text-gradient-gold">Peace</span>
            </h2>
          </div>
          
          <Link
            href="/gallery"
            className="group hidden sm:inline-flex items-center gap-2 text-saffron-600 font-bold uppercase tracking-wider text-sm hover:text-saffron-700 transition-colors flex-shrink-0"
          >
            View Full Gallery 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 md:col-span-2 row-span-2 relative rounded-3xl overflow-hidden aspect-square group shadow-lg">
            <Image
              src={images[0]}
              alt="Yoga pose at academy"
              fill
              sizes="(max-width: 768px) 50vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-sacred-dark/0 group-hover:bg-sacred-dark/20 transition-colors duration-500" />
          </div>
          
          {images.slice(1).map((src, i) => (
            <div key={i} className="relative rounded-3xl overflow-hidden aspect-square group shadow-md">
              <Image
                src={src}
                alt="Yoga practice"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-sacred-dark/0 group-hover:bg-sacred-dark/20 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sacred-dark text-white font-bold text-base shadow-lg"
          >
            View Full Gallery
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
