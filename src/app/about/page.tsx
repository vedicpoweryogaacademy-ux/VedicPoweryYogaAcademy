import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BookOpen,
  Flame,
  Globe,
  Heart,
  Layers,
  MapPin,
  Milestone,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';


export const metadata: Metadata = {
  title: 'About Guruji | Shri Manjunath Sampath | Vedic Power Yoga Academy',
  description:
    'Learn about Shri Manjunath Sampath Guruji, founder of Vedic Power Yoga Academy. 26+ years of experience in Ashtanga Yoga, Yoga Therapy, and Teacher Training.',
  keywords: ['Yoga for Beginners', 'Weight Loss', 'Teacher Training', 'Yoga Therapy', 'Meditation', 'Pranayama', 'Events & Workshops', 'Vedic Power Yoga'],
};

const credentials = [
  { Icon: Globe, title: 'All India Vidya Bharati Yoga Committee', sub: 'National Committee Member' },
  { Icon: MapPin, title: 'Karnataka State Yoga Pramukh', sub: 'Vidya Bharati — Karnataka Wing' },
  { Icon: BookOpen, title: 'Yoga Textbook Content Writer', sub: 'Vidya Bharati national curriculum' },
  { Icon: Flame, title: 'Agnihotra Master Trainer', sub: 'Certified 2018 — Vedic fire ceremony' },
  { Icon: Sparkles, title: 'Certified Pranic Healer', sub: 'Advanced energy healing, 2025' },
  { Icon: ShieldCheck, title: 'Indian Yoga Association', sub: 'Lifetime Member, IYA New Delhi' },
  { Icon: Layers, title: 'Ministry of AYUSH', sub: 'Recognized Yoga Kendra Instructor' },
  { Icon: Globe, title: 'International Yoga Day 2026', sub: 'Program Organizer — Karnataka, AYUSH' },
];

const timeline = [
  { year: '1998', event: 'Began dedicated yoga practice and teaching across Bengaluru schools and communities.' },
  { year: '2003', event: 'Joined Vidya Bharati as a yoga instructor, training teachers across Karnataka.' },
  { year: '2008', event: 'Appointed Karnataka State Yoga Pramukh — shaped yoga curriculum for hundreds of schools.' },
  { year: '2012', event: 'Authored yoga content for Vidya Bharati national textbooks used across India.' },
  { year: '2015', event: 'Became a Lifetime Member of the Indian Yoga Association, New Delhi.' },
  { year: '2018', event: 'Certified as Agnihotra Master Trainer — integrated Vedic fire therapy into holistic healing.' },
  { year: '2023', event: 'Founded Vedic Power Yoga Academy as a full-fledged yoga institution.' },
  { year: '2025', event: 'Certified Pranic Healer — expanded offerings to include advanced energy healing.' },
  { year: '2026', event: 'Organized the 12th International Yoga Day program under Karnataka Dept. of AYUSH.' },
];

const stats = [
  { value: '26+', label: 'Years Teaching', Icon: Star },
  { value: '1000+', label: 'Students Trained', Icon: Users },
  { value: '200+', label: 'Teachers Certified', Icon: Award },
  { value: '5', label: 'Major Awards', Icon: Trophy },
];

const specializations = [
  'Ashtanga Yoga',
  'Hatha Yoga',
  'Pranayama',
  'Dhyana & Meditation',
  'Yoga Therapy',
  'Agnihotra',
  'Pranic Healing',
  'Teacher Training',
  'Kids\' Yoga',
  'Corporate Wellness',
  'Yoga Nidra',
  'Vedic Philosophy',
];

