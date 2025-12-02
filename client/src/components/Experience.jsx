import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaUsers, FaProjectDiagram } from 'react-icons/fa'; // More icon variety
import { RiMegaphoneFill } from "react-icons/ri";
import { sectionVariants, itemVariants, staggerContainerVariants } from '../animationVariants'; // Assuming these are defined

const experienceData = [
  {
    type: 'work',
    icon: <FaBriefcase />,
    title: 'Founder & CEO',
    company: 'CODEWORLD TECHNOLOGIES',
    date: '2021 - Present', // Replace 20XX with actual years
    description: [
      'Pioneered innovative software solutions, leading a dynamic team from project conception to successful deployment.',
      'Architected and developed scalable full-stack applications for diverse clients and community initiatives.',
      'Championed agile methodologies, ensuring timely delivery and high-quality product output.',
      'Fostered a culture of continuous learning and technological advancement within the company.'
    ],
    tags: ['Leadership', 'Full-Stack Dev', 'Agile', 'Product Strategy']
  },
  {
    type: 'presentation',
    icon: <RiMegaphoneFill />, // Changed icon
    title: 'Keynote Speaker',
    company: 'Roscongress, Russia',
    date: '2023', // Replace 20XX
    description: [
      'Presented on "The Future of AI in Emerging Markets," highlighting innovative applications and ethical considerations.',
      'Engaged with international leaders and tech enthusiasts on advancements in software development.'
    ],
    tags: ['Public Speaking', 'AI Ethics', 'Innovation', 'International Relations']
  },
  {
    type: 'community', // New type example
    icon: <FaUsers />,
    title: 'Tech Community Lead',
    company: 'Local Developer Group',
    date: '2020 - 2022',
    description: [
        'Organized and facilitated workshops on modern web technologies (React, Node.js).',
        'Mentored junior developers, fostering growth and skill development within the community.',
        'Grew community engagement by 150% through regular meetups and online events.'
    ],
    tags: ['Community Building', 'Mentorship', 'Event Organization', 'Web Technologies']
  },
  {
    type: 'education',
    icon: <FaGraduationCap />,
    title: 'B.Sc. in Computer Science',
    company: 'University of Nairobi (or your Uni)',
    date: '2017 - 2021', // Replace with your dates
    description: [
      'Specialized in Software Engineering and Artificial Intelligence.',
      'Graduated with First Class Honors (or your achievement).',
      'Active member of the university tech club, participating in several hackathons.'
    ],
    tags: ['Computer Science', 'AI', 'Software Engineering', 'Problem Solving']
  },
  // Add more experiences: other roles, significant projects
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-20 md:py-28 bg-white dark:white text-slate-800 dark:text-slate-800 px-4 overflow-hidden"
      // Added overflow-hidden to prevent horizontal scroll from animations if any edge cases
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container max-w-5xl mx-auto "> {/* Slightly wider container */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 md:mb-20"
          variants={itemVariants} // Simple variant for the title
        >
          My <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Journey</span>
        </motion.h2>

        <motion.div
          className="relative" // Removed mt-12, handled by mb on title
          variants={staggerContainerVariants(0.3, 0.2)} // Slower stagger for more impact
        >
          {/* Central timeline line - visible on MD and up */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1.5 bg-transparent rounded-full transform -translate-x-1/2 shadow-lg"></div>

          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 md:mb-16 flex group" // Added group for hover effects
              variants={itemVariants}
              // Custom prop for animation variants if needed: custom={index % 2 === 0 ? -1 : 1} for alternating slide-in
            >
              {/* Mobile: Icon and Date above card */}
              <div className="md:hidden flex flex-col items-center mr-4 pt-1">
                <div className="z-10 p-3 bg-indigo-500 dark:bg-indigo-600 text-white rounded-full shadow-lg text-xl mb-1">
                  {item.icon}
                </div>
                <div className="flex-grow w-0.5 bg-slate-300 dark:bg-slate-600"></div> {/* Connector line for mobile */}
              </div>

              {/* Desktop: Alternating layout */}
              <div className={`flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : 'md:flex-row text-left'}`}>
                {/* Icon & Connector for larger screens (Desktop) */}
                <div className="hidden md:flex flex-col items-center justify-center w-[15%] lg:w-[10%] px-2">
                  <motion.div
                    className="z-10 p-4 bg-indigo-500 dark:bg-indigo-600 text-white rounded-full shadow-xl text-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-indigo-400/50"
                    whileHover={{ rotate: [0, 10, -10, 0], transition: { duration: 0.5, repeat: Infinity, repeatType: "mirror" } }} // Subtle wiggle on icon hover
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Spacer for Desktop Timeline Alignment */}
                <div className="hidden md:block w-[35%] lg:w-[40%]"></div>


                {/* Content Card */}
                <motion.div
                  className="w-full md:w-[50%] bg-white dark:bg-slate-800 p-6 rounded-xl shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-400/10 border border-slate-200 dark:border-slate-700/80 transition-all duration-300 transform group-hover:-translate-y-1"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }} // Slide in from sides
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 mb-1">
                      {item.date}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold light:text-slate-800 dark:text-slate-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-md font-medium text-purple-600 dark:text-purple-400 mb-3">
                      {item.company}
                    </p>
                  </div>
                  <ul className={`space-y-1.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {item.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                         <span className={`mr-2 mt-1 text-indigo-500 ${index % 2 === 0 ? 'ml-auto md:mr-0 md:ml-2 order-last' : ''}`}>‣</span> {/* Custom bullet */}
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {item.tags && (
                    <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {item.tags.map(tag => (
                        <span key={tag} className="text-xs bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 px-2.5 py-1 rounded-full shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;