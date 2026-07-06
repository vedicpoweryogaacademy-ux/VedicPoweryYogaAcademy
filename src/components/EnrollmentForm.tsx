'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2, ChevronDown, User, Phone, Mail, BookOpen, Clock, Activity, CalendarDays } from 'lucide-react';

const programs = [
  'Hatha Yoga',
  'Ashtanga Yoga',
  'Power Yoga',
  'Pranayama',
  'Meditation / Dhyana',
  'Yoga Therapy',
  'Agnihotra',
  "Kids' Yoga",
  "Women's Yoga",
  'Corporate Yoga',
  'Senior Citizens Yoga',
  'Teacher Training',
  'Online Yoga'
];

const batches = [
  '5:30 AM',
  '6:30 AM',
  '8:00 AM',
  '11:00 AM',
  '5:00 PM',
  '6:30 PM',
  'Weekend batch',
  'Online'
];

function CustomSelect({ id, options, placeholder, required, icon: Icon }: { id: string, options: string[], placeholder: string, required?: boolean, icon: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      {/* Hidden native input for form validation */}
      <input type="text" id={id} required={required} value={selected} onChange={() => {}} className="absolute opacity-0 w-full h-full -z-10 pointer-events-none" />
      
      <div
        className={`w-full pl-12 pr-5 py-4 rounded-2xl border ${isOpen ? 'border-saffron-400 ring-4 ring-saffron-400/10' : 'border-saffron-100'} text-sm transition-all bg-[#FAFAF8] cursor-pointer flex items-center justify-between group`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-saffron-400 group-hover:text-saffron-500 transition-colors">
          <Icon size={18} strokeWidth={2} />
        </div>
        <span className={selected ? 'text-sacred-dark font-medium' : 'text-sacred-brown/50'}>
          {selected || placeholder}
        </span>
        <ChevronDown 
          className={`text-saffron-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} 
          size={18} 
        />
      </div>

      {/* Dropdown Options */}
      <div 
        className={`absolute z-50 w-full mt-2 bg-white border border-saffron-100 rounded-2xl shadow-xl overflow-hidden transition-all duration-200 origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
      >
        <div className="max-h-60 overflow-y-auto custom-scrollbar p-2">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                setSelected(opt);
                setIsOpen(false);
              }}
              className={`px-4 py-3 rounded-xl cursor-pointer text-sm font-medium transition-colors ${
                selected === opt 
                  ? 'bg-saffron-50 text-saffron-700' 
                  : 'text-sacred-dark hover:bg-[#FAFAF8] hover:text-saffron-600'
              }`}
            >
              {opt}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function EnrollmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (submitted) {
    return (
      <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-saffron-100 flex flex-col items-center justify-center text-center min-h-[500px]">
        <div className="w-24 h-24 bg-saffron-50 rounded-full flex items-center justify-center mb-8 relative">
          <div className="absolute inset-0 bg-saffron-100 rounded-full animate-ping opacity-20" />
          <CheckCircle2 size={48} className="text-saffron-500 relative z-10" />
        </div>
        <h3 className="font-playfair text-4xl font-bold text-sacred-dark mb-4">Thank You!</h3>
        <p className="text-sacred-brown/70 text-lg mb-10 max-w-sm leading-relaxed">
          Your enrollment request has been received. Our team will call you back within 24 hours to confirm your trial.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-sacred-dark to-sacred-brown text-white font-bold hover:shadow-lg hover:shadow-sacred-dark/30 hover:scale-105 transition-all duration-300"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      id="enrollment-form"
      className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl shadow-saffron-500/5 border border-saffron-100 space-y-6 relative overflow-hidden"
      onSubmit={async (e) => {
        e.preventDefault();
        setError('');
        
        const name = (document.getElementById('form-name') as HTMLInputElement)?.value;
        const phone = (document.getElementById('form-phone') as HTMLInputElement)?.value;
        const program = (document.getElementById('form-program') as HTMLInputElement)?.value;
        const batch = (document.getElementById('form-batch') as HTMLInputElement)?.value;
        
        if (!name || !phone || !program || !batch) {
          setError('Please fill in all required fields (*).');
          return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
          setError('Please enter a valid 10-digit phone number.');
          return;
        }
        
        const ageStr = (document.getElementById('form-age') as HTMLInputElement)?.value;
        if (ageStr) {
          const ageNum = parseInt(ageStr, 10);
          if (ageNum < 1) {
            setError('Please enter a valid age.');
            return;
          }
        }

        setIsSubmitting(true);
        try {
          const data = {
            name,
            age: (document.getElementById('form-age') as HTMLInputElement)?.value,
            phone,
            email: (document.getElementById('form-email') as HTMLInputElement)?.value,
            program,
            batch,
            message: (document.getElementById('form-health') as HTMLTextAreaElement)?.value,
          };

          await fetch('https://script.google.com/macros/s/AKfycbxu4J_ytqqHXz_qVIBcDba87UtAeSOla-OpVUhTlEDYX834hY-rEgK7scSzA73TWQWc/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(data),
          });
          setSubmitted(true);
        } catch (error) {
          console.error('Submission failed:', error);
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="grid sm:grid-cols-2 gap-6 relative z-10">
        <div>
          <label htmlFor="form-name" className="block text-[10px] font-bold text-sacred-dark mb-2 uppercase tracking-widest">Full Name *</label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-saffron-400 group-focus-within:text-saffron-500 transition-colors pointer-events-none">
              <User size={18} strokeWidth={2} />
            </div>
            <input
              id="form-name"
              type="text"
              required
              placeholder="Your name"
              className="w-full pl-12 pr-5 py-4 rounded-2xl border border-saffron-100 focus:border-saffron-400 focus:outline-none focus:ring-4 focus:ring-saffron-400/10 text-sacred-dark text-sm font-medium transition-all bg-[#FAFAF8] placeholder:font-normal"
            />
          </div>
        </div>
        <div>
          <label htmlFor="form-age" className="block text-[10px] font-bold text-sacred-dark mb-2 uppercase tracking-widest">Age</label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-saffron-400 group-focus-within:text-saffron-500 transition-colors pointer-events-none">
              <CalendarDays size={18} strokeWidth={2} />
            </div>
            <input
              id="form-age"
              type="number"
              min="1"
              max="120"
              placeholder="Your age"
              className="w-full pl-12 pr-5 py-4 rounded-2xl border border-saffron-100 focus:border-saffron-400 focus:outline-none focus:ring-4 focus:ring-saffron-400/10 text-sacred-dark text-sm font-medium transition-all bg-[#FAFAF8] placeholder:font-normal"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 group">
        <label htmlFor="form-phone" className="block text-[10px] font-bold text-sacred-dark mb-2 uppercase tracking-widest">Phone Number *</label>
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-saffron-400 group-focus-within:text-saffron-500 transition-colors pointer-events-none">
            <Phone size={18} strokeWidth={2} />
          </div>
          <input
            id="form-phone"
            type="tel"
            required
            placeholder="Your phone number"
            className="w-full pl-12 pr-5 py-4 rounded-2xl border border-saffron-100 focus:border-saffron-400 focus:outline-none focus:ring-4 focus:ring-saffron-400/10 text-sacred-dark text-sm font-medium transition-all bg-[#FAFAF8] placeholder:font-normal"
          />
        </div>
      </div>

      <div className="relative z-10 group">
        <label htmlFor="form-email" className="block text-[10px] font-bold text-sacred-dark mb-2 uppercase tracking-widest">Email Address</label>
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-saffron-400 group-focus-within:text-saffron-500 transition-colors pointer-events-none">
            <Mail size={18} strokeWidth={2} />
          </div>
          <input
            id="form-email"
            type="email"
            placeholder="your@email.com"
            className="w-full pl-12 pr-5 py-4 rounded-2xl border border-saffron-100 focus:border-saffron-400 focus:outline-none focus:ring-4 focus:ring-saffron-400/10 text-sacred-dark text-sm font-medium transition-all bg-[#FAFAF8] placeholder:font-normal"
          />
        </div>
      </div>

      <div className="relative z-30">
        <label htmlFor="form-program" className="block text-[10px] font-bold text-sacred-dark mb-2 uppercase tracking-widest">Interested Program *</label>
        <CustomSelect 
          id="form-program"
          options={programs}
          placeholder="Select a program"
          required
          icon={BookOpen}
        />
      </div>

      <div className="relative z-20">
        <label htmlFor="form-batch" className="block text-[10px] font-bold text-sacred-dark mb-2 uppercase tracking-widest">Preferred Batch *</label>
        <CustomSelect 
          id="form-batch"
          options={batches}
          placeholder="Select timing"
          required
          icon={Clock}
        />
      </div>

      <div className="relative z-10 group">
        <label htmlFor="form-health" className="block text-[10px] font-bold text-sacred-dark mb-2 uppercase tracking-widest">
          Any Health Conditions? (Optional)
        </label>
        <div className="relative">
          <div className="absolute left-4 top-5 -translate-y-1/2 text-saffron-400 group-focus-within:text-saffron-500 transition-colors pointer-events-none">
            <Activity size={18} strokeWidth={2} />
          </div>
          <textarea
            id="form-health"
            rows={3}
            placeholder="E.g. back pain, diabetes, thyroid — helps us personalize your program"
            className="w-full pl-12 pr-5 py-4 rounded-2xl border border-saffron-100 focus:border-saffron-400 focus:outline-none focus:ring-4 focus:ring-saffron-400/10 text-sacred-dark text-sm font-medium transition-all resize-none bg-[#FAFAF8] placeholder:font-normal"
          />
        </div>
      </div>

      {error && (
        <div className="relative z-10 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium text-center">
          {error}
        </div>
      )}

      <button
        id="form-submit-btn"
        type="submit"
        disabled={isSubmitting}
        className={`relative z-10 w-full py-4 rounded-2xl bg-gradient-to-r from-sacred-dark to-sacred-brown text-white font-bold text-sm uppercase tracking-widest shadow-xl shadow-sacred-dark/20 hover:shadow-saffron-500/40 transition-all duration-300 flex items-center justify-center gap-3 group overflow-hidden ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-saffron-600 to-vermillion-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10" />
        ) : (
          <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        )}
        <span className="relative z-10">{isSubmitting ? 'Submitting...' : 'Submit Enrollment Request'}</span>
      </button>

      <p className="relative z-10 text-sacred-brown/50 text-[11px] text-center font-bold uppercase tracking-widest pt-2">
        We will call you back within 24 hours to confirm your enrollment
      </p>
    </form>
  );
}
