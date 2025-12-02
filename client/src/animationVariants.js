// src/animationVariants.js
import { useMotionValue } from 'framer-motion';

export const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      delay: custom * 0.1,
      duration: 0.8,
    },
  }),
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

export const staggerContainerVariants = (stagger = 0.15, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const cardHoverVariants = {
  rest: {
    scale: 1,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
  hover: {
    scale: 1.05, // Increased scale for more "pop"
    boxShadow: "0px 15px 35px rgba(0,0,0,0.2)", // More pronounced shadow
    zIndex: 10, // Bring card to front on hover
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

export const buttonHoverVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.08, // Slightly more bounce
    // Example: add a subtle glow with a CSS variable for your primary color
    // boxShadow: "0 0 20px 0px var(--color-primary-glow)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: {
    scale: 0.92
  }
};

// For animated text (word by word or letter by letter)
export const textRevealContainer = {
  hidden: { opacity: 1 }, // Container itself is visible
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04, // Speed of word/letter appearance
      delayChildren: 0.2,   // Initial delay before animation starts
    }
  }
};

export const textRevealWord = {
  hidden: { opacity: 0, y: 25, rotateX: -80, transformOrigin: "bottom" },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 250, damping: 15 } }
};

// For Navbar 3D tilt effect with Framer Motion (alternative to react-spring)
// You would use these in your Navbar component if you choose to switch from react-spring
export const useNav3DTiltFM = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const elWidth = rect.width;
    const elHeight = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Normalize mouse position to -0.5 to 0.5 range
    const normX = mouseX / elWidth - 0.5;
    const normY = mouseY / elHeight - 0.5;

    // Adjust sensitivity/rotation angle
    const rotateFactor = 15; // Max degrees of rotation
    x.set(normX * rotateFactor); // Will be rotateY
    y.set(-normY * rotateFactor); // Will be rotateX
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { x, y, handleMouseMove, handleMouseLeave };
};