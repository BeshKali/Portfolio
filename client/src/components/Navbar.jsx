import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { motion, AnimatePresence } from 'framer-motion'; // For mobile menu animation
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'; // Icons for theme and menu

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isScrolled, setIsScrolled] = useState(false);

  // Spring animation for 3D tilt effect on desktop nav links
  const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 20, // For X-axis rotation (tilts up/down)
    (x - rect.left - rect.width / 2) / 20,  // For Y-axis rotation (tilts left/right)
    1.05                                    // Scale
  ];
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 170, friction: 26, precision: 0.01 }
  }));

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Smooth scroll utility
  const smoothScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsOpen(false); // Close mobile menu on navigation
  };

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const menuVariants = {
    closed: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.1 } }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -15 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
                 ${isScrolled || isOpen ? 'bg-slate-900/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Increased height */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('hero'); }}
            className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            K<span className="text-indigo-400">.</span>Mwaniki
          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-2"> {/* Reduced space-x */}
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <animated.a
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); smoothScrollTo(link.id); }}
                  className="nav-link px-4 py-2 text-gray-300 hover:text-indigo-300 rounded-md transition-colors duration-300 text-sm font-medium" // Adjusted padding & style
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    set({ xys: calc(e.clientX, e.clientY, rect) });
                  }}
                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                  style={{ transform: props.xys.to(trans) }}
                >
                  {link.label}
                </animated.a>
              </li>
            ))}
            <li>
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-300 hover:text-indigo-300 hover:bg-slate-700/50 transition-all"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                whileHover={{ scale: 1.2, rotate: theme === 'light' ? 180 : -180 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'light' ? <FaMoon size="1.2em"/> : <FaSun size="1.2em"/>}
              </motion.button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <motion.button
                onClick={toggleTheme}
                className="p-2 mr-2 rounded-full text-gray-300 hover:text-indigo-300 hover:bg-slate-700/50 transition-all"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                whileHover={{ scale: 1.2, rotate: theme === 'light' ? 180 : -180 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'light' ? <FaMoon size="1.2em"/> : <FaSun size="1.2em"/>}
              </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-indigo-300 focus:outline-none p-2"
              aria-label="Open main menu"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isOpen ? 'times' : 'bars'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <FaTimes size="1.5em" /> : <FaBars size="1.5em" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-slate-900/95 dark:bg-gray-900/95 backdrop-blur-sm absolute w-full shadow-xl pb-4"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="flex flex-col items-center space-y-3 pt-2">
              {navLinks.map((link) => (
                <motion.li key={link.id} variants={menuItemVariants}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); smoothScrollTo(link.id); }}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-indigo-300 hover:bg-slate-700/50 transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;