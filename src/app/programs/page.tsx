import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight,
  Sun,
  Flame,
  Dumbbell,
  Wind,
  Brain,
  HeartPulse,
  Baby,
  User,
  Building2,
  PersonStanding,
  GraduationCap,
  Laptop,
  CheckCircle2,
  Clock,
  CalendarDays
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Yoga Programs | Vedic Power Yoga Academy Bengaluru',
  description:
    'Explore 12 specialized yoga programs at Vedic Power Yoga Academy — Hatha, Ashtanga, Power Yoga, Pranayama, Meditation, Yoga Therapy, Kids, Women, Corporate, Senior Citizens, Teacher Training & Online Yoga.',
};

const programs = [
  {
    id: 'hatha',
    icon: Sun,
    name: 'Hatha Yoga',
    tagline: 'Foundation of All Yoga',
    desc: 'Hatha Yoga is the perfect starting point for beginners and the foundation for all yoga styles. Focuses on physical postures (asanas) and breathing exercises to build strength, flexibility, and balance.',
    benefits: ['Improved flexibility', 'Better posture', 'Stress reduction', 'Enhanced strength', 'Mental clarity'],
    eligibility: 'All ages, beginners welcome',
    duration: '45 minutes',
    schedule: 'Daily — all morning and evening batches',
    color: 'from-orange-400 to-orange-500',
    shadow: 'shadow-orange-500/20',
  },
  {
    id: 'ashtanga',
    icon: Flame,
    name: 'Ashtanga Yoga',
    tagline: 'The Eight-Limbed Path',
    desc: 'Scientific and traditional Ashtanga Yoga for preventing mental tension and getting relief from physical ailments. Follows the eight limbs of Patanjali yoga for complete spiritual and physical development.',
    benefits: ['Builds stamina', 'Detoxifies body', 'Improves focus', 'Increases flexibility', 'Balances hormones'],
    eligibility: 'Intermediate to advanced practitioners',
    duration: '60 minutes',
    schedule: 'Daily — morning batches 5:30, 6:30, 8:00',
    color: 'from-red-400 to-red-500',
    shadow: 'shadow-red-500/20',
  },
  {
    id: 'power',
    icon: Dumbbell,
    name: 'Power Yoga',
    tagline: 'Strength & Fitness Through Yoga',
    desc: 'A vigorous, fitness-based approach to yoga that builds strength, endurance, and flexibility. Ideal for those seeking a challenging workout alongside spiritual practice.',
    benefits: ['Weight loss', 'Muscle toning', 'Cardio fitness', 'Core strength', 'Increased metabolism'],
    eligibility: 'Adults with basic fitness level',
    duration: '60 minutes',
    schedule: 'Morning batches — 6:30 AM, 8:00 AM',
    color: 'from-amber-400 to-amber-500',
    shadow: 'shadow-amber-500/20',
  },
  {
    id: 'pranayama',
    icon: Wind,
    name: 'Pranayama',
    tagline: 'The Science of Breath',
    desc: 'Advanced breathing techniques that control life force energy. Includes Anulom Vilom, Kapalbhati, Bhramari, and more. Importance is given to Pranayama and Easy meditation in all programs.',
    benefits: ['Respiratory health', 'Reduced anxiety', 'Better sleep', 'Energy boost', 'Detoxification'],
    eligibility: 'All ages, beginners to advanced',
    duration: '30–45 minutes',
    schedule: 'Part of all batches; separate dedicated sessions on request',
    color: 'from-blue-400 to-blue-500',
    shadow: 'shadow-blue-500/20',
  },
  {
    id: 'meditation',
    icon: Brain,
    name: 'Dhyana (Meditation)',
    tagline: 'Journey Inward',
    desc: 'Structured meditation practice based on ancient Vedic techniques. Includes Yoga Nidra (yogic sleep), Dhyana, Trataka, and other advanced meditation modalities for profound inner transformation.',
    benefits: ['Deep relaxation', 'Emotional balance', 'Improved memory', 'Reduced stress', 'Spiritual growth'],
    eligibility: 'All ages and levels',
    duration: '30 minutes',
    schedule: 'Integrated in all sessions; Yoga Nidra classes on weekends',
    color: 'from-purple-400 to-purple-500',
    shadow: 'shadow-purple-500/20',
  },
  {
    id: 'therapy',
    icon: HeartPulse,
    name: 'Yoga Therapy',
    tagline: 'Heal Naturally',
    desc: 'Specialized therapeutic yoga for managing and healing chronic health conditions. Individually designed practices for back pain, diabetes, PCOD, thyroid, stress, and more.',
    benefits: ['Pain management', 'Disease prevention', 'Hormonal balance', 'Mental wellness', 'Natural healing'],
    eligibility: 'Anyone with health conditions (consultation required)',
    duration: '45–60 minutes',
    schedule: 'Separate therapy sessions — contact for schedule',
    color: 'from-emerald-400 to-emerald-500',
    shadow: 'shadow-emerald-500/20',
  },
  {
    id: 'kids',
    icon: Baby,
    name: "Kids' Yoga",
    tagline: 'Fun, Focus & Growth',
    desc: 'Fun, engaging yoga classes designed specifically for children. Builds concentration, discipline, physical fitness, and emotional intelligence through age-appropriate yoga practices and games.',
    benefits: ['Better concentration', 'Improved discipline', 'Physical fitness', 'Emotional intelligence', 'Fun & creativity'],
    eligibility: 'Children aged 5–15 years',
    duration: '45 minutes',
    schedule: "Children's weekend classes — Saturday & Sunday",
    color: 'from-yellow-400 to-yellow-500',
    shadow: 'shadow-yellow-500/20',
  },
  {
    id: 'womens',
    icon: User,
    name: "Women's Yoga",
    tagline: 'Designed for Her',
    desc: "Specially tailored yoga programs addressing women's unique health needs including menstrual health, PCOD, pregnancy yoga, post-natal recovery, menopause management, and overall hormonal balance.",
    benefits: ['Hormonal balance', 'PCOD management', 'Stress relief', 'Improved fitness', 'Emotional wellness'],
    eligibility: 'Women of all ages',
    duration: '60 minutes',
    schedule: 'Morning batches — 6:30 AM, 8:00 AM, 11:00 AM',
    color: 'from-pink-400 to-pink-500',
    shadow: 'shadow-pink-500/20',
  },
  {
    id: 'corporate',
    icon: Building2,
    name: 'Corporate Yoga',
    tagline: 'Wellness at Work',
    desc: 'Customized workplace wellness programs for corporate teams. Reduces stress, improves productivity, and enhances team morale through structured yoga sessions adapted for busy professionals.',
    benefits: ['Stress management', 'Productivity boost', 'Team bonding', 'Posture correction', 'Mental clarity'],
    eligibility: 'Corporate teams and professionals',
    duration: '45–60 minutes',
    schedule: 'On-site or at academy — flexible scheduling for corporates',
    color: 'from-cyan-400 to-cyan-500',
    shadow: 'shadow-cyan-500/20',
  },
  {
    id: 'seniors',
    icon: PersonStanding,
    name: 'Senior Citizens Yoga',
    tagline: 'Gentle & Healing',
    desc: 'Gentle, safe yoga practices specially adapted for older adults. Focuses on joint mobility, balance, bone health, arthritis relief, and maintaining vitality in the golden years.',
    benefits: ['Joint mobility', 'Balance improvement', 'Arthritis relief', 'Mental sharpness', 'Social connection'],
    eligibility: 'Adults aged 55 and above',
    duration: '45 minutes',
    schedule: 'Morning batch — 8:00 AM; special sessions on request',
    color: 'from-teal-400 to-teal-500',
    shadow: 'shadow-teal-500/20',
  },
  {
    id: 'teacher-training',
    icon: GraduationCap,
    name: 'Teacher Training',
    tagline: 'Become a Certified Yoga Teacher',
    desc: 'Comprehensive yoga teacher training program covering asana, pranayama, anatomy, philosophy, and teaching methodology. Affiliated with Indian Yoga Association for nationally recognized certification.',
    benefits: ['IYA certification', 'Teaching skills', 'Deep knowledge', 'Career opportunity', 'Personal growth'],
    eligibility: 'Yoga practitioners with 1+ year experience',
    duration: '200 hours (3–6 months)',
    schedule: 'Batches announced periodically — contact for next batch',
    color: 'from-violet-400 to-violet-500',
    shadow: 'shadow-violet-500/20',
  },
  {
    id: 'online',
    icon: Laptop,
    name: 'Online Yoga',
    tagline: 'Practice Anywhere',
    desc: 'Live interactive yoga classes via video conferencing with Guruji. Experience the same authentic teaching quality from the comfort of your home, wherever you are in the world.',
    benefits: ['Practice from home', 'Live interaction', 'Flexible location', 'Recorded sessions', 'Same quality teaching'],
    eligibility: 'All levels, requires stable internet connection',
    duration: '45 minutes',
    schedule: 'Morning batches — 6:30 AM, 8:00 AM (IST)',
    color: 'from-indigo-400 to-indigo-500',
    shadow: 'shadow-indigo-500/20',
  },
];

