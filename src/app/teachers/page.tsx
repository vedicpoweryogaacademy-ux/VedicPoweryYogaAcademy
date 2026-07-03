import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sun,
  Wind,
  Flame,
  Sparkles,
  Brain,
  HeartPulse,
  GraduationCap,
  Baby,
  Star,
  Award,
  CheckCircle2,
  ArrowRight
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
    { name: 'Suresh K.', text: 'Guruji is the most knowledgeable and humble teacher I have ever encountered. He tailors each session to individual needs.', rating: 5 },
    { name: 'Kavitha M.', text: 'My 10-year journey with Guruji has transformed not just my body but my entire life perspective. Truly a master.', rating: 5 },
    { name: 'Ramesh P.', text: 'The level of dedication and personal attention Guruji gives to every student is extraordinary. Worth every penny.', rating: 5 },
  ];

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-saffron-100 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-vermillion-100/50 rounded-full blur-[80px] opacity-60 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-200 bg-white text-saffron-600 text-xs font-semibold uppercase tracking-widest mb-6">
            <Award size={14} />
            Our Teachers
          </span>
          <h1 className="font-playfair text-5xl lg:text-7xl font-bold mb-6 text-sacred-dark tracking-tight">
            Learn From <span className="text-gradient-gold">The Masters</span>
          </h1>
          <p className="text-sacred-brown/70 text-lg sm:text-xl max-w-2xl mx-auto font-light">
            Expert, certified yoga instructors dedicated to your transformation.
          </p>
        </div>
      </section>

      {/* ── Main Teacher: Guruji ── */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Photos (Bento Style Grid) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-lg col-span-1 border border-saffron-50">
                <Image src="/images/pose-warrior.jpg" alt="Guruji warrior pose" fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-lg border border-saffron-50">
                  <Image src="/images/pose-sunset.jpg" alt="Guruji meditating" fill className="object-cover" />
                </div>
                <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-lg border border-saffron-50 bg-saffron-100 p-6 flex flex-col justify-center items-center text-center">
                  <Award size={40} className="text-saffron-500 mb-2" strokeWidth={1.5} />
                  <p className="font-playfair font-bold text-sacred-dark text-xl">Head Teacher</p>
                  <p className="text-saffron-600 text-xs uppercase tracking-widest font-bold mt-1">& Founder</p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-saffron-100">
              <h2 className="font-playfair text-4xl font-bold text-sacred-dark mb-1">
                Shri Manjunath Sampath
              </h2>
              <h3 className="font-playfair text-2xl text-gradient-gold font-bold mb-3">Guruji</h3>
              <p className="text-sacred-brown/50 font-bold text-xs mb-8 uppercase tracking-widest">
                Yoga Expert · Educator · Trainer · Healer
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { val: '26+', label: 'Years Experience' },
                  { val: '1000+', label: 'Students Trained' },
                  { val: '200+', label: 'Teachers Certified' },
                  { val: '5★', label: 'Google Rating' },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#FAFAF8] rounded-2xl p-4 text-center border border-saffron-50">
                    <p className="font-playfair text-3xl font-bold text-saffron-500">{stat.val}</p>
                    <p className="text-sacred-brown/60 text-[10px] uppercase font-bold tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-sacred-brown/70 leading-relaxed mb-8 text-sm font-light">
                Shri Manjunath Sampath Guruji is a renowned yoga expert with 26 years of
                experience in yoga education, teacher training, holistic wellness, Agnihotra,
                and Pranic Healing. As the Karnataka State Yoga Pramukh for Vidya Bharati, he
                has shaped yoga education in schools across Karnataka.
              </p>

              <div className="mb-8">
                <p className="text-sacred-dark font-bold text-sm uppercase tracking-wider mb-4">Key Credentials</p>
                <ul className="space-y-3">
                  {credentials.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-sacred-brown/70 font-medium">
                      <CheckCircle2 size={18} className="text-saffron-500 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sacred-dark font-bold text-sm uppercase tracking-wider mb-4">Specializations</p>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((s, i) => (
                    <span key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAFAF8] border border-saffron-100 text-sacred-dark text-xs font-bold">
                      <s.icon size={14} className="text-saffron-500" strokeWidth={2} /> 
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Student Reviews ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark">
              What Students <span className="text-gradient-gold">Say</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-[#FAFAF8] rounded-[2rem] p-8 shadow-sm border border-saffron-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-1 text-saffron-500 mb-4">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sacred-brown/70 text-sm italic leading-relaxed mb-6 font-light">&ldquo;{r.text}&rdquo;</p>
                <p className="font-bold text-sacred-dark text-sm uppercase tracking-wider">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join as teacher ── */}
      <section className="py-24 bg-[#FAFAF8] text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-saffron-100">
            <GraduationCap size={24} className="text-saffron-500" />
          </div>
          <h2 className="font-playfair text-3xl font-bold mb-4 text-sacred-dark">Become a Certified Yoga Teacher</h2>
          <p className="text-sacred-brown/70 mb-8 font-light">Join our Teacher Training program and get certified under Guruji&apos;s expert guidance.</p>
          <Link href="/programs#teacher-training" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sacred-dark text-white font-bold text-sm shadow-xl hover:bg-saffron-500 hover:scale-105 transition-all duration-300">
            View Training Program
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
