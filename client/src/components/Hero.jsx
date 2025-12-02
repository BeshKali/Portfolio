import React, { useCallback } from 'react'; // Import useCallback
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles"; // Import Particles
import { loadFull } from "tsparticles"; // Import the full engine

import { sectionVariants, staggerContainerVariants, textRevealContainer, textRevealWord, buttonHoverVariants, itemVariants } from '../animationVariants'; // Adjust path as needed

const Hero = () => {
  const name = "Kaberere Mwaniki";
  const tagline = "A Passionate Software Developer Crafting Elegant, Scalable & Interactive Web Experiences.";

  // Callback function to initialize tsparticles engine
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine); // useful for debugging
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's a sample, you can load Bundles/Plugins separately too
    await loadFull(engine);
  }, []);

  // Optional: if you want to check if particles are loaded
  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

  const particleOptions = {
    // We'll style the container with CSS, so fullScreen: false
    fullScreen: {
        enable: false, // Set to false to contain particles within the Hero section
        // zIndex: 0 // Controlled by the wrapper div's z-index
    },
    particles: {
      number: {
        value: 60, // Adjust for desired density
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#A5B4FC", "#C4B5FD", "#FBCFE8"], // Indigo, Purple, Pink tints
      },
      shape: {
        type: "circle", // "star" or ["circle", "triangle", "star"] for variety
      },
      opacity: {
        value: { min: 0.2, max: 0.7 },
        animation: {
          enable: true,
          speed: 0.8,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 3.5 },
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 0.5,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 130,
        color: "rgba(165, 180, 252, 0.4)", // Light indigo with opacity for links
        opacity: 0.4,
        width: 1,
        triangles: { // Add subtle triangles between links for more visual complexity
            enable: true,
            color: "rgba(139, 92, 246, 0.1)", // Very subtle purple
            opacity: 0.05
        }
      },
      move: {
        enable: true,
        speed: 1.5, // Slightly slower for a more "floaty" feel
        direction: "none",
        random: true,
        straight: false,
        outModes: { // Changed from out_mode
            default: "out",
        },
        attract: {
          enable: false, // Keep false unless you want a gravity point
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detectsOn: "canvas", // Changed from detect_on
      events: {
        onHover: { // Changed from onhover
          enable: true,
          mode: "repulse", // "grab" or "bubble" are also nice
        },
        onClick: { // Changed from onclick
          enable: true,
          mode: "push", // "push" adds particles, "remove" removes them
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 180,
          links: { // Changed from line_linked
            opacity: 0.8,
          },
        },
        bubble: {
          distance: 200,
          size: 6,
          duration: 1,
          opacity: 0.8,
        },
        repulse: {
          distance: 120,
          duration: 0.4,
          speed: 0.5
        },
        push: {
          quantity: 3, // Changed from particles_nb
        },
        remove: {
          quantity: 2, // Changed from particles_nb
        },
      },
    },
    detectRetina: true,
    // Ensures the particle canvas background is transparent to see the gradient
    background: {
        color: 'transparent',
    },
  };


  return (
    <motion.section
      id="hero"
      className="hero min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white flex items-center justify-center px-4 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Particle Container */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Particles
            id="tsparticles-hero"
            init={particlesInit}
            // loaded={particlesLoaded} // Optional: if you defined particlesLoaded
            options={particleOptions}
            // className="w-full h-full" // Ensure it fills the div if needed, but options usually handle it
        />
      </div>

      {/* Moving Blobs - ensure they are above particles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob z-1"
        animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0], scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 z-1"
        animate={{ x: [0, -15, 10, 0], y: [0, 20, -10, 0], scale: [1, 0.95, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />


      <motion.div
        className="container max-w-4xl text-center space-y-8 z-10" // Content is z-10 (above particles and blobs)
        variants={staggerContainerVariants(0.2, 0.3)}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
          variants={textRevealContainer}
        >
          {"Hi, I'm ".split(" ").map((word, index) => (
            <motion.span key={index} variants={textRevealWord} className="inline-block mr-2 md:mr-3">
              {word}
            </motion.span>
          ))}
          <span className="text-indigo-400">
            {name.split(" ").map((word, index) => (
              <motion.span key={index} variants={textRevealWord} className="inline-block mr-2 md:mr-3">
                {word}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
          variants={textRevealContainer}
        >
          {tagline.split(" ").map((word, index) => (
            <motion.span key={index} variants={textRevealWord} className="inline-block mr-1.5">
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          className="flex justify-center gap-8 text-3xl"
          variants={staggerContainerVariants(0.15)}
        >
          {[
            { href: "https://github.com/yourusername", icon: FaGithub, label: "GitHub" },
            { href: "https://linkedin.com/in/yourprofile", icon: FaLinkedin, label: "LinkedIn" },
            { href: "mailto:your@email.com", icon: FaEnvelope, label: "Email" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.label !== "Email" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-125"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.2, color: "#818cf8" }}
              whileTap={{ scale: 0.9 }}
              aria-label={item.label}
            >
              <item.icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#projects"
          className="inline-block mt-6"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-indigo-500/50 transition-all duration-300 text-lg"
            variants={buttonHoverVariants}
          >
            🚀 View My Work
          </motion.button>
        </motion.a>

        <motion.div
          className="mt-8 text-md text-gray-400"
          variants={itemVariants}
        >
          <p>Skilled in: React · Node.js · Tailwind · MongoDB · Firebase · Docker</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

/* 
  No additional CSS needed for the particle container itself if the absolute positioning
  and w-full h-full classes are used as above. The `z-index` values are key:
  - Particle container: z-0 (background)
  - Blobs: z-1 (middle ground, above particles)
  - Main content: z-10 (foreground, above everything else in this section)

  The blob animation CSS from the previous step should still be in your global CSS.
*/