import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // 3D tilt effect for cards
import placeholderProject1 from '../assets/careconnect.png';

const projectsData = [
  {
    id: 1,
    title: "Modern Portfolio Website",
    description: "This very portfolio, built with React, featuring theme switching, CSS animations, and 3D hover effects.                 ",
    imageUrl: placeholderProject1,
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "E-commerce Platform UI",
    description: "A sleek front-end design for an online store, focusing on user experience and responsive layout.",
    imageUrl: placeholderProject1,
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Interactive Data Dashboard",
    description: "A web application displaying complex data using charts and graphs, built with React and a data visualization library.",
    imageUrl: placeholderProject1,
    liveUrl: "#",
    repoUrl: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative light:bg-white dark:bg-gray-800/60  text-gray-800 dark:text-gray-900 py-20 px-4"
    >
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-indigo-600 dark:text-indigo-900 dark:bg-gray-800/60">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.25}
                glareColor="#ffffff"
                glarePosition="all"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                className="rounded-2xl overflow-hidden light:bg-white/70 dark:bg-gray-800/60 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <img
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-900">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.repoUrl && project.repoUrl !== "#" && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
