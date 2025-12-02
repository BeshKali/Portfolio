import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills'; 
import Testimonials from './components/Testimonials'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Theme State ('light' or 'dark')
  const [theme, setTheme] = useState(() => {
    // Check local storage or system preference on initial load
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (prefersDark ? 'dark' : 'light');
  });

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Effect to apply theme class to <html> element and save preference
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark-theme' : 'light-theme'); // Remove opposite
    root.classList.add(theme === 'light' ? 'light-theme' : 'dark-theme'); // Add current
    localStorage.setItem('theme', theme); // Save theme choice
  }, [theme]);

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Testimonials />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;