export default function AboutPage() {
  return (
    <div className="bg-sacred-cream">

      {/* ── Hero Banner ── */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-sacred-cream">
        {/* Background decorative elements */}
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(245,166,35,0.06)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-200 bg-white text-saffron-600 text-xs font-semibold uppercase tracking-widest mb-8 shadow-sm">
            <Sparkles size={14} className="text-saffron-500" />
            Founder & Head Teacher
          </div>
          
          <h1 className="font-playfair font-bold text-sacred-dark leading-tight max-w-4xl mx-auto mb-6">
            <span className="block text-5xl sm:text-6xl lg:text-7xl mb-2">Shri Manjunath</span>
            <span
              className="block text-5xl sm:text-6xl lg:text-7xl pb-2"
              style={{
                background: 'linear-gradient(135deg, #F5A623 0%, #D4500A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Sampath Guruji
            </span>
          </h1>
          
          <p className="text-sacred-brown/70 text-sm sm:text-base tracking-[0.2em] uppercase font-bold flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            Yoga Expert <span className="text-saffron-300">✦</span> Educator <span className="text-saffron-300">✦</span> Trainer <span className="text-saffron-300">✦</span> Healer
          </p>
        </div>
      </section>

      {/* ── Stat Bar ── */}
      <section className="bg-sacred-dark border-b border-saffron-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-saffron-500/10">
            {stats.map(({ value, label, Icon }) => (
              <div key={label} className="flex items-center gap-4 px-6 py-6">
                <Icon size={28} className="text-saffron-400 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-playfair text-3xl font-bold text-white">{value}</p>
                  <p className="text-white/40 text-xs mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Profile Section ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image cluster */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/images/IMG_1855.PNG"
                  alt="Guruji in meditation"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              {/* Experience badge */}
              <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-gradient-to-br from-saffron-500 to-vermillion-500 flex flex-col items-center justify-center shadow-2xl text-white border-4 border-white">
                <span className="font-playfair text-3xl font-bold leading-none">26+</span>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest leading-tight text-center mt-1">Years<br/>Expert</span>
              </div>
            </div>

            {/* Content */}
            <div className="pt-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron-50 border border-saffron-200 text-saffron-700 text-xs font-semibold uppercase tracking-widest mb-6">
                <BookOpen size={12} />
                Biography
              </div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark mb-8 leading-tight">
                A Life Dedicated to<br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #F5A623, #D4500A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  the Yoga Tradition
                </span>
              </h2>

              <div className="space-y-4 text-sacred-brown/70 text-base leading-relaxed">
                <p>
                  Shri Manjunath Sampath Guruji is a renowned yoga expert with over{' '}
                  <strong className="text-sacred-dark font-semibold">26 years of dedicated experience</strong>{' '}
                  in yoga education, teacher training, holistic wellness, Agnihotra, and Pranic Healing. He has
                  devoted his life to spreading the transformative benefits of authentic Vedic yoga.
                </p>
                <p>
                  As the <strong className="text-sacred-dark font-semibold">Karnataka State Yoga Pramukh</strong>{' '}
                  for Vidya Bharati — the education wing of the Rashtriya Swayamsevak Sangh — Guruji has shaped
                  yoga education in hundreds of schools across Karnataka, personally training over 200 teachers.
                </p>
                <p>
                  His approach uniquely blends ancient Vedic wisdom with modern scientific understanding of the
                  human body. Every class under Guruji is a carefully crafted experience that goes far beyond
                  physical postures — addressing breath, mind, emotions, and spiritual growth simultaneously.
                </p>
                <p>
                  In 2023, he formally established{' '}
                  <strong className="text-sacred-dark font-semibold">Vedic Power Yoga Academy</strong> — a
                  Ministry of AYUSH recognized yoga kendra and Registered Associate Centre of the Indian Yoga
                  Association, New Delhi — to bring authentic yoga education to all walks of life in Bengaluru.
                </p>
              </div>

              {/* Specializations */}
              <div className="mt-8">
                <p className="text-xs font-semibold text-saffron-600 uppercase tracking-widest mb-3">Specializations</p>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-saffron-50 text-sacred-dark border border-saffron-100 hover:border-saffron-300 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold text-sm shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #F5A623, #D4500A)' }}
                >
                  Book a Class with Guruji
                  <Zap size={14} />
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sacred-dark font-semibold text-sm border border-saffron-200 hover:border-saffron-400 hover:bg-saffron-50 transition-all duration-300"
                >
                  View All Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials Grid ── */}
      <section className="py-24 bg-sacred-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron-100 border border-saffron-200 text-saffron-700 text-xs font-semibold uppercase tracking-widest mb-4">
              <Award size={12} />
              Credentials & Affiliations
            </div>
            <h2 className="font-playfair text-4xl font-bold text-sacred-dark">
              Recognized. Certified.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #F5A623, #D4500A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Trusted.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {credentials.map(({ Icon, title, sub }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-5 border border-saffron-100 hover:border-saffron-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-saffron-50 border border-saffron-100 flex items-center justify-center mb-4 group-hover:bg-saffron-100 transition-colors">
                  <Icon size={20} className="text-saffron-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-sacred-dark text-sm leading-snug mb-1">{title}</h3>
                <p className="text-sacred-brown/50 text-xs leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 lg:py-32 bg-sacred-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-saffron-500/20 bg-saffron-500/10 text-saffron-300 text-xs font-semibold uppercase tracking-widest mb-4">
              <Milestone size={12} />
              The Journey
            </div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white">
              Career{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #F5A623, #D4500A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Milestones
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical spine */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-saffron-500/20 to-transparent md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row gap-8 items-start group ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Event card - half width on desktop */}
                  <div className={`flex-1 w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 text-left md:text-right'}`}>
                    <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-saffron-500/30 hover:bg-white/10 transition-all duration-300">
                      <p className="text-white/80 text-base md:text-lg leading-relaxed">{item.event}</p>
                    </div>
                  </div>

                  {/* Year bubble - center on desktop */}
                  <div className="absolute left-6 md:relative md:left-auto top-6 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 md:translate-x-0 flex-shrink-0 w-[6.5rem] flex flex-col items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-sacred-dark border-2 border-saffron-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(245,166,35,0.15)] group-hover:border-saffron-500 group-hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] transition-all duration-300">
                      <div className="w-3 h-3 rounded-full bg-saffron-400 group-hover:bg-saffron-300 transition-colors" />
                    </div>
                    <span className="text-saffron-400 text-sm font-bold mt-4 tracking-widest">{item.year}</span>
                  </div>

                  {/* Empty spacer for opposite side on desktop */}
                  <div className="hidden md:block flex-1 w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Awards Gallery ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron-50 border border-saffron-200 text-saffron-700 text-xs font-semibold uppercase tracking-widest mb-4">
              <Trophy size={12} />
              Awards & Public Events
            </div>
            <h2 className="font-playfair text-4xl font-bold text-sacred-dark">
              Honored for{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #F5A623, #D4500A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Excellence
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/images/award-ayush.jpg', year: '2026', title: 'AYUSH Dept. Recognition Award', sub: 'Government of Karnataka — Dept. of AYUSH', span: 'md:col-span-2 lg:col-span-1' },
              { src: '/images/event-idy2026.jpg', year: '21 June 2026', title: '12th International Yoga Day', sub: 'Program Organizer — Karnataka Dept. of AYUSH, Bengaluru', span: '' },
              { src: '/images/pose-warrior.jpg', year: '2023', title: 'Academy Inauguration', sub: 'Vedic Power Yoga Academy — Officially Established', span: '' },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative rounded-3xl overflow-hidden aspect-video group shadow-lg hover:shadow-2xl transition-shadow duration-300 ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sacred-dark via-sacred-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-saffron-400 text-xs font-bold uppercase tracking-widest">{item.year}</span>
                  <h3 className="font-playfair text-white text-lg font-bold mt-1">{item.title}</h3>
                  <p className="text-white/60 text-xs mt-1">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teaching Philosophy Quote ── */}
      <section className="py-20 bg-sacred-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart size={32} className="text-saffron-400 mx-auto mb-8" strokeWidth={1} />
          <blockquote className="font-playfair text-3xl sm:text-4xl font-bold text-sacred-dark leading-tight">
            &ldquo;Yoga helps to develop{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F5A623, #D4500A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              concentration
            </span>
            &rdquo;
          </blockquote>
          <p className="mt-6 text-sacred-brown/50 text-sm font-medium tracking-widest uppercase">
            — Shri Manjunath Sampath Guruji
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base shadow-lg hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #F5A623, #D4500A)' }}
            >
              Train Under Guruji
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