const faqs = [
  { q: 'Do I need prior yoga experience to join?', a: 'No prior experience is needed for most programs. Beginners are warmly welcome. Our teachers guide you from the basics.' },
  { q: 'What should I bring to class?', a: 'Comfortable clothing, a yoga mat (we also provide mats), and a water bottle. Arrive 5–10 minutes early.' },
  { q: 'Can I attend a trial class before enrolling?', a: 'Yes! We offer free trial classes. Contact us to schedule your free trial session.' },
  { q: 'Are classes available on weekends?', a: 'Yes. We offer specially modified weekend yoga classes and children\'s weekend yoga separately.' },
  { q: 'Do you offer one-on-one sessions?', a: 'Yes. Personal training sessions with Guruji can be arranged. Contact us for availability and pricing.' },
];

export default function ProgramsPage() {
  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-saffron-100 rounded-full blur-[100px] opacity-70 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-vermillion-100/50 rounded-full blur-[80px] opacity-60 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-200 bg-white text-saffron-600 text-xs font-semibold uppercase tracking-widest mb-6">
            <Sun size={14} />
            Our Programs
          </span>
          <h1 className="font-playfair text-5xl lg:text-7xl font-bold mb-6 text-sacred-dark tracking-tight">
            Yoga for <span className="text-gradient-gold">Every Soul</span>
          </h1>
          <p className="text-sacred-brown/70 text-lg sm:text-xl max-w-2xl mx-auto font-light">
            12 specialized programs designed for all ages, fitness levels, and wellness goals. Find your path to inner peace.
          </p>
        </div>
      </section>

      {/* ── Programs Grid ── */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog) => (
              <div
                key={prog.id}
                id={prog.id}
                className={`bg-white rounded-[2.5rem] p-8 shadow-lg border border-saffron-100 hover:shadow-2xl ${prog.shadow} transition-all duration-300 hover:-translate-y-2 group flex flex-col`}
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <prog.icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="font-playfair text-2xl font-bold text-sacred-dark mb-1 group-hover:text-saffron-600 transition-colors">{prog.name}</h2>
                    <p className="text-saffron-500 text-xs font-bold uppercase tracking-wider">{prog.tagline}</p>
                  </div>
                </div>
                
                <p className="text-sacred-brown/70 text-sm leading-relaxed mb-8 flex-grow">{prog.desc}</p>

                <div className="space-y-4 mb-8 bg-saffron-50/50 p-5 rounded-2xl border border-saffron-50">
                  <div className="flex gap-3 text-sm">
                    <span className="text-saffron-600 font-bold flex-shrink-0 uppercase text-[10px] tracking-wider mt-0.5">Benefits</span>
                    <span className="text-sacred-brown/80 font-medium">{prog.benefits.join(' · ')}</span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="text-saffron-600 font-bold flex-shrink-0 uppercase text-[10px] tracking-wider mt-0.5">Eligibility</span>
                    <span className="text-sacred-brown/80 font-medium">{prog.eligibility}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-saffron-100 mb-6">
                  <div className="flex items-center gap-2 text-sacred-brown/60 text-xs font-semibold uppercase tracking-wider">
                    <Clock size={14} className="text-saffron-500" />
                    {prog.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sacred-brown/60 text-xs font-semibold uppercase tracking-wider">
                    <CalendarDays size={14} className="text-saffron-500" />
                    Daily / Weekly
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-sacred-dark text-white font-bold text-sm shadow-md hover:bg-saffron-600 transition-colors mt-auto"
                >
                  Enroll in Program
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timetable ── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/20 bg-saffron-50 text-saffron-700 text-xs font-semibold uppercase tracking-widest mb-4">
              <CalendarDays size={14} />
              Timetable
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark mb-4">
              Weekly <span className="text-gradient-gold">Class Schedule</span>
            </h2>
          </div>
          
          <div className="overflow-x-auto rounded-[2rem] shadow-xl border border-saffron-100">
            <table className="w-full text-sm">
              <thead className="bg-sacred-dark text-white">
                <tr>
                  <th className="px-6 py-5 text-left font-bold uppercase tracking-wider text-xs">Time</th>
                  <th className="px-4 py-5 text-center font-bold uppercase tracking-wider text-xs text-white/70">Mon</th>
                  <th className="px-4 py-5 text-center font-bold uppercase tracking-wider text-xs text-white/70">Tue</th>
                  <th className="px-4 py-5 text-center font-bold uppercase tracking-wider text-xs text-white/70">Wed</th>
                  <th className="px-4 py-5 text-center font-bold uppercase tracking-wider text-xs text-white/70">Thu</th>
                  <th className="px-4 py-5 text-center font-bold uppercase tracking-wider text-xs text-white/70">Fri</th>
                  <th className="px-4 py-5 text-center font-bold uppercase tracking-wider text-xs text-saffron-400">Sat</th>
                  <th className="px-4 py-5 text-center font-bold uppercase tracking-wider text-xs text-saffron-400">Sun</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-saffron-100 bg-white">
                {[
                  { time: '5:30 AM', classes: ['Ashtanga', 'Ashtanga', 'Ashtanga', 'Ashtanga', 'Ashtanga', 'Hatha', 'Hatha'] },
                  { time: '6:30 AM', classes: ['Power Yoga', 'Power Yoga', 'Power Yoga', 'Power Yoga', 'Power Yoga', 'Pranayama', 'Meditation'] },
                  { time: '8:00 AM', classes: ['Hatha', 'Hatha', 'Hatha', 'Hatha', 'Hatha', "Women's", "Kids'"] },
                  { time: '11:00 AM', classes: ['Yoga Therapy', 'Yoga Therapy', 'Yoga Therapy', 'Yoga Therapy', 'Yoga Therapy', 'Seniors', 'Seniors'] },
                  { time: '5:00 PM', classes: ['Meditation', 'Meditation', 'Meditation', 'Meditation', 'Meditation', 'Yoga Nidra', 'Yoga Nidra'] },
                  { time: '6:30 PM', classes: ['Pranayama', 'Pranayama', 'Pranayama', 'Pranayama', 'Pranayama', 'Corporate', 'Online'] },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8] hover:bg-saffron-50/50 transition-colors'}>
                    <td className="px-6 py-4 font-bold text-saffron-600 whitespace-nowrap">{row.time}</td>
                    {row.classes.map((cls, j) => (
                      <td key={j} className="px-4 py-4 text-center text-sacred-brown/80 font-medium whitespace-nowrap">{cls}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-8 shadow-sm border border-saffron-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-sacred-dark text-lg mb-3 flex items-start gap-4">
                  <span className="text-saffron-500 text-xl">Q.</span> {faq.q}
                </h3>
                <p className="text-sacred-brown/70 text-base leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-saffron-50/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-saffron-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6 text-sacred-dark">Ready to Begin?</h2>
          <p className="text-sacred-brown/70 text-lg mb-10 font-light">Join thousands of students who have transformed their lives at Vedic Power Yoga Academy.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sacred-dark text-white font-bold text-lg shadow-xl hover:scale-105 hover:bg-saffron-600 transition-all duration-300">
              Enroll Now
              <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/918050886649" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white border border-saffron-200 text-sacred-dark font-bold text-lg hover:border-saffron-400 hover:bg-saffron-50 shadow-sm transition-all duration-300">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
