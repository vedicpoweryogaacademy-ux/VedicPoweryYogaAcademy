export type GalleryCategory = 'All' | '6th National Conclave' | 'Yoga for Kids' | 'Poses' | 'Events' | 'Awards' | 'Academy' | 'Meditation';

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

export const galleryImages: GalleryImage[] = [
  // 6th National Conclave Yoga
  { src: '/images/conclave/conclave-01.jpg', alt: '6th National Yoga Conclave, Bengaluru', category: '6th National Conclave' },
  { src: '/images/conclave/conclave-02.jpg', alt: '6th National Yoga Conclave, Bengaluru', category: '6th National Conclave' },
  { src: '/images/conclave/conclave-03.jpg', alt: '6th National Yoga Conclave, Bengaluru', category: '6th National Conclave' },
  { src: '/images/conclave/conclave-04.jpg', alt: '6th National Yoga Conclave, Bengaluru', category: '6th National Conclave' },
  { src: '/images/conclave/conclave-05.jpg', alt: '6th National Yoga Conclave, Bengaluru', category: '6th National Conclave' },
  { src: '/images/conclave/conclave-06.jpg', alt: '6th National Yoga Conclave, Bengaluru', category: '6th National Conclave' },
  { src: '/images/conclave/conclave-07.jpg', alt: '6th National Yoga Conclave, Bengaluru', category: '6th National Conclave' },
  { src: '/images/conclave/conclave-08.jpg', alt: '6th National Yoga Conclave, Bengaluru', category: '6th National Conclave' },
  
  // Yoga for Kids
  { src: '/images/kids/kids-01.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-02.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-03.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-04.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-05.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-06.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-07.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-08.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-09.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-10.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-11.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-12.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-13.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-14.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-15.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-16.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-17.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-18.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  { src: '/images/kids/kids-19.jpg', alt: 'Kids Yoga Session', category: 'Yoga for Kids' },
  
  // Existing Images
  { src: '/images/pose-warrior.jpg', alt: 'Advanced warrior pose by Guruji', category: 'Poses' },
  { src: '/images/pose-sunset.jpg', alt: 'Meditation at sunset', category: 'Meditation' },
  { src: '/images/pose-lotus.jpg', alt: 'Padmasana (Lotus Pose)', category: 'Poses' },
  { src: '/images/event-idy2026.jpg', alt: 'International Yoga Day Event', category: 'Events' },
  { src: '/images/award-ayush.jpg', alt: 'Ministry of AYUSH Recognition', category: 'Awards' },
  { src: '/images/pose-namaste.jpg', alt: 'Namaste Pose', category: 'Poses' },
  { src: '/images/pose-kneeling.jpg', alt: 'Kneeling stretch pose', category: 'Poses' },
  { src: '/images/pose-meditation.jpg', alt: 'Deep meditation', category: 'Meditation' },
  { src: '/images/pose-prone.jpg', alt: 'Prone backbend pose', category: 'Poses' },

  { src: '/images/academy-banner.jpg', alt: 'Academy banner', category: 'Academy' },

  // New Event Images
  { src: '/images/event-whatsapp-01.jpg', alt: 'Yoga Event', category: 'Events' },
  { src: '/images/event-whatsapp-02.jpg', alt: 'Yoga Event', category: 'Events' },
  { src: '/images/event-whatsapp-03.jpg', alt: 'Yoga Event', category: 'Events' },
  { src: '/images/event-whatsapp-04.jpg', alt: 'Yoga Event', category: 'Events' },
  { src: '/images/event-whatsapp-05.jpg', alt: 'Yoga Event', category: 'Events' },
  { src: '/images/event-whatsapp-06.jpg', alt: 'Yoga Event', category: 'Events' },
  { src: '/images/event-whatsapp-07.jpg', alt: 'Yoga Event', category: 'Events' },
  { src: '/images/event-whatsapp-08.jpg', alt: 'Yoga Event', category: 'Events' },
];
