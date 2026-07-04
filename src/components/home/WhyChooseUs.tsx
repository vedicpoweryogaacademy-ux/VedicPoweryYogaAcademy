import { ShieldCheck, Award, Dna, Users, HeartPulse, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Ministry of AYUSH Recognized',
      desc: 'Officially recognized yoga kendra by the Government of India Ministry of AYUSH.',
    },
    {
      icon: Award,
      title: '26+ Years of Expertise',
      desc: 'Founded by Shri Manjunath Sampath Guruji with decades of authentic yoga teaching experience.',
    },
    {
      icon: Dna,
      title: 'Scientific & Traditional',
      desc: 'Blending modern science with ancient Vedic wisdom for holistic wellness and healing.',
    },
    {
      icon: Users,
      title: 'For All Age Groups',
      desc: 'Specialized programs for children, women, seniors, corporates, and beginners.',
    },
    {
      icon: HeartPulse,
      title: 'Yoga Therapy',
      desc: 'Dedicated therapy classes for diabetes, back pain, PCOD, thyroid, stress and more.',
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      desc: 'Six daily batches — morning and evening — to fit your busy schedule.',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-saffron-500/10 blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-vermillion-500/10 blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/20 bg-saffron-50 text-saffron-600 text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <Award size={14} />
            Why Choose Us
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark mb-4">
            The <span className="text-gradient-gold">Vedic Difference</span>
          </h2>
          <p className="text-sacred-brown/70 text-lg max-w-xl mx-auto font-light">
            What makes Vedic Power Yoga Academy the preferred destination for authentic yoga in Bengaluru
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 border border-saffron-50 hover:border-saffron-500/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-saffron-50 border border-saffron-100 flex items-center justify-center mb-6 group-hover:bg-saffron-100 group-hover:scale-110 transition-all duration-300">
                <reason.icon size={28} className="text-saffron-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-sacred-dark mb-3">
                {reason.title}
              </h3>
              <p className="text-sacred-brown/70 text-sm leading-relaxed font-light">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
