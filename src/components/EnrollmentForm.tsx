'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2, ChevronDown } from 'lucide-react';

const programs = [
  'Hatha Yoga',
  'Ashtanga Yoga',
  'Power Yoga',
  'Pranayama',
  'Meditation / Dhyana',
  'Yoga Therapy',
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

function CustomSelect({ id, options, placeholder, required }: { id: string, options: string[], placeholder: string, required?: boolean }) {
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
        className={`w-full px-5 py-4 rounded-2xl border ${isOpen ? 'border-saffron-400 ring-2 ring-saffron-400/20' : 'border-saffron-100'} text-sm transition-all bg-[#FAFAF8] cursor-pointer flex items-center justify-between group`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selected ? 'text-sacred-dark' : 'text-sacred-brown/50'}>
          {selected || placeholder}
        </span>
        <ChevronDown 
          className={`text-saffron-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} 
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

  if (submitted) {
    return (
      <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-saffron-100 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-20 h-20 bg-saffron-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} className="text-saffron-500" />
        </div>
        <h3 className="font-playfair text-3xl font-bold text-sacred-dark mb-3">Thank You!</h3>
        <p className="text-sacred-brown/70 text-lg mb-8 max-w-sm">
          Your enrollment request has been received. Our team will call you back within 24 hours to confirm your trial.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-8 py-4 rounded-full bg-sacred-dark text-white font-bold hover:bg-saffron-500 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      id="enrollment-form"
      className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-xl border border-saffron-100 space-y-6 relative overflow-hidden"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-saffron-500/10 rounded-full blur-[40px] pointer-events-none" />

      <div className="grid sm:grid-cols-2 gap-6 relative z-10">
        <div>
          <label htmlFor="form-name" className="block text-xs font-bold text-sacred-dark mb-2 uppercase tracking-wider">Full Name *</label>
          <input
            id="form-name"
            type="text"
            required
            placeholder="Your name"
            className="w-full px-5 py-4 rounded-2xl border border-saffron-100 focus:border-saffron-400 focus:outline-none focus:ring-2 focus:ring-saffron-400/20 text-sacred-dark text-sm transition-all bg-[#FAFAF8]"
          />
        </div>
        <div>
          <label htmlFor="form-age" className="block text-xs font-bold text-sacred-dark mb-2 uppercase tracking-wider">Age</label>
          <input
            id="form-age"
            type="number"
            placeholder="Your age"
            className="w-full px-5 py-4 rounded-2xl border border-saffron-100 focus:border-saffron-400 focus:outline-none focus:ring-2 focus:ring-saffron-400/20 text-sacred-dark text-sm transition-all bg-[#FAFAF8]"
          />
        </div>
      </div>

      <div className="relative z-10">
        <label htmlFor="form-phone" className="block text-xs font-bold text-sacred-dark mb-2 uppercase tracking-wider">Phone Number *</label>
        <input
          id="form-phone"
          type="tel"
          required
          placeholder="Your phone number"
          className="w-full px-5 py-4 rounded-2xl border border-saffron-100 focus:border-saffron-400 focus:outline-none focus:ring-2 focus:ring-saffron-400/20 text-sacred-dark text-sm transition-all bg-[#FAFAF8]"
        />
      </div>

      <div className="relative z-10">
        <label htmlFor="form-email" className="block text-xs font-bold text-sacred-dark mb-2 uppercase tracking-wider">Email Address</label>
        <input
          id="form-email"
          type="email"
          placeholder="your@email.com"
          className="w-full px-5 py-4 rounded-2xl border border-saffron-100 focus:border-saffron-400 focus:outline-none focus:ring-2 focus:ring-saffron-400/20 text-sacred-dark text-sm transition-all bg-[#FAFAF8]"
        />
      </div>

      <div className="relative z-30">
        <label htmlFor="form-program" className="block text-xs font-bold text-sacred-dark mb-2 uppercase tracking-wider">Interested Program *</label>
        <CustomSelect 
          id="form-program"
          options={programs}
          placeholder="Select a program"
          required
        />
      </div>

      <div className="relative z-20">
        <label htmlFor="form-batch" className="block text-xs font-bold text-sacred-dark mb-2 uppercase tracking-wider">Preferred Batch *</label>
        <CustomSelect 
          id="form-batch"
          options={batches}
          placeholder="Select timing"
          required
        />
      </div>

      <div className="relative z-10">
        <label htmlFor="form-health" className="block text-xs font-bold text-sacred-dark mb-2 uppercase tracking-wider">
          Any Health Conditions? (Optional)
        </label>
        <textarea
          id="form-health"
          rows={3}
          placeholder="E.g. back pain, diabetes, thyroid — helps us personalize your program"
          className="w-full px-5 py-4 rounded-2xl border border-saffron-100 focus:border-saffron-400 focus:outline-none focus:ring-2 focus:ring-saffron-400/20 text-sacred-dark text-sm transition-all resize-none bg-[#FAFAF8]"
        />
      </div>

      <button
        id="form-submit-btn"
        type="submit"
        className="relative z-10 w-full py-4 rounded-2xl bg-sacred-dark text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:bg-saffron-600 hover:shadow-saffron-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        Submit Enrollment Request
      </button>

      <p className="relative z-10 text-sacred-brown/50 text-xs text-center font-medium">
        We will call you back within 24 hours to confirm your enrollment
      </p>
    </form>
  );
}
