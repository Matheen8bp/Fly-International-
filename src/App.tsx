import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ThemeToggle theme={theme} setTheme={setTheme} />
        <div className={`min-h-screen flex flex-col font-sans ${theme === 'dark' ? 'dark bg-[#0B090A] border-none' : 'bg-slate-50'} transition-colors duration-300`}>
          <div className="fixed inset-0 vector-bg pointer-events-none opacity-50 z-0"></div>
          
          <Navbar />
          <main className="relative z-10 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Floating WhatsApp Button */}
          <a 
            href="https://wa.me/919951335542"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 w-16 h-16 bg-white dark:bg-[#1F2937] text-slate-900 dark:text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-slate-50 dark:bg-[#1F2937] hover:scale-110 transition-all z-40 group border border-slate-200 dark:border-white/10"
          >
            <div className="absolute -top-12 right-0 bg-white dark:bg-[#1F2937] text-slate-900 dark:text-white px-4 py-2 rounded-xl text-xs font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-200 dark:border-white/10">
              Chat with us!
            </div>
            <svg 
              viewBox="0 0 24 24" 
              width="32" 
              height="32" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </a>
        </div>
      </Router>
  );
}
