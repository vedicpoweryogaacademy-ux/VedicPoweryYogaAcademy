import type { Metadata } from 'next';
import EnrollmentForm from '@/components/EnrollmentForm';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send 
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
  title: 'Contact Us | Vedic Power Yoga Academy Bengaluru',
  description: 'Get in touch with Vedic Power Yoga Academy. Located in Nagarabhavi, Bengaluru. Call 8050886649 to book your free trial class.',
  keywords: ['Yoga for Beginners', 'Weight Loss', 'Diabetes', 'PCOD', 'Thyroid', 'Meditation', 'Pranayama', 'Corporate Yoga', 'Kids Yoga', 'Teacher Training'],
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-saffron-100 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-200 bg-white text-saffron-600 text-xs font-semibold uppercase tracking-widest mb-6">
            <Send size={14} />
            Get In Touch
          </span>
          <h1 className="font-playfair text-5xl lg:text-7xl font-bold mb-6 text-sacred-dark tracking-tight">
            Start Your <span className="text-gradient-gold">Journey</span>
          </h1>
          <p className="text-sacred-brown/70 text-lg sm:text-xl max-w-2xl mx-auto font-light mb-8">
            Whether you are a beginner or seeking yoga therapy, our doors are always open. Reach out to book your trial.
          </p>
        </div>
      </section>

      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
            
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-saffron-50">
                <div className="w-12 h-12 bg-saffron-50 rounded-2xl flex items-center justify-center mb-6 text-saffron-500">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-bold text-sacred-dark text-xl mb-2">Visit Academy</h3>
                <p className="text-sacred-brown/70 text-sm leading-relaxed mb-4">
                  Sunrise Medical And Clinic, 4th cross, 6, Dasarahalli Main Rd, Narayanapura, Bengaluru, Karnataka 560077
                </p>
                <a
                  href="https://share.google/yKaPncXFckiWFK7hH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saffron-600 font-bold text-xs uppercase tracking-wider hover:text-vermillion-500 transition-colors"
                >
                  Get Directions →
                </a>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-saffron-50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-saffron-50 rounded-2xl flex items-center justify-center mb-6 text-saffron-500">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-playfair font-bold text-sacred-dark text-xl mb-2">Call Us</h3>
                  <div className="space-y-1 mb-2">
                    <a href="tel:+918050886649" className="text-sacred-brown/70 text-sm font-medium hover:text-saffron-600 transition-colors block">
                      +91 80508 86649
                    </a>
                    <a href="tel:+917892479178" className="text-sacred-brown/70 text-sm font-medium hover:text-saffron-600 transition-colors block">
                      +91 78924 79178
                    </a>
                  </div>
                  <a href="https://wa.me/918050886649" className="flex items-center gap-1.5 text-green-600 font-bold text-xs uppercase tracking-wider hover:text-green-700 transition-colors mt-2">
                    <WhatsAppIcon size={14} />
                    WhatsApp Available
                  </a>
                </div>

                <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-saffron-50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-saffron-50 rounded-2xl flex items-center justify-center mb-6 text-saffron-500">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-playfair font-bold text-sacred-dark text-xl mb-2">Email Us</h3>
                  <a href="mailto:vedicpoweryogaacademy@gmail.com" className="text-sacred-brown/70 text-sm font-medium hover:text-saffron-600 transition-colors block whitespace-nowrap">
                    vedicpoweryogaacademy@gmail.com
                  </a>
                </div>

                <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-saffron-50 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 bg-saffron-50 rounded-2xl flex items-center justify-center mb-6 text-saffron-500">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-playfair font-bold text-sacred-dark text-xl mb-2">Timings</h3>
                  <p className="text-sacred-brown/70 text-sm mb-1">Morning: 5:30 AM – 12:00 PM</p>
                  <p className="text-sacred-brown/70 text-sm">Evening: 5:00 PM – 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Enrollment Form */}
            <div className="lg:col-span-3">
              <EnrollmentForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
