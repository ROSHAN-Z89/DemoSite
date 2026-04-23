import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'MENU', href: '/menu' },
  { name: 'BANQUET', href: '/banquet' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'CATERING', href: '/catering' },
  { name: 'VISITING HOURS', href: '/contact' },
  { name: 'MENU KIT', href: '/menu-kit' },
  { name: 'BOOK ONLINE', href: '/booking', primary: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        !isHomePage || isScrolled 
          ? 'bg-charcoal/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col items-start group">
          <span className="font-serif text-2xl tracking-tighter text-white group-hover:text-gold transition-colors">
            CHARCOAL & OAK
          </span>
          <span className="text-[10px] tracking-[0.3em] text-gold/80 font-sans uppercase">
            Upscale Grillhouse
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-xs font-semibold tracking-widest transition-colors',
                link.primary
                  ? 'bg-gold hover:bg-white text-charcoal px-5 py-2 rounded-none transition-all duration-300'
                  : cn(
                      'text-white/80 hover:text-gold',
                      location.pathname === link.href && 'text-gold'
                    )
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-charcoal shadow-2xl border-t border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-sm font-semibold tracking-widest p-2 border-b border-white/5 transition-colors',
                    link.primary ? 'text-gold' : 'text-white/70 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex items-center space-x-4 text-gold">
                <Phone size={18} />
                <span className="text-sm font-sans">+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
