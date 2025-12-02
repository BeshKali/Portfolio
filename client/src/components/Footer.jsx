import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from 'react-icons/fa'; // Added FaArrowUp
import { motion } from 'framer-motion';
import { itemVariants, buttonHoverVariants } from '../animationVariants'; // Adjust path

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/BeshKali/", icon: FaGithub, label: "GitHub" },
    { href: "#", icon: FaLinkedin, label: "LinkedIn" }, // Replace # with actual LinkedIn
    { href: "#", icon: FaFacebook, label: "Facebook" }, // Replace # with actual Facebook
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="bg-slate-900 dark:bg-black py-10 md:py-12 text-gray-400 transition-colors duration-500 relative" // Darker footer, more padding
      initial={{ opacity: 0 }} // Simple fade-in for footer
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <motion.div
            className="flex space-x-6"
            variants={itemVariants} // Use itemVariants for a subtle pop
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-500 hover:text-indigo-400 transition-colors duration-300 text-2xl" // Larger icons
                whileHover={{ y: -3, scale: 1.2, color: "#818CF8" }} // #818CF8 is indigo-400
                whileTap={{ scale: 0.9 }}
              >
                <link.icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="text-center md:text-right text-sm"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0.2} // Slight delay
          >
            <p>© {currentYear} Kaberere Mwaniki. All Rights Reserved.</p>
            <p className="text-xs mt-1 opacity-80">
              Crafted with <span role="img" aria-label="love">❤️</span> using React, TailwindCSS & Framer Motion.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg z-40"
        aria-label="Scroll back to top"
        variants={buttonHoverVariants}
        initial={{ opacity: 0, y: 20, scale:0.8 }}
        animate={{ opacity: 1, y: 0, scale:1 }}
        exit={{ opacity: 0, y: 20, scale:0.8 }}
        whileHover="hover"
        whileTap="tap"
        transition={{ type: "spring", stiffness:300, damping:15 }}
      >
        <FaArrowUp size="1.2em"/>
      </motion.button>
    </motion.footer>
  );
};

export default Footer;