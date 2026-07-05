import { Metadata } from 'next';
import { Package, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products | Vedic Power Yoga Academy',
  description: 'Coming soon - Vedic Power Yoga Academy products.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
      <div className="w-24 h-24 bg-saffron-50 rounded-full flex items-center justify-center mb-8 border border-saffron-100 shadow-sm animate-float">
        <Package size={40} className="text-saffron-500" />
      </div>
      
      <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-sacred-dark mb-6 tracking-tight">
        New Products <span className="text-gradient-gold">Coming Soon</span>
      </h1>
      
      <p className="text-sacred-brown/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
        We are working on something special. Check back later for our exclusive range of yoga and wellness products.
      </p>

      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-saffron-200 text-saffron-600 font-semibold text-sm shadow-sm">
        <Clock size={16} />
        Stay Tuned
      </div>
    </div>
  );
}
