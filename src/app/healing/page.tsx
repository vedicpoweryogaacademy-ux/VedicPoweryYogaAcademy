'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useCallback } from 'react';
import { ArrowRight, Phone, Clock, CheckCircle2, Sparkles } from 'lucide-react';

const therapies = [
  {
    id: 'pranic',
    name: 'Pranic Healing',
    tagline: 'Energy Cleansing & Restoration',
    icon: '✦',
    gradient: 'from-violet-500 to-purple-600',
    soft: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-600',
    ring: 'ring-violet-400',
    image: '/images/therapy-pranic.png',
    shortDesc: 'Scan and cleanse your aura to restore life energy, balance chakras, and unlock the body\'s natural healing potential.',
    benefits: ['Chakra balancing', 'Stress relief', 'Immunity boost', 'Natural healing'],
    duration: '45 – 60 min',
  },
  {
    id: 'sound',
    name: 'Sound Healing',
    tagline: 'Vibrational Harmony & Inner Peace',
    icon: '◉',
    gradient: 'from-amber-400 to-orange-500',
    soft: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-600',
    ring: 'ring-amber-400',
    image: '/images/therapy-sound.png',
    shortDesc: 'Tibetan singing bowls emit therapeutic frequencies that dissolve tension, calm the nervous system, and restore deep cellular harmony.',
    benefits: ['Deep relaxation', 'Better sleep', 'Pain relief', 'Mental clarity'],
    duration: '60 min',
  },
  {
    id: 'kansa',
    name: 'Kansa Thali Massage',
    tagline: 'Ancient Ayurvedic Foot Therapy',
    icon: '◎',
    gradient: 'from-yellow-400 to-amber-500',
    soft: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-600',
    ring: 'ring-yellow-400',
    image: '/images/therapy-kansa.png',
    shortDesc: 'A sacred bronze Kansa bowl massaged on the feet draws out body heat, balances the three doshas, and induces profound calm.',
    benefits: ['Dosha balance', 'Better sleep', 'Headache relief', 'Detox & grounding'],
    duration: '30 – 45 min',
  },
  {
    id: 'agnihotra',
    name: 'Agnihotra / Homa',
    tagline: 'Sacred Vedic Fire Ritual',
    icon: '⬡',
    gradient: 'from-orange-500 to-red-500',
    soft: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-600',
    ring: 'ring-orange-400',
    image: '/images/therapy-agnihotra.png',
    shortDesc: 'An ancient sunrise/sunset fire ritual using copper pyramid, ghee, and mantras — purifying air, mind, and creating a powerful healing energy field.',
    benefits: ['Air purification', 'Stress reduction', 'Respiratory health', 'Spiritual upliftment'],
    duration: '30 min',
  },
  {
    id: 'body',
    name: 'Body Therapy',
    tagline: 'Therapeutic Touch & Deep Healing',
    icon: '◈',
    gradient: 'from-teal-500 to-emerald-500',
    soft: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-600',
    ring: 'ring-teal-400',
    image: '/images/therapy-body.png',
    shortDesc: 'A personalized hands-on treatment blending massage, myofascial release, and somatic therapy to dissolve pain, tension, and emotional blockages.',
    benefits: ['Pain relief', 'Posture correction', 'Emotional release', 'Body awareness'],
    duration: '60 – 90 min',
  },
  {
    id: 'bodyfy',
    name: 'Bodyfy Healing',
    tagline: 'All-in-One Holistic Experience',
    icon: '❋',
    gradient: 'from-saffron-500 to-vermillion-500',
    soft: 'bg-saffron-50',
    border: 'border-saffron-200',
    text: 'text-saffron-600',
    ring: 'ring-saffron-400',
    image: '/images/therapy-bodyfy.png',
    shortDesc: 'Our signature fusion session weaving energy healing, sound, touch therapy, and Vedic ritual into one complete mind-body-soul transformation.',
    benefits: ['Full restoration', 'Multi-modal healing', 'Deep detox', 'Lasting energy'],
    duration: '90 – 120 min',
  },
];

