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
    'Meet Shri Manjunath Sampath Guruji — Founder of Vedic Power Yoga Academy, Bengaluru. 26 years of yoga expertise, Karnataka State Yoga Pramukh, Ministry of AYUSH recognized trainer.',
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
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-sacred-dark">
        {/* Background collage of images */}
        <div className="absolute inset-0 grid grid-cols-3 opacity-40">
          <div className="relative col-span-1">
            <Image src="/images/pose-warrior.jpg" alt="" fill className="object-cover object-center" />
          </div>
          <div className="relative col-span-1">
            <Image src="/images/award-ayush.jpg" alt="" fill className="object-cover object-top" />
          </div>
          <div className="relative col-span-1">
            <Image src="/images/pose-sunset.jpg" alt="" fill className="object-cover object-center" />
          </div>
        </div>
        {/* Strong gradient so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-sacred-dark/60 via-sacred-dark/50 to-sacred-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-sacred-dark/80 via-transparent to-sacred-dark/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/30 bg-saffron-500/10 text-saffron-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-saffron-400 animate-pulse" />
              Founder & Head Teacher
            </div>
            <h1 className="font-playfair font-bold text-white leading-tight">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">Shri Manjunath</span>
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl"
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
            <p className="mt-4 text-white/50 text-base tracking-widest uppercase font-medium">
              Yoga Expert · Educator · Trainer · Healer
            </p>
          </div>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* Image cluster */}
            <div className="lg:col-span-2 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
                <Image
                  src="/images/pose-sunset.jpg"
                  alt="Guruji in meditation"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sacred-dark/50 to-transparent" />
              </div>
              {/* Floating secondary image */}
              <div className="absolute -bottom-8 -right-6 w-36 h-36 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
                <Image src="/images/award-ayush.jpg" alt="Award ceremony" fill className="object-cover" />
              </div>
              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-saffron-500 to-vermillion-500 flex flex-col items-center justify-center shadow-lg text-white">
                <span className="font-playfair text-2xl font-bold leading-none">26</span>
                <span className="text-xs font-semibold leading-tight text-center">Years<br/>Expert</span>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 pt-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-saffron-50 border border-saffron-200 text-saffron-700 text-xs font-semibold uppercase tracking-widest mb-6">
                <BookOpen size={12} />
                Biography
              </div>
              <h2 className="font-playfair text-4xl font-bold text-sacred-dark mb-6 leading-tight">
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
      <section className="py-24 bg-sacred-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-saffron-500/20 bg-saffron-500/10 text-saffron-300 text-xs font-semibold uppercase tracking-widest mb-4">
              <Milestone size={12} />
              The Journey
            </div>
            <h2 className="font-playfair text-4xl font-bold text-white">
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
            <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-saffron-500/20 to-transparent" />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-8 group">
                  {/* Year bubble */}
                  <div className="flex-shrink-0 w-[6.5rem] flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-saffron-500 to-vermillion-500 flex items-center justify-center shadow-lg group-hover:shadow-saffron-500/30 transition-shadow z-10 relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    </div>
                    <span className="text-saffron-400 text-xs font-bold mt-2 tracking-wide">{item.year}</span>
                  </div>

                  {/* Event card */}
                  <div className="flex-1 pb-6">
                    <div className="bg-white/5 rounded-xl p-5 border border-white/8 hover:border-saffron-500/20 hover:bg-white/8 transition-all duration-300">
                      <p className="text-white/70 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
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
