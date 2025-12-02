import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import placeholderImage from '../assets/CEO.jpg'; // Ensure path is correct
import { sectionVariants, staggerContainerVariants, itemVariants, textRevealContainer, textRevealWord } from '../animationVariants'; // Adjust path

const About = () => {
  return (
    <motion.section
      id="about"
      className="relative bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 py-24 px-4 overflow-hidden" // Increased padding
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Animate when section is in view
      viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
    >
      {/* More pronounced background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10">
        <div className="absolute w-[500px] h-[500px] bg-indigo-400 rounded-full blur-[200px] top-[-150px] left-[-150px] animate-pulse-slow" />
        <div className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-[180px] bottom-[-120px] right-[-120px] animate-pulse-slow animation-delay-2000" />
      </div>

      <motion.div
        className="container max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center relative z-10"
        variants={staggerContainerVariants(0.2)}
      >
        {/* Text Section (takes 3 columns on md) */}
        <motion.div
          className="md:col-span-3 bg-white/70 dark:bg-slate-800/60 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-2xl space-y-6 border border-gray-200 dark:border-slate-700" // More padding, larger radius
          variants={itemVariants} // Individual item animation
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6" // Added margin-bottom
            variants={textRevealContainer}
          >
            {"About Me".split(" ").map((word, i) => (
              <motion.span key={i} variants={textRevealWord} className="inline-block mr-3 bg-gradient-to-r from-indigo-500 to-dark-900 text-transparent bg-clip-text">
                {word}
              </motion.span>
            ))}
          </motion.h2>
          
          {[
            `Hey there! I’m <span class="font-semibold text-indigo-600 dark:text-indigo-400">Kaberere Mwaniki</span>, a Full-Stack Software Developer, Data Scientist, and AI/CyberSec Enthusiast driven by a passion for building tech that makes a difference.`,
            `My expertise spans <strong>React.js, Vue.js, React Native, Django, Flask</strong>, and even a touch of <strong>AngularJS</strong>. I dive deep into <strong>AI modeling, web scraping, and data cleaning</strong> — always coding toward smarter solutions.`,
            `I’ve presented on global stages like <strong>Roscongress (Russia)</strong>, <strong>Startup Africa (Ghana)</strong>, and the <strong>UN Conference at UON</strong>. Hackathons and innovation challenges fuel my fire.`,
            `As the <strong>Founder & CEO of CODEWORLD TECHNOLOGIES</strong>, I lead a team that builds impactful tech for startups, communities, and tomorrow’s problems.`,
          ].map((text, i) => (
            <motion.p
              key={i}
              className={`text-md md:text-lg leading-relaxed ${i === 0 ? 'text-xl' : ''}`} // Larger first paragraph
              variants={itemVariants} // Stagger paragraph appearance
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
          
          <motion.p
            className="italic text-sm text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-300 dark:border-slate-700"
            variants={itemVariants}
          >
            "Technology is not just my career — it's my language for solving problems and connecting with the world."
          </motion.p>
        </motion.div>

        {/* Image Section (takes 2 columns on md) */}
        <motion.div
          className="md:col-span-2 relative z-0 flex justify-center items-center" // Use z-0 to ensure text block shadow is above if overlapping slightly
          variants={itemVariants}
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.15} // Softer glare
            glareColor="#BE93FD" // Purple-ish glare
            glarePosition="all"
            tiltMaxAngleX={10} // More subtle tilt
            tiltMaxAngleY={10}
            scale={1.05} // Slight scale on tilt
            perspective={1000}
            transitionSpeed={2000}
            className="rounded-3xl overflow-hidden shadow-2xl w-full max-w-md border-4 border-indigo-300 dark:border-indigo-600 transform hover:shadow-indigo-500/40 dark:hover:shadow-indigo-400/30 transition-shadow duration-300"
          >
            <img
              src={placeholderImage}
              alt="Kaberere Mwaniki - CEO Profile"
              className="w-full h-auto object-cover"
            />
          </Tilt>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;

/* Add to your global CSS for pulse animation:
@keyframes pulse-slow {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.15; transform: scale(1.05); }
}
.animate-pulse-slow {
  animation: pulse-slow 8s infinite ease-in-out;
}
*/