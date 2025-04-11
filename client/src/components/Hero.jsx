import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white flex items-center justify-center px-4"
    >
      <div className="container max-w-4xl text-center space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-indigo-400">Kaberere Mwaniki</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A Passionate Software Developer Crafting Elegant, Scalable & Interactive Web Experiences.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:your@email.com" className="hover:text-indigo-400 transition">
            <FaEnvelope />
          </a>
        </motion.div>

        <motion.a
          href="#projects"
          className="inline-block mt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <button className="bg-indigo-500 hover:bg-indigo-600 transition text-white font-medium py-3 px-6 rounded-full shadow-lg">
            🚀 View My Work
          </button>
        </motion.a>

        <motion.div
          className="mt-6 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p>Skilled in: React · Node.js · Tailwind · MongoDB · Firebase · Docker</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
