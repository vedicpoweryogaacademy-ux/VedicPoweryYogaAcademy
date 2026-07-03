import type { Metadata } from 'next';
import Image from 'next/image';
import { Camera, Image as ImageIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery | Vedic Power Yoga Academy Bengaluru',
  description: 'View the photo gallery of Vedic Power Yoga Academy. See our yoga classes, special events, awards, and Guruji\'s advanced yoga postures.',
};

export default function GalleryPage() {
  const images = [
    { src: '/images/pose-warrior.jpg', alt: 'Advanced warrior pose by Guruji', category: 'Poses' },
    { src: '/images/pose-sunset.jpg', alt: 'Meditation at sunset', category: 'Meditation' },
    { src: '/images/pose-lotus.jpg', alt: 'Padmasana (Lotus Pose)', category: 'Poses' },
    { src: '/images/event-idy2026.jpg', alt: 'International Yoga Day Event', category: 'Events' },
    { src: '/images/award-ayush.jpg', alt: 'Ministry of AYUSH Recognition', category: 'Awards' },
    { src: '/images/pose-namaste.jpg', alt: 'Namaste Pose', category: 'Poses' },
    { src: '/images/pose-kneeling.jpg', alt: 'Kneeling stretch pose', category: 'Poses' },
    { src: '/images/pose-meditation.jpg', alt: 'Deep meditation', category: 'Meditation' },
    { src: '/images/pose-prone.jpg', alt: 'Prone backbend pose', category: 'Poses' },
    { src: '/images/flyer-1.jpg', alt: 'Academy flyer', category: 'Academy' },
    { src: '/images/flyer-2.jpg', alt: 'Academy flyer', category: 'Academy' },
    { src: '/images/academy-banner.jpg', alt: 'Academy banner', category: 'Academy' },
  ];

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
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
      <section className="py-20 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, i) => (
              <div 
                key={i} 
                className="relative rounded-3xl overflow-hidden shadow-sm group break-inside-avoid border border-saffron-50"
              >
                {/* 
                  Since we don't know the exact dimensions of all images, we use a placeholder 
                  padding-bottom trick or just let the image render naturally if using standard img tags. 
                  Next.js Image requires width/height or fill. For masonry with unknown heights,
                  we can use standard img tag or object-cover with a fixed aspect ratio.
                  Let's use fixed aspect ratios that vary slightly for a masonry effect.
                */}
                <div className={`relative w-full ${i % 3 === 0 ? 'aspect-square' : i % 2 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sacred-dark/80 via-sacred-dark/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-saffron-500 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                      <ImageIcon size={12} />
                      {img.category}
                    </span>
                    <p className="text-white font-medium text-sm drop-shadow-md">
                      {img.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
