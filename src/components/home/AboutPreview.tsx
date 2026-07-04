import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, Wind, Sparkles, HeartPulse } from 'lucide-react';

export default function AboutPreview() {
  const features = [
    { icon: Leaf, text: 'Ashtanga Yoga' },
    { icon: Wind, text: 'Pranayama' },
    { icon: Sparkles, text: 'Meditation & Dhyana' },
    { icon: HeartPulse, text: 'Yoga Therapy' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ── IMAGE SECTION ── */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-video max-w-2xl mx-auto lg:mx-0">
              <Image
                src="/images/IMG_1567.JPG.jpeg"
                alt="Guruji in Warrior Pose at Sunset"
                fill
                className="object-cover scale-[1.02]"
                style={{ objectPosition: 'center 30%' }}
              />
              {/* Top edge mask — hides the dark letterbox band in the source image */}
              <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-playfair text-2xl font-bold">Shri Manjunath Sampath</p>
                <p className="text-white/70 text-sm">Founder & Head Teacher</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-2xl border border-saffron-100 flex flex-col items-center justify-center animate-float">
              <p className="font-playfair text-4xl font-bold text-gradient-gold">26+</p>
              <p className="text-xs font-semibold text-sacred-dark uppercase tracking-wider mt-1 text-center">
                Years of<br/>Excellence
              </p>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[radial-gradient(rgba(245,166,35,0.4)_2px,transparent_2px)] [background-size:16px_16px] -z-10 opacity-50" />
          </div>

          {/* ── CONTENT SECTION ── */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/20 bg-saffron-50 text-saffron-700 text-xs font-semibold uppercase tracking-widest mb-6">
              <Sparkles size={14} className="text-saffron-500" />
              About The Academy
            </div>
            
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark mb-6 leading-tight">
              A Sacred Space for
              <span className="text-gradient-gold block mt-2">Vedic Wisdom</span>
            </h2>
            
            <div className="space-y-5 text-sacred-brown/70 text-lg leading-relaxed mb-8">
              <p>
                Vedic Power Yoga Academy is a <strong className="text-sacred-dark font-medium">Ministry of AYUSH recognized yoga kendra</strong> and a
                Registered Associate Centre of the Indian Yoga Association (IYA), New Delhi.
              </p>
              <p>
                Founded by Shri Manjunath Sampath Guruji — a renowned yoga expert with 26 years
                of experience — the academy offers scientific and traditional Ashtanga Yoga
                classes that prevent mental tension and provide relief from physical ailments.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sacred-dark">
                  <div className="w-10 h-10 rounded-full bg-saffron-50 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-saffron-500" />
                  </div>
                  <span className="font-bold text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sacred-dark text-white font-bold text-base shadow-lg hover:bg-saffron-500 hover:shadow-saffron-500/30 hover:scale-105 transition-all duration-300"
            >
              Discover Our Story
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
