import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image & Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/images/pose-warrior.jpg")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-sacred-dark via-sacred-dark/95 to-sacred-dark/80" />
      
      {/* Decorative Light */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-saffron-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-16 h-16 rounded-full bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center mx-auto mb-8 animate-pulse-slow">
          <div className="w-2.5 h-2.5 rounded-full bg-saffron-400" />
        </div>
        
        <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Begin Your<br />
          <span className="text-gradient-gold">Yoga Journey?</span>
        </h2>
        
        <p className="text-white/70 text-lg sm:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Join our community today. Call us now or walk in for a free trial class to experience authentic Ashtanga yoga under Guruji&apos;s guidance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-sacred-dark font-bold text-base shadow-xl hover:scale-105 transition-all duration-300"
          >
            Enroll Now 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="tel:+918050886649"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-base hover:bg-white/20 transition-all duration-300"
          >
            <Phone size={18} className="text-saffron-400" />
            Call: 8050886649
          </a>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-2 text-white/50 text-sm font-semibold uppercase tracking-widest">
          <WhatsAppIcon size={14} className="text-green-400" />
          WhatsApp also available
        </div>
      </div>
    </section>
  );
}
