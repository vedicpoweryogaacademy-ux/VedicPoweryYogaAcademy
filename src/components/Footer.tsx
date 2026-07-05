import Link from 'next/link';
import Image from 'next/image';
import { Award, ShieldCheck, Clock, MapPin, MessageCircle, ChevronRight, Phone, Mail, Calendar } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Guruji' },
  { href: '/programs', label: 'Yoga Programs' },
  { href: '/therapy', label: 'Yoga Therapy' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Success Stories' },
  { href: '/contact', label: 'Contact & Enroll' },
];

const programs = [
  'Hatha Yoga',
  'Ashtanga Yoga',
  'Power Yoga',
  'Pranayama',
  'Meditation',
  'Yoga Therapy',
  "Kids' Yoga",
  "Women's Yoga",
  'Corporate Yoga',
  'Senior Citizens Yoga',
  'Teacher Training',
  'Online Yoga',
];

export default function Footer() {
  return (
    <footer className="bg-sacred-dark text-white">
      {/* Trust Badges Bar */}
      <div className="bg-gradient-gold py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white">
            {[
              { icon: Award, text: 'Ministry of AYUSH Recognized' },
              { icon: ShieldCheck, text: 'Indian Yoga Association (IYA)' },
              { icon: Clock, text: '26+ Years Experience' },
              { icon: MapPin, text: 'Government of Karnataka' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm font-semibold tracking-wide">
                <badge.icon size={20} className="text-white/90" strokeWidth={2.5} />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-saffron-500/50 flex-shrink-0">
                <Image src="/images/logo.jpg" alt="Logo" fill sizes="56px" className="object-cover" />
              </div>
              <div>
                <p className="font-playfair font-bold text-saffron-400 leading-tight">
                  Vedic Power Yoga
                </p>
                <p className="text-saffron-300/60 text-[10px] uppercase tracking-widest font-semibold mt-1">Center for Vedic Culture</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8 font-light">
              Spreading the ancient science of yoga through structured training, holistic
              wellness, and community service for over 26 years.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {[
                { 
                  label: 'Facebook', 
                  href: 'https://www.facebook.com/vedicpoweryoga/',
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  )
                },
                { 
                  label: 'Instagram', 
                  href: 'https://www.instagram.com/academyvedicpoweryoga',
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  )
                },
                { 
                  label: 'WhatsApp', 
                  href: 'https://wa.me/918050886649',
                  icon: <WhatsAppIcon size={18} />
                },
                {
                  label: 'YouTube',
                  href: 'https://youtube.com/@yogawithmanjunath',
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  )
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-saffron-500 hover:text-white flex items-center justify-center text-saffron-400 transition-all duration-300 border border-saffron-500/20"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-white text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-saffron-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="text-saffron-500 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-playfair font-bold text-white text-lg mb-6">
              Our Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p}>
                  <Link
                    href="/programs"
                    className="text-white/60 hover:text-saffron-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="text-saffron-500 group-hover:translate-x-1 transition-transform" />
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair font-bold text-white text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-4 text-white/70 items-start">
                <MapPin size={20} className="text-saffron-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed font-light">
                  Sunrise Medical And Clinic, 4th cross, 6,<br />
                  Dasarahalli Main Rd, Narayanapura,<br />
                  Bengaluru, Karnataka 560077
                </span>
              </li>
              <li className="flex gap-4 text-white/70 items-start">
                <Phone size={20} className="text-saffron-500 flex-shrink-0 mt-0.5" />
                <div className="font-light">
                  <a href="tel:+918050886649" className="hover:text-saffron-400 transition-colors block mb-1">
                    +91 80508 86649
                  </a>
                  <a href="tel:+917892479178" className="hover:text-saffron-400 transition-colors block">
                    +91 78924 79178
                  </a>
                </div>
              </li>
              <li className="flex gap-4 text-white/70 items-center">
                <Mail size={20} className="text-saffron-500 flex-shrink-0" />
                <a
                  href="mailto:vedicpoweryogaacademy@gmail.com"
                  className="hover:text-saffron-400 transition-colors whitespace-nowrap font-light"
                >
                  vedicpoweryogaacademy@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <div className="bg-white/5 rounded-2xl p-5 border border-saffron-500/10 backdrop-blur-sm">
                  <p className="text-saffron-400 font-bold text-[10px] mb-3 uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={12} />
                    Class Timings
                  </p>
                  <div className="text-white/70 text-xs space-y-2 font-light">
                    <div className="flex justify-between">
                      <span>Morning:</span>
                      <span className="text-white font-medium">5:30, 6:30, 8:00, 11:00</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2">
                      <span>Evening:</span>
                      <span className="text-white font-medium">5:00, 6:30</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-xs text-center uppercase tracking-wider font-semibold">
              © {new Date().getFullYear()} Vedic Power Yoga Academy. All rights reserved.
            </p>
            <p className="text-white/40 text-sm text-center italic font-light">
              "Yoga helps to develop concentration" — Guruji Manjunath Sampath
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
