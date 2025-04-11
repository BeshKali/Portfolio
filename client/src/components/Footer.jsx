import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gray-900 dark:bg-gray-900 py-8 transition-colors duration-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Social links */}
        <div className="flex space-x-6 text-gray-700 dark:text-gray-300">
          <a
            href="https://github.com/BeshKali/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 text-xl"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Footer text */}
        <div className="text-center md:text-right text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Kaberere Mwaniki. All Rights Reserved.</p>
          <p className="text-xs mt-1 opacity-70">Built with React & TailwindCSS 💻</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
