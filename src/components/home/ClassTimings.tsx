import Link from 'next/link';
import { ArrowRight, Clock, Sun, Moon, CalendarDays, Laptop } from 'lucide-react';

export default function ClassTimings() {
  const timings = [
    { time: '05:30 AM', type: 'Morning Batch', category: 'General Yoga' },
    { time: '06:30 AM', type: 'Morning Batch', category: 'General Yoga' },
    { time: '08:00 AM', type: 'Morning Batch', category: 'Women Only' },
    { time: '11:00 AM', type: 'Morning Batch', category: 'Yoga Therapy' },
    { time: '05:00 PM', type: 'Evening Batch', category: 'Kids & Teens' },
    { time: '06:30 PM', type: 'Evening Batch', category: 'General Yoga' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Header Area */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/20 bg-saffron-50 text-saffron-700 text-xs font-semibold uppercase tracking-widest mb-4">
              <Clock size={14} className="text-saffron-500" />
              Schedule
            </div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark mb-4">
              Flexible <span className="text-gradient-gold">Timings</span>
            </h2>
            <p className="text-sacred-brown/60 text-lg font-light mb-8 max-w-sm mx-auto lg:mx-0">
              Six daily batches to fit your busy lifestyle. Start your day with energy or end it with peace.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sacred-dark text-white font-bold text-base shadow-lg hover:bg-saffron-500 hover:scale-105 transition-all duration-300"
            >
              Book
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Timings Grid */}
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4 w-full">
            {timings.map((slot, i) => {
              const isMorning = slot.time.includes('AM');
              return (
                <div 
                  key={i} 
                  className="flex items-center justify-between p-5 rounded-2xl border border-saffron-100 bg-saffron-50/30 hover:bg-saffron-50 hover:border-saffron-300 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isMorning ? 'bg-orange-100' : 'bg-blue-100'}`}>
                      {isMorning ? (
                        <Sun size={20} className="text-orange-500" />
                      ) : (
                        <Moon size={20} className="text-blue-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-playfair text-xl font-bold text-sacred-dark group-hover:text-saffron-600 transition-colors">{slot.time}</p>
                      <p className="text-sacred-brown/60 text-xs uppercase tracking-wider font-bold mt-0.5">{slot.category}</p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Special Callouts */}
            <div className="sm:col-span-2 grid sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-dashed border-saffron-300 bg-white">
                <CalendarDays size={24} className="text-saffron-500" />
                <div>
                  <p className="font-bold text-sacred-dark text-sm">Weekend Batches</p>
                  <p className="text-xs text-sacred-brown/60 mt-0.5">Special classes on Sat/Sun</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-dashed border-saffron-300 bg-white">
                <Laptop size={24} className="text-saffron-500" />
                <div>
                  <p className="font-bold text-sacred-dark text-sm">Online Live Classes</p>
                  <p className="text-xs text-sacred-brown/60 mt-0.5">Practice from home</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
