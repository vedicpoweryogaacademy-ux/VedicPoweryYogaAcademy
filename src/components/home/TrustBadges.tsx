import { ShieldCheck, MapPin, Award, Globe, Heart } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    { icon: ShieldCheck, title: 'Ministry of AYUSH', subtitle: 'Recognized Yoga Kendra', color: 'from-orange-500/20 to-orange-600/10', iconColor: 'text-orange-500' },
    { icon: MapPin, title: 'Indian Yoga Association', subtitle: 'Registered Associate Centre', color: 'from-green-500/20 to-green-600/10', iconColor: 'text-green-500' },
    { icon: Award, title: '26+ Years', subtitle: 'of Yoga Excellence', color: 'from-saffron-500/20 to-saffron-600/10', iconColor: 'text-saffron-400' },
    { icon: Globe, title: 'Govt. of Karnataka', subtitle: 'Department of AYUSH', color: 'from-blue-500/20 to-blue-600/10', iconColor: 'text-blue-500' },
    { icon: Heart, title: 'International Yoga Day', subtitle: '2026 Program Organizer', color: 'from-purple-500/20 to-purple-600/10', iconColor: 'text-purple-500' },
  ];

  return (
    <section className="bg-white py-14 border-t border-saffron-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-saffron-600 text-xs uppercase tracking-[0.2em] font-semibold mb-10">
          Recognized & Associated With
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {badges.map((badge, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${badge.color} rounded-2xl p-5 text-center border border-saffron-50 hover:border-saffron-500/30 transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className="flex justify-center mb-4">
                <badge.icon size={32} className={`${badge.iconColor} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
              </div>
              <p className="text-sacred-dark font-semibold text-sm leading-snug">{badge.title}</p>
              <p className="text-sacred-brown/60 text-xs mt-1.5">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
