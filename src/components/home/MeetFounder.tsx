import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Heart, Award } from 'lucide-react';

export default function MeetFounder() {
  return (
    <section className="py-24 bg-sacred-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saffron-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square shadow-2xl">
                <Image
                  src="/images/award-ayush.jpg"
                  alt="Guruji receiving AYUSH recognition"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sacred-dark/80 via-transparent to-transparent" />
                
                {/* Floating tags */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
                    <Star size={12} className="text-saffron-400" fill="currentColor" />
                    26 Yrs Experience
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
                    <Award size={12} className="text-saffron-400" />
                    AYUSH Recognized
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/30 bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-widest mb-6">
                <Heart size={14} />
                Meet The Founder
              </div>
              
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Shri Manjunath <span className="text-gradient-gold">Sampath Guruji</span>
              </h2>
              
              <p className="text-saffron-400/80 text-sm font-bold uppercase tracking-widest mb-8">
                Karnataka State Yoga Pramukh
              </p>

              <div className="space-y-5 text-white/60 text-lg font-light leading-relaxed mb-10">
                <p>
                  With over two decades of dedicated practice, Guruji has shaped the yoga journey for thousands of students and trained hundreds of teachers across India.
                </p>
                <p>
                  As the Yoga Pramukh for Vidya Bharati Karnataka, he has authored yoga curriculum used nationally and has been officially recognized by the Ministry of AYUSH.
                </p>
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
