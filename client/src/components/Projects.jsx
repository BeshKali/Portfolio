import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import placeholderProject1 from '../assets/careconnect.png'; // Ensure path is correct
import placeholderProject2 from '../assets/dashboard.png';
import placeholderProject3 from '../assets/ElementUI.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Icons for links
import { sectionVariants, staggerContainerVariants, itemVariants, textRevealContainer, textRevealWord } from '../animationVariants'; // Adjust path
// Removed cardHoverVariants as it's not directly used on motion.div wrapper in this version

const projectsData = [
  {
    id: 1,
    title: "Modern telemedicine Website",
    description: "This very telemedicine platform, built with React & Tailwind CSS, featuring smooth animations, 3D effects, and a responsive design.",
    imageUrl: placeholderProject1, // Replace with actual project image
    tags: ["React", "TailwindCSS", "Framer Motion", "Vite"],
    liveUrl: "https://care-connect-sage.vercel.app", // Actual live URL
    repoUrl: "#", // Actual repo URL
  },
  {
    id: 2,
    title: "Platform UI",
    description: "A sleek front-end for an online store, focused on intuitive UX, dynamic product displays, and a fully responsive layout.",
    imageUrl: placeholderProject3, // Replace
    tags: ["React", "Redux", "Styled Components", "Stripe API"],
    liveUrl: "https://care-connect-sage.vercel.app",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Interactive Data Dashboard",
    description: "A web app visualizing complex datasets with interactive charts and graphs, built with React and D3.js for powerful insights.",
    imageUrl: placeholderProject2, // Changed pink placeholder to a purple one
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    liveUrl: "https://mifugosmart.vercel.app",
    repoUrl: "#",
  },
  // Add more projects...
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="relative bg-gray-100 dark:bg-dark-900 text-gray-800 dark:text-gray-100 py-24 px-4"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container  max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
          variants={textRevealContainer}
        >
           {"My ".split("").map((char, i) => (
            <motion.span key={i} variants={textRevealWord} className="inline-block">
              {char}
            </motion.span>
          ))}
          
          <span className="bg-gradient-to-r from-indigo-500 to-purple-900 text-transparent bg-clip-text">
             {"Projects".split("").map((char, i) => (
                <motion.span key={i} variants={textRevealWord} className="inline-block">
                  {char}
                </motion.span>
              ))}
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
          variants={staggerContainerVariants(0.1, 0.2)}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="project-card-wrapper h-full" // Added h-full for consistency if Tilt doesn't fill
              variants={itemVariants} // Individual card entrance
              // whileHover and initial/animate for cardHoverVariants were removed as Tilt handles hover effects.
              // If you want Framer Motion hover effects ON TOP of Tilt, you can re-add them.
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor="#ffffff"
                glarePosition="all"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.03}
                perspective={1200}
                transitionSpeed={1500}
                className="h-full rounded-2xl overflow-hidden bg-white dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl dark:hover:shadow-purple-500/20 transition-all duration-300 flex flex-col group"
                // Added 'group' for potential group-hover effects on children if needed later
                // Added a subtle dark mode hover shadow: dark:hover:shadow-purple-500/20
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.imageUrl}
                    alt={`${project.title} screenshot`}
                    className="w-full h-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" // Added group-hover:scale-105 for image zoom
                  />
                   {/* Changed overlay to be slightly more visible on hover for better effect with image zoom */}
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {project.tags && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-indigo-100 dark:bg-indigo-900/70 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-200 dark:border-slate-700">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium transition-colors duration-300"
                        whileHover={{ scale: 1.05, x: 1 }} // Slightly more subtle hover
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                      </motion.a>
                    )}
                    {project.repoUrl && project.repoUrl !== "#" && (
                      <motion.a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium transition-colors duration-300"
                        whileHover={{ scale: 1.05, x: 1 }} // Slightly more subtle hover
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="mr-2" /> View Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;