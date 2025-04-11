import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import placeholderImage from '../assets/CEO.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {/* Optional subtle background effect */}
        <div className="absolute w-96 h-96 bg-indigo-400 rounded-full blur-[180px] top-[-100px] left-[-100px]" />
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full blur-[180px] bottom-[-100px] right-[-100px]" />
      </div>

      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-20">
        {/* Text Section */}
        <motion.div
          className="bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-lg leading-relaxed">
            Hey there! I’m <span className="font-semibold text-indigo-700 dark:text-indigo-400">Kaberere Mwaniki</span>, a Full-Stack Software Developer, Data Scientist, and AI/CyberSec Enthusiast driven by a passion for building tech that makes a difference.
          </p>
          <p className="text-md">
            My expertise spans <strong>React.js, Vue.js, React Native, Django, Flask</strong>, and even a touch of <strong>AngularJS</strong>. I dive deep into <strong>AI modeling, web scraping, and data cleaning</strong> — always coding toward smarter solutions.
          </p>
          <p className="text-md">
            I’ve presented on global stages like <strong>Roscongress (Russia)</strong>, <strong>Startup Africa (Ghana)</strong>, and the <strong>UN Conference at UON</strong>. Hackathons and innovation challenges fuel my fire.
          </p>
          <p className="text-md">
            As the <strong>Founder & CEO of CODEWORLD TECHNOLOGIES</strong>, I lead a team that builds impactful tech for startups, communities, and tomorrow’s problems.
          </p>
          <p className="italic text-sm text-gray-600 dark:text-gray-400">
            "Technology is not just my career — it's my language for solving problems and connecting with the world."
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.25}
            glareColor="#ffffff"
            glarePosition="all"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.03}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-indigo-200 dark:border-indigo-500"
          >
            <img
              src={placeholderImage}
              alt="Kaberere Mwaniki - CEO Profile"
              className="w-full h-auto object-cover"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
