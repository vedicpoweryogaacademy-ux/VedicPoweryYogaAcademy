import { Clock, Users, BookOpen, Trophy, Calendar, Heart } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { value: '26+', label: 'Years Experience', icon: Clock, desc: 'Dedicated to authentic yoga since 1998' },
    { value: '1000+', label: 'Students Trained', icon: Users, desc: 'Lives transformed across age groups' },
    { value: '12+', label: 'Yoga Programs', icon: BookOpen, desc: 'Specialized courses for every need' },
    { value: '5', label: 'Major Awards', icon: Trophy, desc: 'Government & national recognitions' },
    { value: '6', label: 'Batches Daily', icon: Calendar, desc: 'Morning & evening flexible timings' },
    { value: '100%', label: 'Holistic Focus', icon: Heart, desc: 'Mind, body and spiritual wellness' },
  ];

  return (
    <section className="py-24 bg-sacred-cream relative overflow-hidden">
      {/* Background mandala decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-saffron-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/20 bg-saffron-500/10 text-saffron-700 text-xs font-semibold uppercase tracking-widest mb-4">
            <Trophy size={14} className="text-saffron-500" />
            Our Achievements
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark mt-2 mb-4">
            Numbers That <span className="text-gradient-gold">Speak</span>
          </h2>
          <p className="text-sacred-brown/60 text-lg max-w-xl mx-auto">
            Two decades of dedicated service to authentic yoga education and holistic healing
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 text-center shadow-[0_4px_20px_rgba(26,10,0,0.03)] hover:shadow-sacred border border-saffron-500/10 hover:border-saffron-500/30 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-saffron-50 flex items-center justify-center group-hover:bg-saffron-100 transition-colors">
                  <stat.icon size={24} className="text-saffron-500 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
              </div>
              <p className="font-playfair text-3xl lg:text-4xl font-bold text-gradient-gold mb-1">{stat.value}</p>
              <p className="text-sacred-dark font-bold text-sm mb-2">{stat.label}</p>
              <p className="text-sacred-brown/50 text-xs leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
