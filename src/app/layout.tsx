import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Vedic Power Yoga Academy | Center for Vedic Culture, Bengaluru',
  description:
    'Vedic Power Yoga Academy — Ministry of AYUSH recognized yoga kendra in Bengaluru. 26+ years of expertise in Ashtanga Yoga, Pranayama, Yoga Therapy, Kids Yoga and Teacher Training. Founded by Shri Manjunath Sampath Guruji.',
  keywords: [
    'Yoga for Beginners',
    'Weight Loss',
    'Diabetes',
    'PCOD',
    'Thyroid',
    'Meditation',
    'Pranayama',
    'Corporate Yoga',
    'Kids Yoga',
    'Teacher Training',
    'Blog',
    'Events & Workshops',
    'yoga academy bengaluru',
    'vedic yoga',
    'ashtanga yoga',
    'yoga therapy',
    'yoga classes bengaluru',
    'guruji yoga'
  ],
  openGraph: {
    title: 'Vedic Power Yoga Academy | Bengaluru',
    description: 'Ancient wisdom. Modern science. Healthy body. Peaceful mind.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
      </head>
      <body className="bg-sacred-cream text-sacred-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
