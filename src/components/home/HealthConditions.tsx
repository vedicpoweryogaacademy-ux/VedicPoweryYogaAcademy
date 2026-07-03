import Link from 'next/link';
import { Activity, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HealthConditions() {
  const conditions = [
    'Diabetes Management',
    'Back & Joint Pain',
    'PCOD & Thyroid',
    'Stress & Anxiety',
    'Blood Pressure',
    'Weight Management',
    'Digestive Disorders',
    'Asthma & Respiratory',
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient sphere */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-saffron-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/20 bg-saffron-50 text-saffron-700 text-xs font-semibold uppercase tracking-widest mb-6">
              <Activity size={14} className="text-saffron-500" />
              Yoga Therapy
            </div>
            
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark mb-6 leading-tight">
              Healing from Within
              <span className="text-gradient-gold block mt-2">Without Medication</span>
            </h2>
            
            <p className="text-sacred-brown/70 text-lg leading-relaxed mb-10 font-light">
              Our specialized yoga therapy sessions combine specific asanas, pranayama, and dhyana to naturally manage and heal chronic health conditions. Based on traditional texts and modern anatomy.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
              {conditions.map((condition, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-saffron-500 flex-shrink-0" />
                  <span className="text-sacred-dark font-semibold text-sm">{condition}</span>
                </div>
              ))}
            </div>

            <Link
              href="/therapy"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sacred-dark text-white font-bold text-base shadow-lg hover:bg-saffron-500 hover:shadow-saffron-500/30 hover:scale-105 transition-all duration-300"
            >
              Learn About Therapy
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Visual/Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-4 lg:space-y-6 mt-8 lg:mt-12">
              <div className="bg-saffron-50 rounded-3xl p-8 border border-saffron-100 flex flex-col items-center text-center">
                <p className="font-playfair text-4xl font-bold text-saffron-600 mb-2">13+</p>
                <p className="text-sacred-dark text-xs uppercase tracking-widest font-bold">Conditions Treated</p>
              </div>
              <div className="bg-sacred-dark rounded-3xl p-8 text-center text-white shadow-xl">
                <p className="font-playfair text-4xl font-bold text-gradient-gold mb-2">90%</p>
                <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Success Rate</p>
              </div>
            </div>
            <div className="space-y-4 lg:space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-saffron-100 shadow-[0_4px_24px_rgba(26,10,0,0.04)] text-center">
                <p className="font-playfair text-4xl font-bold text-sacred-dark mb-2">1-on-1</p>
                <p className="text-sacred-brown/50 text-xs uppercase tracking-widest font-bold">Attention</p>
              </div>
              <div className="bg-gradient-to-br from-saffron-500 to-vermillion-500 rounded-3xl p-8 text-white shadow-xl text-center">
                <p className="font-playfair text-4xl font-bold mb-2">0</p>
                <p className="text-white/80 text-xs uppercase tracking-widest font-bold">Side Effects</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
