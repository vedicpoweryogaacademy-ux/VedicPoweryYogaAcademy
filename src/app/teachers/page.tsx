import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sun, Wind, Flame, Sparkles, Brain, HeartPulse, GraduationCap, Baby, 
  Star, Award, CheckCircle2, ArrowRight, Quote
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Teachers | Vedic Power Yoga Academy Bengaluru',
  description:
    'Meet our expert yoga teachers at Vedic Power Yoga Academy. Led by Shri Manjunath Sampath Guruji with 26 years of experience. Certified, experienced, and passionate about yoga.',
};

export default function TeachersPage() {
  const credentials = [
    'All India Vidya Bharati Yoga Committee Member',
    'Karnataka State Yoga Pramukh — Vidya Bharati',
    'Certified Agnihotra Master Trainer (2018)',
    'Certified Pranic Healer (2025)',
    'Yoga Textbook Content Writer',
    'Lifetime Member, Indian Yoga Association',
    'Ministry of AYUSH Recognized Instructor',
    'International Yoga Day 2026 Program Organizer',
  ];

  const specializations = [
    { icon: Sun, name: 'Ashtanga Yoga' },
    { icon: Wind, name: 'Pranayama' },
    { icon: Flame, name: 'Agnihotra' },
    { icon: Sparkles, name: 'Pranic Healing' },
    { icon: Brain, name: 'Meditation' },
    { icon: HeartPulse, name: 'Yoga Therapy' },
    { icon: GraduationCap, name: 'Teacher Training' },
    { icon: Baby, name: "Kids' Yoga" },
  ];

  const reviews = [
    { name: 'Suresh K.', text: 'Guruji is the most knowledgeable and humble teacher I have ever encountered. He tailors each session to individual needs.', rating: 5, role: 'Student for 3 years' },
    { name: 'Kavitha M.', text: 'My 10-year journey with Guruji has transformed not just my body but my entire life perspective. Truly a master.', rating: 5, role: 'Senior Student' },
    { name: 'Ramesh P.', text: 'The level of dedication and personal attention Guruji gives to every student is extraordinary. Worth every penny.', rating: 5, role: 'Yoga Therapy Patient' },
  ];

  return (
    <div className="bg-[#FAFAF8] min-h-screen selection:bg-saffron-200">
      
      {/* ── Hero Section ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Dynamic Backgrounds */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-saffron-100/80 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/3 animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-vermillion-100/60 rounded-full blur-[100px] opacity-60 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-saffron-200 bg-white/60 backdrop-blur-sm text-saffron-600 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in shadow-sm">
            <Award size={16} />
            Our Mentors
          </div>
          
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-[5.5rem] font-bold mb-6 text-sacred-dark tracking-tight leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Learn From <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 to-vermillion-500">The Masters</span>
          </h1>
          
          <p className="text-sacred-brown/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Immerse yourself in authentic teachings with expert, certified yoga instructors dedicated to your holistic transformation.
          </p>
        </div>
      </section>

      {/* ── Guruji Profile Section ── */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left: Single Image */}
            <div className="lg:col-span-5 relative mx-auto w-full max-w-md lg:max-w-none mt-8 lg:mt-0">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-2xl border-4 border-white group">
                <Image 
                  src="/images/hero-conclave.jpg" 
                  alt="Shri Manjunath Sampath Guruji at 6th National Yoga Conclave" 
                  fill 
                  sizes="(max-width: 1024px) 90vw, 40vw" 
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out" 
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sacred-dark/70 via-sacred-dark/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white z-10">
                  <p className="font-playfair text-xl sm:text-2xl font-bold">Shri Manjunath Sampath</p>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">Founder &amp; Head Teacher</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-5 bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-[0_8px_32px_rgba(245,166,35,0.2)] border border-saffron-100 animate-float text-center z-10">
                <p className="font-playfair text-2xl sm:text-3xl font-bold text-gradient-gold">26+</p>
                <p className="text-sacred-dark text-[8px] sm:text-[10px] uppercase tracking-widest font-bold mt-1">Years of<br/>Excellence</p>
              </div>

              {/* Decorative dots */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 bg-[radial-gradient(rgba(245,166,35,0.4)_2px,transparent_2px)] [background-size:14px_14px] -z-10 opacity-50" />
            </div>

            {/* Right: Glassmorphic Content Card */}
            <div className="lg:col-span-7 lg:pl-12">
              <div className="bg-white/60 backdrop-blur-2xl rounded-[3rem] p-8 sm:p-12 shadow-[0_8px_40px_rgba(26,10,0,0.04)] border border-white/80 relative overflow-hidden animate-slide-up" style={{ animationDelay: '0.4s' }}>
                
                {/* Subtle top gradient line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-saffron-300 via-vermillion-400 to-saffron-300 opacity-50" />

                <div className="mb-10">
                  <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-sacred-dark mb-2">
                    Shri Manjunath Sampath
                  </h2>
                  <h3 className="font-playfair text-3xl text-gradient-gold font-bold italic mb-4">Guruji</h3>
                  <p className="inline-flex items-center gap-2 bg-saffron-50 px-4 py-1.5 rounded-full border border-saffron-100 text-saffron-700 font-bold text-xs uppercase tracking-[0.2em]">
                    Yoga Expert · Educator · Healer
                  </p>
                </div>

                <p className="text-sacred-brown/80 leading-relaxed mb-10 text-lg font-light">
                  With over <strong className="font-semibold text-sacred-dark">26 years of profound experience</strong> in yoga education, teacher training, holistic wellness, Agnihotra, and Pranic Healing. As the Karnataka State Yoga Pramukh for Vidya Bharati, Guruji has shaped the foundation of yoga education across schools in Karnataka.
                </p>

                {/* Animated Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                  {[
                    { val: '26+', label: 'Years Exp.' },
                    { val: '1000+', label: 'Students' },
                    { val: '200+', label: 'Teachers' },
                    { val: '5★', label: 'Rating' },
                  ].map((stat, i) => (
                    <div key={i} className="group bg-white rounded-2xl p-5 text-center shadow-sm border border-saffron-50 hover:border-saffron-300 hover:shadow-[0_0_20px_rgba(245,166,35,0.15)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-saffron-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <p className="relative font-playfair text-3xl font-bold text-sacred-dark group-hover:text-saffron-600 transition-colors">{stat.val}</p>
                      <p className="relative text-sacred-brown/50 text-[10px] uppercase font-bold tracking-widest mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Modern Pills for Specializations */}
                <div className="mb-10">
                  <p className="text-sacred-dark font-bold text-xs uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                    <Sparkles size={14} className="text-saffron-500" /> Areas of Mastery
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {specializations.map((s, i) => (
                      <span key={i} className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-saffron-100 text-sacred-brown/80 text-xs font-semibold shadow-sm hover:bg-saffron-50 hover:text-saffron-700 hover:border-saffron-300 hover:scale-105 transition-all duration-300 cursor-default">
                        <s.icon size={14} className="text-saffron-400 group-hover:text-saffron-600 transition-colors" strokeWidth={2.5} /> 
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Clean Credentials List */}
                <div>
                  <p className="text-sacred-dark font-bold text-xs uppercase tracking-[0.15em] mb-5 flex items-center gap-2">
                    <Award size={14} className="text-saffron-500" /> Key Credentials
                  </p>
                  <ul className="space-y-3">
                    {credentials.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-sacred-brown/80 font-medium group">
                        <CheckCircle2 size={18} className="text-saffron-400 flex-shrink-0 mt-0.5 group-hover:text-saffron-600 transition-colors" />
                        <span className="leading-relaxed group-hover:text-sacred-dark transition-colors">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Student Reviews (Editorial Style) ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FAFAF8] to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#FAFAF8] to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark">
              Words of <span className="text-gradient-gold pb-2 block sm:inline-block mt-2 sm:mt-0">Transformation</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="group relative bg-[#FAFAF8] rounded-[2.5rem] p-10 shadow-sm border border-saffron-50 hover:shadow-[0_15px_40px_rgba(26,10,0,0.06)] transition-all duration-500 hover:-translate-y-2">
                <Quote size={40} className="absolute top-8 right-8 text-saffron-500/10 group-hover:text-saffron-500/20 transition-colors duration-500 rotate-180" />
                
                <div className="flex items-center gap-1 text-saffron-500 mb-6">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-sacred-dark/80 text-base leading-relaxed mb-8 font-playfair italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                
                <div className="border-t border-saffron-100 pt-6">
                  <p className="font-bold text-sacred-dark text-sm uppercase tracking-wider">{r.name}</p>
                  <p className="text-sacred-brown/50 text-xs font-semibold uppercase tracking-widest mt-1">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join as teacher CTA (Dark Theme) ── */}
      <section className="py-24 relative overflow-hidden bg-sacred-dark">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#F5A623 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-saffron-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-saffron-400 to-vermillion-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(245,166,35,0.4)] animate-glow">
            <GraduationCap size={32} className="text-white" />
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold mb-6 text-white">
            Ready to <span className="text-saffron-400">Share the Light?</span>
          </h2>
          <p className="text-white/70 text-lg mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Join our certified Teacher Training program. Deepen your own practice and gain the credentials to guide others under Guruji&apos;s direct mentorship.
          </p>
          <Link 
            href="/programs#teacher-training" 
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-sacred-dark font-bold text-base shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:bg-saffron-50 hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300"
          >
            Explore Teacher Training
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-saffron-500" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
