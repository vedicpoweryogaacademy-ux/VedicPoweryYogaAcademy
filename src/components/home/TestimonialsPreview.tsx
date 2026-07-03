import Link from 'next/link';
import { Star, ArrowRight, Quote, MessageCircleHeart } from 'lucide-react';

export default function TestimonialsPreview() {
  const reviews = [
    {
      name: 'Chandan Gowda',
      text: 'Super yoga class by Guruji. All 4 days I feel very relaxed. He trains you based on your body fitness limits. Highly recommend his classes.',
      role: 'Student',
    },
    {
      name: 'Nagarathna M',
      text: 'One of the best yoga classes. Manjunath Guruji gives personal attention to every student. Very good environment for peace of mind.',
      role: 'Student',
    },
    {
      name: 'Rashmi N',
      text: 'The best yoga kendra in this area. Within 3 months of joining, my back pain reduced significantly. Guruji is very dedicated.',
      role: 'Yoga Therapy Patient',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-500/20 bg-saffron-50 text-saffron-700 text-xs font-semibold uppercase tracking-widest mb-4">
            <MessageCircleHeart size={14} className="text-saffron-500" />
            Student Stories
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-sacred-dark mt-2 mb-4">
            Transformations <span className="text-gradient-gold">Shared</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-saffron-500 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-sacred-brown/60 text-sm font-bold uppercase tracking-widest">
            5.0 Rating on Google
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-sacred-cream rounded-3xl p-8 border border-saffron-100 shadow-[0_4px_24px_rgba(26,10,0,0.04)] hover:shadow-sacred hover:border-saffron-300 transition-all duration-300 relative group"
            >
              <Quote size={40} className="text-saffron-500/10 absolute top-6 right-6 group-hover:text-saffron-500/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} className="text-saffron-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-sacred-brown/80 text-base leading-relaxed italic mb-8 relative z-10">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600 font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sacred-dark text-sm">{review.name}</p>
                  <p className="text-sacred-brown/50 text-xs font-semibold uppercase tracking-wider mt-0.5">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/testimonials"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-saffron-500 text-saffron-600 font-bold text-base hover:bg-saffron-500 hover:text-white transition-all duration-300 shadow-lg"
          >
            Read More Success Stories
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
