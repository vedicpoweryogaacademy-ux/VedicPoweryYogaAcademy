'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Guruji' },
  { href: '/programs', label: 'Yoga Programs' },
  { href: '/therapy', label: 'Yoga Therapy' },
  { href: '/teachers', label: 'Our Teachers' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Success Stories' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(26,10,0,0.05)] border-b border-saffron-500/10 py-0'
            : 'bg-white border-b border-saffron-100 py-1'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            
            {/* Logo — left column */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0 whitespace-nowrap lg:w-[220px]">
              <div className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-full overflow-hidden ring-2 ring-saffron-100 group-hover:ring-saffron-400 transition-all duration-300 shadow-sm flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Vedic Power Yoga Academy Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-playfair font-bold text-sacred-dark text-sm leading-tight group-hover:text-saffron-600 transition-colors">
                  Vedic Power Yoga
                </p>
                <p className="text-sacred-brown/60 text-[10px] tracking-wider uppercase font-semibold">Center for Vedic Culture</p>
              </div>
            </Link>

            {/* Desktop Nav — center column, absolutely centered */}
            <div className="hidden lg:flex items-center justify-center gap-1 flex-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-[13px] font-semibold whitespace-nowrap rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-saffron-600 bg-saffron-50 shadow-sm'
                        : 'text-sacred-dark/70 hover:text-saffron-600 hover:bg-saffron-50/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Hamburger — right column */}
            <div className="flex items-center gap-3 flex-shrink-0 lg:w-[220px] justify-end">
              <Link
                href="/contact"
                id="nav-enroll-btn"
                className="hidden sm:inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-sacred-dark text-white font-semibold text-[13px] shadow-md hover:bg-saffron-600 hover:shadow-saffron-500/25 hover:scale-105 transition-all duration-300"
              >
                Book Trial
                <ChevronRight size={14} strokeWidth={2.5} />
              </Link>

              {/* Hamburger */}
              <button
                id="nav-menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-saffron-50 hover:bg-saffron-100 text-saffron-600 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-sacred-dark/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white border-l border-saffron-100 shadow-2xl flex flex-col transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-saffron-50">
            <div>
              <p className="font-playfair font-bold text-sacred-dark text-sm">Vedic Power Yoga</p>
              <p className="text-sacred-brown/60 text-[10px] tracking-wider uppercase font-semibold">Center for Vedic Culture</p>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-saffron-50 text-saffron-600 hover:bg-saffron-100 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-saffron-50 text-saffron-600 border border-saffron-100 shadow-sm'
                      : 'text-sacred-brown/80 hover:bg-saffron-50/50 hover:text-saffron-600'
                  }`}
                >
                  {link.label}
                  <ChevronRight size={16} className={isActive ? 'text-saffron-500' : 'text-sacred-brown/30'} />
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <div className="px-6 py-6 border-t border-saffron-50 space-y-3 bg-saffron-50/30">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-sacred-dark text-white font-bold text-sm shadow-lg hover:bg-saffron-600 transition-colors"
            >
              Book Free Trial
            </Link>
            <a
              href="https://wa.me/918050886649"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-green-50 text-green-600 font-bold text-sm border border-green-200 hover:bg-green-100 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
