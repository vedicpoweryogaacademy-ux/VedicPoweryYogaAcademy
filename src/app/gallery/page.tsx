'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Camera, ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages, GalleryCategory } from '@/lib/galleryData';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: GalleryCategory[] = ['All', 'Events'];

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev === null || prev === 0 ? filteredImages.length - 1 : prev - 1));
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev === null || prev === filteredImages.length - 1 ? 0 : prev + 1));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [lightboxIndex]);

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-saffron-100 rounded-full blur-[100px] opacity-60 -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-200 bg-white text-saffron-600 text-xs font-semibold uppercase tracking-widest mb-6">
            <Camera size={14} />
            Photo Gallery
          </span>
          <h1 className="font-playfair text-5xl lg:text-7xl font-bold mb-6 text-sacred-dark tracking-tight">
            Moments of <span className="text-gradient-gold">Peace</span>
          </h1>
          <p className="text-sacred-brown/70 text-lg sm:text-xl max-w-2xl mx-auto font-light">
            Glimpses into our daily practice, special events, and the serene environment at Vedic Power Yoga Academy.
          </p>
        </div>
      </section>


      {/* ── Gallery Masonry ── */}
      <section className="py-12 relative z-10 bg-white min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
            {filteredImages.map((img, i) => (
              <div 
                key={`${img.src}-${i}`}
                className="relative rounded-2xl overflow-hidden shadow-sm group break-inside-avoid border border-saffron-50 cursor-pointer mb-6"
                onClick={() => setLightboxIndex(i)}
              >
                {/* Natural image sizes with next/image requires using a wrapper or next/image with width/height, 
                    but since we have masonry we don't know height. A clean approach for masonry with Next 13+ 
                    is using width/height if known, or styling it relative. 
                    Let's use an img tag approach with next/image placeholder for unoptimized images if needed, 
                    or just object-cover with a random aspect ratio to emulate masonry structure. */}
                <div className={`relative w-full ${i % 4 === 0 ? 'aspect-square' : i % 3 === 0 ? 'aspect-[3/4]' : i % 2 === 0 ? 'aspect-[4/3]' : 'aspect-[4/5]'}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    priority={i < 6}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sacred-dark/80 via-sacred-dark/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Overlay Content removed since we no longer display categories */}
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-sacred-dark/50">
              No images found in this category.
            </div>
          )}

        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          {/* Close Button */}
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
          >
            <X size={32} />
          </button>

          {/* Prev Navigation */}
          <button 
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev === null || prev === 0 ? filteredImages.length - 1 : prev - 1)); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 hidden sm:block"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Next Navigation */}
          <button 
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev === null || prev === filteredImages.length - 1 ? 0 : prev + 1)); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 hidden sm:block"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-6xl h-[80vh] px-4 sm:px-16" onClick={() => setLightboxIndex(null)}>
            <div 
              className="relative w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image area
            >
              <div className="relative w-full h-full">
                <Image
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="absolute bottom-[-40px] text-center text-white/90">
                <p className="font-medium">{filteredImages[lightboxIndex].alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
