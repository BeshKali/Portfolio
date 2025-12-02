// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Icon Imports (ensure these are correct and cover the skills listed)
import {
  FaReact, FaNodeJs, FaDatabase, FaDocker, FaGitAlt, FaPython,
  FaJsSquare, FaHtml5, FaCss3Alt, FaVuejs, FaAngular, FaAws, FaLinux, FaFigma,
  FaBrain, FaSearchDollar // For AI/Scraping - can be changed
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiFirebase, SiDjango, SiFlask, SiTypescript,
  SiGraphql, SiKubernetes, SiSolidity, SiEthereum // Added SiSolidity & SiEthereum for Web3
} from 'react-icons/si';
// If you found specific icons for C#, .NET, PHP, Laravel, add their imports here
// e.g., import { DiDotnet } from 'react-icons/di';

import { sectionVariants, staggerContainerVariants, itemVariants } from '../animationVariants';

// Define your skills with categories and icons
const skillsData = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", icon: <FaReact size="3em" className="text-sky-400" />, level: "Advanced" },
      { name: "React Native", icon: <FaReact size="3em" className="text-sky-600" />, level: "Intermediate" }, // Differentiate slightly
      { name: "JavaScript (ES6+)", icon: <FaJsSquare size="3em" className="text-yellow-400" />, level: "Advanced" },
      { name: "Tailwind CSS", icon: <SiTailwindcss size="3em" className="text-cyan-500" />, level: "Advanced" },
      { name: "HTML5", icon: <FaHtml5 size="3em" className="text-orange-500" />, level: "Advanced" },
      { name: "CSS3 / SASS", icon: <FaCss3Alt size="3em" className="text-blue-600" />, level: "Advanced" },
      { name: "Vue.js", icon: <FaVuejs size="3em" className="text-green-500" />, level: "Intermediate" },
      { name: "AngularJS", icon: <FaAngular size="3em" className="text-red-600" />, level: "Intermediate" }, // From About
      // { name: "Framer Motion", icon: <motion.div className="text-purple-500"> <FaReact size="3em"/> </motion.div>, level: "Intermediate" }
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: <FaNodeJs size="3em" className="text-green-600" />, level: "Advanced" },
      { name: "Python", icon: <FaPython size="3em" className="text-blue-400" />, level: "Advanced" }, // For Django, Flask, AI
      { name: "Django", icon: <SiDjango size="3em" className="text-green-700" />, level: "Intermediate" },
      { name: "Flask", icon: <SiFlask size="3em" className="text-gray-700 dark:text-gray-300" />, level: "Intermediate" },
      // Add C#, .NET, PHP, Laravel here if you have them, with correct icons
      // { name: "C# & .NET", icon: <SiDotnet size="3em" className="text-purple-600" />, level: "Beginner" },
      // { name: "GraphQL", icon: <SiGraphql size="3em" className="text-pink-600" />, level: "Intermediate" },
    ],
  },
  {
    category: "Databases & DevOps",
    items: [
      { name: "MongoDB", icon: <SiMongodb size="3em" className="text-green-500" />, level: "Advanced" },
      { name: "Firebase", icon: <SiFirebase size="3em" className="text-yellow-500" />, level: "Advanced" },
      { name: "SQL", icon: <FaDatabase size="3em" className="text-sky-600" />, level: "Intermediate" },
      { name: "Docker", icon: <FaDocker size="3em" className="text-blue-500" />, level: "Intermediate" },
      { name: "Git & GitHub", icon: <FaGitAlt size="3em" className="text-orange-600" />, level: "Advanced" },
      // { name: "AWS (EC2, S3, Lambda)", icon: <FaAws size="3em" className="text-orange-500" />, level: "Beginner" },
      // { name: "Kubernetes", icon: <SiKubernetes size="3em" className="text-blue-700" />, level: "Beginner" },
      { name: "Linux/Unix Shell", icon: <FaLinux size="3em" className="text-yellow-300" />, level: "Advanced" },
    ],
  },
  {
    category: "Data Science & AI", // From About
    items: [
      { name: "AI Modeling", icon: <FaBrain size="3em" className="text-pink-400" />, level: "Intermediate" },
      { name: "Web Scraping", icon: <FaSearchDollar size="3em" className="text-teal-500" />, level: "Advanced" },
      { name: "Data Cleaning", icon: <FaDatabase size="3em" className="text-purple-400" />, level: "Advanced" }, // Reusing database or use a more specific one
      { name: "Python (for DS)", icon: <FaPython size="3em" className="text-yellow-500" />, level: "Advanced" }, // Specifically for DS context
    ],
  },
  {
    category: "Web3 & Blockchain", // NEW CATEGORY
    items: [
      { name: "Solidity", icon: <SiSolidity size="3em" className="text-gray-500 dark:text-gray-400" />, level: "Beginner" }, // Example level
      { name: "Ethereum", icon: <SiEthereum size="3em" className="text-indigo-500" />, level: "Intermediate" },
      { name: "Smart Contracts", icon: <FaGitAlt size="3em" className="transform rotate-90 text-teal-400" />, level: "Intermediate" }, // Placeholder icon
      // Add more specific Web3 tech: Hardhat, Truffle, ethers.js, web3.js, IPFS, etc.
    ],
  },
  // {
  //   category: "Design & Other Tools",
  //   items: [
  //     { name: "Figma", icon: <FaFigma size="3em" className="text-pink-500" />, level: "Intermediate" },
  //   ],
  // },
];

const skillCardVariants = {
  rest: {
    scale: 1,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
  hover: {
    scale: 1.05,
    y: -5,
    boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
    transition: { type: "spring", stiffness: 300, damping: 15 }
  }
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 md:py-24 light:bg-white dark:bg-dark-900 text-slate-800 dark:text-slate-100 px-4"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
          variants={itemVariants}
        >
          My Technical <span className="bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">Skills</span>
        </motion.h2>

        <motion.div variants={staggerContainerVariants(0.2, 0.3)}>
          {skillsData.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-12 last:mb-0"
              variants={itemVariants}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center md:text-left text-indigo-600 dark:text-indigo-400">
                {skillCategory.category}
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
                variants={staggerContainerVariants(0.1)}
              >
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group bg-slate-50 dark:bg-slate-700/70 rounded-xl p-5 text-center cursor-default border border-transparent dark:border-slate-600/50"
                    variants={skillCardVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <div className="flex justify-center items-center mb-3 text-5xl transition-transform duration-300 ease-out group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <h4 className="text-md font-semibold text-slate-700 dark:text-slate-200 mb-1">
                      {skill.name}
                    </h4>
                    {skill.level && (
                       <p className="text-xs text-indigo-500 dark:text-indigo-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.level}
                       </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;