import type { Metadata } from 'next';
import { MessageCircleHeart, Star, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Success Stories & Reviews | Vedic Power Yoga Academy Bengaluru',
  description:
    'Read inspiring success stories and reviews from students of Vedic Power Yoga Academy. See how Guruji has transformed lives through authentic yoga therapy.',
};

export default function TestimonialsPage() {
  const reviews = [
    {
      name: 'Chandan Gowda',
      role: 'Student',
      text: 'Super yoga class by Guruji. All 4 days I feel very relaxed. He trains you based on your body fitness limits. Highly recommend his classes for anyone looking to start their yoga journey.',
      rating: 5,
    },
    {
      name: 'Nagarathna M',
      role: 'Student',
      text: 'One of the best yoga classes. Manjunath Guruji gives personal attention to every student. Very good environment for peace of mind. The morning batches are incredibly energizing.',
      rating: 5,
    },
    {
      name: 'Rashmi N',
      role: 'Yoga Therapy Patient',
      text: 'The best yoga kendra in this area. Within 3 months of joining, my back pain reduced significantly. Guruji is very dedicated and his knowledge of yoga therapy is profound.',
      rating: 5,
    },
    {
      name: 'Praveen Kumar',
      role: 'Corporate Professional',
      text: 'Joining Vedic Power Yoga Academy was the best decision for my stress management. The combination of Ashtanga and Pranayama has completely changed my approach to daily challenges.',
      rating: 5,
    },
    {
      name: 'Dr. Sudha Reddy',
      role: 'Yoga Therapy Patient',
      text: 'As a doctor, I appreciate Guruji\'s scientific approach to yoga. His therapy for my cervical spondylosis has been more effective than months of physiotherapy. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Arjun S.',
      role: 'TTC Graduate',
      text: 'Completed my 200hr Teacher Training Course here. The depth of knowledge provided in philosophy, anatomy, and practical alignment is unmatched. Grateful to Guruji.',
      rating: 5,
    },
    {
      name: 'Latha Srinivas',
      role: 'Student',
      text: 'My flexibility and stamina have doubled in just 6 months. The classes are disciplined yet very welcoming. Guruji makes sure you push your limits safely.',
      rating: 5,
    },
    {
      name: 'Vivek Sharma',
      role: 'Student',
      text: 'I travel 10kms just to attend this class because you cannot find this level of authentic teaching anywhere else. The focus is on holistic wellness, not just physical poses.',
      rating: 5,
    },
    {
      name: 'Meena K.',
      role: 'Yoga Therapy Patient',
      text: 'I came here for thyroid and weight issues. Guruji customized my practice, and within 4 months, my thyroid levels are stable and I feel much lighter and energetic.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron-200 bg-white text-saffron-600 text-xs font-semibold uppercase tracking-widest mb-6">
            <MessageCircleHeart size={14} />
            Student Stories
          </span>
          <h1 className="font-playfair text-5xl lg:text-7xl font-bold mb-6 text-sacred-dark tracking-tight">
            Transformations <span className="text-gradient-gold">Shared</span>
          </h1>
          <p className="text-sacred-brown/70 text-lg sm:text-xl max-w-2xl mx-auto font-light mb-8">
            Read what our students have to say about their journey with Guruji and the academy.
          </p>

          <div className="inline-flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-sm border border-saffron-50">
            <div className="text-5xl font-playfair font-bold text-sacred-dark mb-2">5.0</div>
            <div className="flex items-center gap-1 text-saffron-500 mb-2">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} size={20} fill="currentColor" />)}
            </div>
            <p className="text-sacred-brown/50 text-xs font-bold uppercase tracking-widest">Google Rating</p>
          </div>
        </div>
      </section>

      {/* ── Reviews Grid ── */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-saffron-50 hover:shadow-xl hover:border-saffron-200 transition-all duration-300 relative group"
              >
                <Quote size={40} className="text-saffron-500/10 absolute top-8 right-8 group-hover:text-saffron-500/20 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} size={14} className="text-saffron-500" fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-sacred-brown/80 text-base leading-relaxed italic mb-8 relative z-10 font-light">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-2xl bg-saffron-50 flex items-center justify-center text-saffron-600 font-playfair font-bold text-xl border border-saffron-100">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sacred-dark text-sm">{review.name}</p>
                    <p className="text-sacred-brown/50 text-[10px] font-bold uppercase tracking-wider mt-0.5">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
