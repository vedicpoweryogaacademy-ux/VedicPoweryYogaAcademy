'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Star, Award, HeartPulse, Leaf } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FAFAF8]">
      {/* ── ORGANIC BACKGROUND BLOBS ── */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-saffron-100 rounded-full blur-[100px] opacity-70 -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-vermillion-100/50 rounded-full blur-[120px] opacity-60 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* ── LEFT CONTENT ── */}
        <div className={`w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-200 bg-white shadow-sm text-saffron-600 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-8">
            <Award size={16} />
            Ministry of AYUSH Recognized
          </div>

          <h1 className="font-playfair font-bold text-sacred-dark leading-[1.05] tracking-tight">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Find Balance.
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] mt-2">
              Cultivate <span className="text-gradient-gold">Peace.</span>
            </span>
          </h1>

          <p className="mt-8 text-sacred-brown/70 text-lg sm:text-xl leading-relaxed max-w-xl font-light">
            Transform your physical and mental well-being with authentic Ashtanga Yoga under the guidance of Shri Manjunath Sampath Guruji. 
            <strong className="text-sacred-dark font-medium"> 26 years of excellence in Bengaluru.</strong>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-sacred-dark rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-saffron-500 shadow-xl hover:shadow-saffron-500/30 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-saffron-100 rounded-full text-sacred-dark font-medium text-lg transition-all duration-300 hover:border-saffron-300 hover:bg-saffron-50 shadow-sm"
            >
              <Sparkles size={18} className="text-saffron-500" />
              Explore Programs
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-saffron-100 flex items-center justify-center overflow-hidden">
                   <HeartPulse size={16} className="text-saffron-500/50" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-saffron-500 mb-1">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} fill="currentColor" />)}
              </div>
              <span className="text-sacred-dark text-xs font-bold uppercase tracking-wider">Trusted by 1000+ Students</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT IMAGE & BENTO BOXES ── */}
        <div className={`w-full lg:w-[45%] relative h-[400px] sm:h-[500px] lg:h-[650px] transition-all duration-1000 delay-300 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Main Image in an Arch Shape */}
          <div className="absolute inset-x-4 lg:inset-x-0 bottom-0 top-12 lg:top-0 bg-white p-3 rounded-[3rem] rounded-t-[10rem] shadow-2xl border border-saffron-500/10">
            <div className="relative w-full h-full rounded-[2.5rem] rounded-t-[9.5rem] overflow-hidden">
              <Image
                src="/images/hero-founder.jpeg"
                alt="Shri Manjunath Sampath Guruji – Vedic Power Yoga Academy"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-[center_10%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Floating Card: Experience */}
          <div className="absolute bottom-6 sm:bottom-16 -left-2 sm:-left-4 lg:-left-12 bg-white/95 backdrop-blur-md p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl border border-white/50 animate-float scale-[0.85] sm:scale-100 origin-bottom-left z-20" style={{ animationDelay: '0s' }}>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-saffron-500 to-vermillion-500 flex items-center justify-center shadow-lg">
                 <span className="font-playfair text-lg sm:text-xl font-bold text-white">26</span>
              </div>
              <div>
                <p className="text-sacred-dark font-bold text-xs sm:text-sm">Years of</p>
                <p className="text-sacred-brown/60 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mt-0.5">Experience</p>
              </div>
            </div>
          </div>

          {/* Floating Card: Tag */}
          <div className="absolute top-8 sm:top-24 -right-2 sm:-right-4 lg:-right-8 bg-white/95 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl border border-white/50 animate-float scale-[0.85] sm:scale-100 origin-top-right z-20" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                <Leaf className="text-emerald-500 w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-sacred-dark font-bold text-xs sm:text-sm">Holistic Wellness</p>
                <p className="text-sacred-brown/60 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider mt-0.5">Mind & Body</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