export default function HealingPage() {
  const [activeId, setActiveId] = useState(therapies[0].id);
  const [fading, setFading] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);
  const active = therapies.find((t) => t.id === activeId)!;
  const idx = therapies.findIndex((t) => t.id === activeId);

  const switchTherapy = useCallback((id: string) => {
    if (id === activeId) return;
    setFading(true);
    setTimeout(() => {
      setActiveId(id);
      setFading(false);
    }, 200);
  }, [activeId]);

  return (
    <div className="bg-[#FAFAF8] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-saffron-100 rounded-full blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-violet-100/50 rounded-full blur-[100px] opacity-40 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-200 bg-white text-saffron-600 text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles size={13} />
            Holistic Healing Centre
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-sacred-dark mb-5 leading-tight">
            Healing <span className="text-gradient-gold">Therapies</span>
          </h1>
          <p className="text-sacred-brown/65 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Six ancient and modern healing arts — each crafted to restore balance, dissolve pain, and awaken inner vitality.
          </p>
        </div>
      </section>

      {/* ── MOBILE THERAPY PILLS ── */}
      <div className="lg:hidden overflow-x-auto py-4 px-4 sm:px-6 -mb-2">
        <div className="flex gap-2 w-max">
          {therapies.map((t) => (
            <button
              key={t.id}
              onClick={() => switchTherapy(t.id)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs font-bold border transition-all duration-200 ${
                t.id === activeId
                  ? `bg-gradient-to-r ${t.gradient} text-white border-transparent shadow-md`
                  : 'bg-white border-saffron-100 text-sacred-dark/70 hover:border-saffron-300'
              }`}
            >
              <span className="mr-1.5">{t.icon}</span>{t.name}
            </button>
          ))}
        </div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <section className="py-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

            {/* ── SIDEBAR ── */}
            <aside className="hidden lg:block w-[270px] xl:w-[290px] flex-shrink-0 sticky top-24">
              <div className="bg-white rounded-[1.75rem] border border-saffron-100 shadow-sm overflow-hidden">
                <div className="px-5 pt-5 pb-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-sacred-brown/40">Choose Therapy</p>
                </div>
                <nav className="px-2 pb-3 space-y-0.5">
                  {therapies.map((t, i) => {
                    const isActive = t.id === activeId;
                    return (
                      <button
                        key={t.id}
                        onClick={() => switchTherapy(t.id)}
                        className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                          isActive
                            ? `${t.soft} ${t.text} font-bold border ${t.border}`
                            : 'text-sacred-dark/65 hover:bg-saffron-50/70 font-medium border border-transparent'
                        }`}
                      >
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 bg-gradient-to-br ${t.gradient} text-white shadow-sm`}>
                          {t.icon}
                        </span>
                        <span className="text-sm leading-tight">{t.name}</span>
                        {isActive && (
                          <span className={`ml-auto w-1.5 h-5 rounded-full bg-gradient-to-b ${t.gradient}`} />
                        )}
                      </button>
                    );
                  })}
                </nav>
                {/* Progress indicator */}
                <div className="px-5 py-4 border-t border-saffron-50">
                  <div className="flex items-center justify-between text-[10px] text-sacred-brown/40 font-semibold uppercase tracking-wider mb-2">
                    <span>{idx + 1} of {therapies.length}</span>
                    <span>Therapies</span>
                  </div>
                  <div className="h-1 bg-saffron-50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-saffron-400 to-vermillion-500 rounded-full transition-all duration-500"
                      style={{ width: `${((idx + 1) / therapies.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* ── DETAIL PANEL ── */}
            <div className="flex-1 min-w-0" ref={detailRef} style={{ scrollMarginTop: '6rem' }}>
              <div key={active.id} className={`bg-white rounded-[2.5rem] border border-saffron-100 shadow-sm overflow-hidden transition-opacity duration-200 ${fading ? 'opacity-0' : 'opacity-100'}`}>

                {/* ── Image Banner ── */}
                <div className="relative w-full h-56 sm:h-72 lg:h-[380px] overflow-hidden">
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                    className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Top pill */}
                  <div className="absolute top-5 left-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-bold uppercase tracking-wider`}>
                      {active.icon} {active.tagline}
                    </span>
                  </div>

                  {/* Bottom title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                          {active.name}
                        </h2>
                      </div>
                      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${active.gradient} flex items-center justify-center text-white text-2xl shadow-xl`}>
                        {active.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Content Body ── */}
                <div className="p-6 sm:p-8 lg:p-10">

                  {/* Short Description */}
                  <p className="text-sacred-brown/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                    {active.shortDesc}
                  </p>

                  {/* 3-col info strip */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {/* Duration */}
                    <div className={`flex items-center gap-3 ${active.soft} rounded-2xl px-5 py-4 border ${active.border}`}>
                      <Clock size={18} className={active.text} />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-sacred-brown/50">Duration</p>
                        <p className={`font-bold text-sm ${active.text}`}>{active.duration}</p>
                      </div>
                    </div>
                    {/* Mode */}
                    <div className="flex items-center gap-3 bg-saffron-50 rounded-2xl px-5 py-4 border border-saffron-100">
                      <CheckCircle2 size={18} className="text-saffron-500" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-sacred-brown/50">Mode</p>
                        <p className="font-bold text-sm text-sacred-dark">In-Person</p>
                      </div>
                    </div>
                    {/* Expert */}
                    <div className="flex items-center gap-3 bg-emerald-50 rounded-2xl px-5 py-4 border border-emerald-100">
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-sacred-brown/50">Guided by</p>
                        <p className="font-bold text-sm text-sacred-dark">Certified Expert</p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <p className="text-[11px] font-black uppercase tracking-[0.15em] text-sacred-brown/40 mb-4">Key Benefits</p>
                    <div className="flex flex-wrap gap-2.5">
                      {active.benefits.map((b, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${active.soft} ${active.text} border ${active.border}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${active.gradient}`} />
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Row */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-saffron-50">
                    <Link
                      href="/contact"
                      className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 bg-gradient-to-r ${active.gradient}`}
                    >
                      Book a Session
                      <ArrowRight size={16} />
                    </Link>
                    <a
                      href="tel:+918050886649"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm border border-saffron-200 bg-white text-sacred-dark hover:border-saffron-400 hover:bg-saffron-50 transition-all duration-300"
                    >
                      <Phone size={15} />
                      Call to Enquire
                    </a>
                  </div>
                </div>
              </div>

              {/* ── OTHER THERAPIES GRID ── */}
              <div className="mt-6">
                <p className="text-[11px] font-black uppercase tracking-[0.15em] text-sacred-brown/40 mb-3 px-1">Other Therapies</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3">
                  {therapies
                    .filter((t) => t.id !== activeId)
                    .map((t) => (
                      <button
                        key={t.id}
                        onClick={() => switchTherapy(t.id)}
                        className="group relative bg-white rounded-2xl border border-saffron-50 overflow-hidden hover:border-saffron-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 text-left"
                      >
                        {/* Thumb image */}
                        <div className="relative h-28 sm:h-24 overflow-hidden">
                          <Image src={t.image} alt={t.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 20vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`} />
                          <span className={`absolute bottom-2 left-2 w-6 h-6 rounded-lg bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs shadow-md`}>
                            {t.icon}
                          </span>
                        </div>
                        <div className="p-3">
                          <p className="text-sacred-dark font-bold text-xs leading-snug group-hover:text-saffron-600 transition-colors">{t.name}</p>
                          <p className="text-sacred-brown/40 text-[10px] mt-0.5 truncate">{t.tagline}</p>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 bg-white border-t border-saffron-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saffron-500/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-xl mx-auto px-4 text-center relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-saffron-400 to-vermillion-500 flex items-center justify-center text-white text-2xl shadow-lg mx-auto mb-6">✦</div>
          <h2 className="font-playfair text-4xl font-bold text-sacred-dark mb-4">
            Not Sure Where to <span className="text-gradient-gold">Begin?</span>
          </h2>
          <p className="text-sacred-brown/65 text-base mb-8 font-light leading-relaxed">
            Our experts will guide you to the right therapy for your body, mind, and goals — completely free.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-sacred-dark text-white font-bold text-sm shadow-xl hover:bg-saffron-600 hover:scale-105 transition-all duration-300"
          >
            Get Free Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
