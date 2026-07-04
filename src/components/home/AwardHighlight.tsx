import Image from 'next/image';
import { Award, Star } from 'lucide-react';

export default function AwardHighlight() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#1A1105] to-[#2D1B07]">
      <div className="absolute top-0 right-0 w-[80%] h-full bg-gradient-to-l from-saffron-500/20 via-saffron-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-saffron-500/40 bg-saffron-500/20 text-saffron-300 text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              <Award size={15} />
              Recent Recognition
            </div>
            
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Honored by <span className="text-gradient-gold">Govt. of Karnataka</span>
            </h2>
            
            <p className="text-saffron-50/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl font-light">
              We are proud to announce that Shri Manjunath Sampath Guruji has been officially recognized and awarded by the 
              <strong className="text-white font-semibold"> Department of AYUSH</strong> as a key 
              <strong className="text-saffron-400 font-bold"> Program Organizer </strong> 
              for the <span className="italic">12th International Yoga Day (2026)</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start justify-center lg:justify-start">
              <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:bg-white/10 transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-saffron-400 to-saffron-600 flex items-center justify-center text-white shadow-lg">
                  <Star size={24} fill="currentColor" />
                </div>
                <div className="text-left">
                  <p className="text-white/60 font-bold text-xs uppercase tracking-[0.2em] mb-1">Theme</p>
                  <p className="text-white text-base font-medium">Yoga for Harmony & Peace</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[50%] xl:w-[45%] relative">
            <div className="relative rounded-3xl overflow-hidden aspect-square sm:aspect-[4/3] lg:aspect-square xl:aspect-[4/5] shadow-2xl ring-1 ring-white/20 group">
              <Image 
                src="/images/award-hero.png" 
                alt="Guruji receiving AYUSH Award for International Yoga Day"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sacred-dark/90 via-sacred-dark/20 to-transparent opacity-80" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-saffron-500 rounded-full blur-[3rem] opacity-40 pointer-events-none" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-500 rounded-full blur-[3rem] opacity-20 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
