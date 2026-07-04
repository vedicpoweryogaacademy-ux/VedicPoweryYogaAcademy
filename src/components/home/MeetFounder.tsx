import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Heart, Award } from 'lucide-react';

export default function MeetFounder() {
  return (
    <section className="py-24 bg-[#FAFAF8] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saffron-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-saffron-100 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] lg:aspect-[3/4] shadow-[0_0_40px_rgba(245,166,35,0.15)] ring-2 ring-saffron-500/20 group">
                <Image
                  src="/images/award-hero.png"
                  alt="Guruji Manjunath Sampath in Meditation"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating tags */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/30 text-sacred-dark text-xs font-bold uppercase tracking-wider">
                    <Star size={12} className="text-saffron-500" fill="currentColor" />
                    26 Yrs Experience
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/30 text-sacred-dark text-xs font-bold uppercase tracking-wider">
                    <Award size={12} className="text-saffron-500" />
                    AYUSH Recognized
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/20 bg-saffron-50 text-saffron-600 text-xs font-semibold uppercase tracking-widest mb-6">
                <Heart size={14} />
                Meet The Founder
              </div>
              
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark mb-4 leading-tight">
                Shri Manjunath <span className="text-gradient-gold">Sampath Guruji</span>
              </h2>
              
              <p className="text-saffron-600 text-sm font-bold uppercase tracking-widest mb-8">
                Karnataka State Yoga Pramukh
              </p>

              <div className="space-y-5 text-sacred-brown/70 text-lg font-light leading-relaxed mb-8">
                <p>
                  With over two decades of dedicated practice, Guruji has shaped the yoga journey for thousands of students and trained hundreds of teachers across India.
                </p>
                <p>
                  As the Yoga Pramukh for Vidya Bharati Karnataka, he has authored yoga curriculum used nationally and has been officially recognized by the Ministry of AYUSH.
                </p>
              </div>

              {/* Quote / Signature style */}
              <div className="pl-6 border-l-4 border-saffron-500 mb-10">
                <p className="font-playfair text-xl italic text-sacred-dark/90 mb-2">
                  "Yoga is not just about bending the body; it is about expanding the mind and healing the soul."
                </p>
                <p className="text-saffron-600 font-bold text-sm tracking-widest uppercase">— Guruji</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base text-white shadow-[0_0_20px_rgba(245,166,35,0.3)] hover:scale-105 transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #F5A623 0%, #D4500A 100%)' }}
                >
                  Read Full Profile
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
