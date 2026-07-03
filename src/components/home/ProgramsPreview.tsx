import Link from 'next/link';
import { ArrowRight, Leaf, Wind, Sun, HeartPulse, Brain, Zap, Baby, User, Building2, PersonStanding, GraduationCap, Laptop } from 'lucide-react';

const programs = [
  { icon: Leaf, name: 'Hatha Yoga', desc: 'Foundation poses & alignment', duration: '45 min' },
  { icon: Zap, name: 'Ashtanga Yoga', desc: 'Dynamic sequences & strength', duration: '60 min' },
  { icon: Sun, name: 'Power Yoga', desc: 'Fitness-focused practice', duration: '60 min' },
  { icon: Wind, name: 'Pranayama', desc: 'Breathing techniques & control', duration: '30 min' },
  { icon: Brain, name: 'Meditation', desc: 'Mindfulness & inner peace', duration: '30 min' },
  { icon: HeartPulse, name: 'Yoga Therapy', desc: 'Healing chronic conditions', duration: '45 min' },
  { icon: Baby, name: "Kids' Yoga", desc: 'Fun & educational for children', duration: '45 min' },
  { icon: User, name: "Women's Yoga", desc: 'Tailored for women\'s health', duration: '60 min' },
  { icon: Building2, name: 'Corporate Yoga', desc: 'Workplace wellness programs', duration: '45 min' },
  { icon: PersonStanding, name: 'Senior Citizens', desc: 'Gentle practice for elders', duration: '45 min' },
  { icon: GraduationCap, name: 'Teacher Training', desc: 'Certified yoga teacher program', duration: '200 hrs' },
  { icon: Laptop, name: 'Online Yoga', desc: 'Live sessions from home', duration: '45 min' },
];

export default function ProgramsPreview() {
  return (
    <section className="py-24 bg-sacred-cream relative">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#1A0A00 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/20 bg-saffron-50 text-saffron-700 text-xs font-semibold uppercase tracking-widest mb-4">
            <Leaf size={14} className="text-saffron-500" />
            Our Offerings
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark mt-2 mb-4">
            Yoga Programs for
            <span className="text-gradient-gold block mt-2">Every Journey</span>
          </h2>
          <p className="text-sacred-brown/60 text-lg max-w-xl mx-auto font-light">
            12 specialized programs designed for all ages, fitness levels, and wellness goals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {programs.map((prog, i) => (
            <Link
              href="/programs"
              key={i}
              className="bg-white rounded-3xl p-6 border border-saffron-100 hover:border-saffron-400 hover:shadow-sacred transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-saffron-50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-saffron-500 group-hover:to-vermillion-500 transition-colors duration-300">
                  <prog.icon size={24} className="text-saffron-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold text-saffron-500 uppercase tracking-widest bg-saffron-50 px-3 py-1 rounded-full border border-saffron-100">
                  {prog.duration}
                </span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-sacred-dark mb-2 group-hover:text-saffron-600 transition-colors">
                {prog.name}
              </h3>
              <p className="text-sacred-brown/60 text-sm leading-relaxed font-light mb-6 flex-grow">
                {prog.desc}
              </p>
              <div className="flex items-center gap-1 text-saffron-500 text-sm font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                Learn More <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sacred-dark text-white font-bold text-base shadow-lg hover:bg-saffron-500 hover:shadow-saffron-500/30 hover:scale-105 transition-all duration-300"
          >
            View Full Timetable
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
