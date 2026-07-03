import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  HeartPulse, 
  Brain, 
  Activity, 
  Stethoscope, 
  Smile, 
  Scale, 
  TrendingDown, 
  ArrowRight,
  ClipboardList,
  Target,
  UserCheck,
  LineChart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Yoga Therapy & Health | Vedic Power Yoga Academy Bengaluru',
  description:
    'Specialized Yoga Therapy at Vedic Power Yoga Academy for Back Pain, Diabetes, PCOD, Thyroid, Stress, Anxiety, Depression, Obesity, Arthritis, Migraine, Hypertension and Insomnia.',
};

const conditions = [
  {
    id: 'back-pain',
    icon: Activity,
    name: 'Back Pain',
    desc: 'Chronic back pain affects millions. Our targeted yoga sequences strengthen the core, improve spinal alignment, and release muscle tension for lasting relief.',
    practices: ['Cat-Cow Stretch', 'Child\'s Pose', 'Bhujangasana', 'Setu Bandhasana', 'Supta Matsyendrasana'],
    duration: '45 min',
    results: '70% improvement in 4–6 weeks',
    color: 'from-rose-400 to-rose-500',
    shadow: 'shadow-rose-500/20',
  },
  {
    id: 'neck-pain',
    icon: Brain,
    name: 'Neck Pain',
    desc: 'Desk jobs and screen time cause chronic neck tension. Specific yoga postures and stretches release cervical tension, improve mobility, and prevent future pain.',
    practices: ['Neck Rotations', 'Gomukhasana', 'Garudasana arms', 'Matsyasana', 'Pranayama'],
    duration: '30 min',
    results: '80% improvement in 3–4 weeks',
    color: 'from-orange-400 to-orange-500',
    shadow: 'shadow-orange-500/20',
  },
  {
    id: 'diabetes',
    icon: Stethoscope,
    name: 'Diabetes Management',
    desc: 'Yoga stimulates the pancreas, improves insulin sensitivity, and regulates blood sugar levels. Combined with pranayama, it provides a natural complementary approach.',
    practices: ['Mandukasana', 'Kapalbhati', 'Pawanmuktasana', 'Halasana', 'Ardha Matsyendrasana'],
    duration: '45 min',
    results: 'Blood sugar stabilization in 8–12 weeks',
    color: 'from-blue-400 to-blue-500',
    shadow: 'shadow-blue-500/20',
  },
  {
    id: 'pcod',
    icon: HeartPulse,
    name: 'PCOD / PCOS',
    desc: "Hormonal imbalances causing PCOD respond remarkably well to yoga. Our women's health protocol addresses root causes through targeted poses and breathing techniques.",
    practices: ['Supta Baddha Konasana', 'Viparita Karani', 'Bharadvajasana', 'Sarvangasana', 'Yoga Nidra'],
    duration: '60 min',
    results: 'Hormonal improvement in 8–16 weeks',
    color: 'from-pink-400 to-pink-500',
    shadow: 'shadow-pink-500/20',
  },
  {
    id: 'thyroid',
    icon: Activity,
    name: 'Thyroid Disorders',
    desc: 'Both hypo and hyperthyroid conditions benefit from specific yoga practices that stimulate the thyroid gland, improve metabolism, and regulate hormonal function.',
    practices: ['Sarvangasana', 'Halasana', 'Matsyasana', 'Ujjayi Pranayama', 'Neck exercises'],
    duration: '45 min',
    results: 'Thyroid function improvement in 12 weeks',
    color: 'from-teal-400 to-teal-500',
    shadow: 'shadow-teal-500/20',
  },
  {
    id: 'stress',
    icon: Brain,
    name: 'Stress & Anxiety',
    desc: 'Modern life stress depletes mental health. Our yoga-meditation protocol activates the parasympathetic nervous system, reducing cortisol levels and promoting deep calm.',
    practices: ['Shavasana', 'Yoga Nidra', 'Anulom Vilom', 'Bhramari', 'Meditation'],
    duration: '45 min',
    results: 'Significant stress reduction in 2–4 weeks',
    color: 'from-violet-400 to-violet-500',
    shadow: 'shadow-violet-500/20',
  },
  {
    id: 'depression',
    icon: Smile,
    name: 'Depression',
    desc: 'Yoga increases serotonin and GABA levels naturally. Backbends, inversions, and pranayama collectively combat depression and bring sustained emotional upliftment.',
    practices: ['Surya Namaskar', 'Ustrasana', 'Dhanurasana', 'Kapalbhati', 'Trataka meditation'],
    duration: '60 min',
    results: 'Mood improvement noticed in 4–6 weeks',
    color: 'from-indigo-400 to-indigo-500',
    shadow: 'shadow-indigo-500/20',
  },
  {
    id: 'obesity',
    icon: Scale,
    name: 'Obesity & Weight Loss',
    desc: 'A combination of dynamic yoga sequences, pranayama, and mindful eating guidance helps achieve sustainable weight management through increased metabolism and reduced cravings.',
    practices: ['Surya Namaskar', 'Kapalbhati', 'Power Yoga', 'Navasana', 'Ustrasana'],
    duration: '60 min',
    results: '4–8 kg weight loss in 3 months',
    color: 'from-amber-400 to-amber-500',
    shadow: 'shadow-amber-500/20',
  },
  {
    id: 'hypertension',
    icon: TrendingDown,
    name: 'Hypertension (BP)',
    desc: 'High blood pressure responds well to yoga\'s calming effect on the nervous system. Our hypertension protocol includes restorative poses, pranayama, and meditation to lower BP naturally.',
    practices: ['Shavasana', 'Anulom Vilom', 'Janu Sirsasana', 'Paschimottanasana', 'Yoga Nidra'],
    duration: '45 min',
    results: 'Blood pressure reduction in 4–8 weeks',
    color: 'from-red-400 to-red-500',
    shadow: 'shadow-red-500/20',
  },
];

