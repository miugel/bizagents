import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">bizagents.org</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {isHome ? (
              <>
                <button onClick={() => scrollToSection('features')} className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Services</button>
                <button onClick={() => scrollToSection('impact')} className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Impact</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Testimonials</button>
              </>
            ) : (
              <>
                <Link to="/#features" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Services</Link>
                <Link to="/#impact" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Impact</Link>
                <Link to="/#testimonials" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Testimonials</Link>
              </>
            )}
            <Link to="/about" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">About</Link>
            <Link to="/contact" className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-sm">Get Started</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4"
        >
          <Link to="/#features" onClick={() => setIsOpen(false)} className="block text-slate-600 font-medium">Services</Link>
          <Link to="/#impact" onClick={() => setIsOpen(false)} className="block text-slate-600 font-medium">Impact</Link>
          <Link to="/#testimonials" onClick={() => setIsOpen(false)} className="block text-slate-600 font-medium">Testimonials</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-slate-600 font-medium">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block bg-indigo-600 text-white px-5 py-2 rounded-full text-center font-medium">Get Started</Link>
        </motion.div>
      )}
    </nav>
  );
};
