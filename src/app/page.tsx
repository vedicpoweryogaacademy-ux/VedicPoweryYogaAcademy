import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import TrustBadges from '@/components/home/TrustBadges';
import StatsSection from '@/components/home/StatsSection';
import AboutPreview from '@/components/home/AboutPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProgramsPreview from '@/components/home/ProgramsPreview';
import HealthConditions from '@/components/home/HealthConditions';
import MeetFounder from '@/components/home/MeetFounder';
import TestimonialsPreview from '@/components/home/TestimonialsPreview';
import GalleryPreview from '@/components/home/GalleryPreview';
import ClassTimings from '@/components/home/ClassTimings';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Vedic Power Yoga Academy | Best Yoga Classes in Bengaluru',
  description:
    'Join Vedic Power Yoga Academy — Ministry of AYUSH recognized yoga center in Bengaluru. Expert classes in Ashtanga, Pranayama, Yoga Therapy, Kids & Corporate Yoga. 26+ years experience.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <StatsSection />
      <AboutPreview />
      <WhyChooseUs />
      <ProgramsPreview />
      <HealthConditions />
      <MeetFounder />
      <ClassTimings />
      <GalleryPreview />
      <TestimonialsPreview />
      <FinalCTA />
    </>
  );
}