export default function TherapyPage() {
  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-emerald-100 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-saffron-100/50 rounded-full blur-[80px] opacity-60 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-white text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-6">
            <HeartPulse size={14} />
            Yoga Therapy
          </span>
          <h1 className="font-playfair text-5xl lg:text-7xl font-bold mb-6 text-sacred-dark tracking-tight">
            Heal <span className="text-gradient-gold">Naturally</span>
          </h1>
          <p className="text-sacred-brown/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light">
            Ancient yogic science meeting modern health challenges — addressing chronic conditions at their root.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['No Side Effects', 'Personalized Program', 'Expert Guidance', 'Proven Results'].map((tag, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full bg-white border border-saffron-100 text-sacred-dark text-xs sm:text-sm font-bold shadow-sm">
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conditions Grid ── */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark mb-4">
              Conditions We <span className="text-gradient-gold">Help</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((cond) => (
              <div
                key={cond.id}
                id={cond.id}
                className={`bg-white rounded-[2.5rem] p-8 shadow-lg border border-saffron-50 hover:shadow-2xl ${cond.shadow} transition-all duration-300 hover:-translate-y-2 group flex flex-col`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cond.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform mb-6`}>
                  <cond.icon size={32} strokeWidth={1.5} />
                </div>
                
                <h2 className="font-playfair text-2xl font-bold text-sacred-dark mb-3 group-hover:text-saffron-600 transition-colors">{cond.name}</h2>
                <p className="text-sacred-brown/70 text-sm leading-relaxed mb-8 flex-grow">{cond.desc}</p>

                <div className="mb-8">
                  <p className="text-saffron-600 font-bold uppercase text-[10px] tracking-wider mb-3">Recommended Practices</p>
                  <div className="flex flex-wrap gap-2">
                    {cond.practices.map((p, i) => (
                      <span key={i} className="text-[11px] bg-saffron-50/50 text-sacred-brown/80 px-3 py-1.5 rounded-lg border border-saffron-100 font-medium">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-saffron-100 mt-auto">
                  <div className="flex items-center gap-2 text-sacred-dark text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-saffron-400" />
                    Time: {cond.duration} / Session
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Result: {cond.results}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Stepper ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark mb-4">
              How Yoga Therapy <span className="text-gradient-gold">Works</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-10 left-12 right-12 h-px bg-gradient-to-r from-saffron-100 via-saffron-500/40 to-saffron-100" />

            {[
              { icon: ClipboardList, title: 'Health Assessment', desc: 'Detailed consultation to understand your condition and health history' },
              { icon: Target, title: 'Custom Program', desc: 'Personalized yoga therapy plan designed specifically for your needs' },
              { icon: UserCheck, title: 'Regular Sessions', desc: 'Guided daily or weekly sessions with continuous expert monitoring' },
              { icon: LineChart, title: 'Track Progress', desc: 'Regular check-ins to adjust the program and celebrate your healing' },
            ].map((s, i) => (
              <div key={i} className="relative z-10 text-center group">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-saffron-100 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:border-saffron-400 group-hover:scale-110 transition-all duration-300">
                  <s.icon size={32} className="text-saffron-500" strokeWidth={1.5} />
                </div>
                <span className="text-saffron-400 font-bold text-[10px] tracking-widest uppercase mb-2 block">Step 0{i + 1}</span>
                <h3 className="font-playfair font-bold text-sacred-dark text-xl mb-3">{s.title}</h3>
                <p className="text-sacred-brown/60 text-sm font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation CTA ── */}
      <section className="py-24 bg-[#FAFAF8] relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-8">
            <HeartPulse size={24} className="text-emerald-500" />
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6 text-sacred-dark">
            Begin Your <span className="text-gradient-gold">Healing Journey</span>
          </h2>
          <p className="text-sacred-brown/70 text-lg mb-10 font-light">
            Book a free consultation with Guruji to discuss your health condition and discover how yoga therapy can help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sacred-dark text-white font-bold text-lg shadow-xl hover:scale-105 hover:bg-saffron-600 transition-all duration-300">
              Book Free Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
