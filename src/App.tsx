import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { FAQ } from './pages/FAQ';
import { PricingPage } from './pages/PricingPage';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isEmployerSection, setIsEmployerSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const employerSection = document.getElementById('employer-section');
      if (!employerSection) return;

      const rect = employerSection.getBoundingClientRect();
      // Change theme when employer section top is at or above 80px (navbar height)
      setIsEmployerSection(rect.top <= 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20 border-b transition-colors duration-500 ${isEmployerSection
      ? 'bg-[#fffbf0]/90 border-[#1c1917]/10 backdrop-blur-md'
      : 'glass border-theme-border/30'
      }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-2xl font-display font-bold tracking-tight hover:opacity-80 transition-all duration-500 ${isEmployerSection ? 'text-[#1c1917]' : 'text-theme-text'
            }`}
        >
          Odysly.
        </motion.a>

        {/* Center - Scroll Links (Replaces Toggle) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`hidden md:flex items-center rounded-full p-1 border backdrop-blur-md transition-colors duration-500 ${isEmployerSection
            ? 'bg-white/50 border-[#1c1917]/10'
            : 'bg-theme-surface/50 border-theme-border/50'
            }`}
        >
          <button
            onClick={() => scrollToSection('candidate-section')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isEmployerSection
              ? 'text-[#1c1917] hover:bg-[#1c1917]/5 hover:text-[#6366f1]'
              : 'hover:bg-theme-bg/50 hover:text-theme-primary'
              }`}
          >
            Talent
          </button>
          <button
            onClick={() => scrollToSection('employer-section')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isEmployerSection
              ? 'text-[#1c1917] hover:bg-[#1c1917]/5 hover:text-[#d97706]'
              : 'hover:bg-theme-bg/50 hover:text-theme-accent'
              }`}
          >
            Business
          </button>
        </motion.div>

        {/* Right - Nav Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-8"
        >
          <Link
            to="/faq"
            className={`text-sm font-medium transition-colors duration-500 ${isEmployerSection
              ? 'text-[#57534e] hover:text-[#1c1917]'
              : 'text-theme-text-muted hover:text-theme-text'
              }`}
          >
            FAQ
          </Link>
          {/* Removed Features link as requested */}
          <Link
            to="/pricing"
            className={`text-sm font-medium transition-colors duration-500 ${isEmployerSection
              ? 'text-[#57534e] hover:text-[#1c1917]'
              : 'text-theme-text-muted hover:text-theme-text'
              }`}
          >
            Pricing
          </Link>
          {/* Removed Login Button as requested */}
        </motion.div>

        {/* Mobile menu button placeholder */}
        <div className="md:hidden">
          <button className={`p-2 transition-colors duration-500 ${isEmployerSection ? 'text-[#57534e]' : 'text-theme-text-muted'
            }`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};


function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-theme-bg text-theme-text font-sans antialiased selection:bg-theme-primary selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
