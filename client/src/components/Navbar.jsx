import React from 'react';
import { useSpring, animated } from 'react-spring'; // Import react-spring for animation
// Import icons (use actual icons when ready, or emojis as placeholders)
const Navbar = ({ theme, toggleTheme }) => {
  const ThemeIcon = theme === 'light' ? '🌙' : '☀️'; // Emoji toggle icon
  
  // Spring animation for 3D tilt effect on hover
  const [styles, set] = useSpring(() => ({
    transform: 'perspective(1500px) rotateX(0deg) rotateY(0deg)',
    config: { friction: 30, tension: 300 },
  }));

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (clientX - centerX) / 30;
    const deltaY = (clientY - centerY) / 30;

    set({ transform: `perspective(1500px) rotateX(${deltaY}deg) rotateY(${deltaX}deg)` });
  };

  const handleMouseLeave = () => {
    set({ transform: 'perspective(1500px) rotateX(0deg) rotateY(0deg)' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <a href="#hero" className="navbar-logo">
          Kaberere Mwaniki
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <animated.a
              href="#hero"
              className="nav-link"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={styles}
            >
              Home
            </animated.a>
          </li>
          <li className="nav-item">
            <animated.a
              href="#about"
              className="nav-link"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={styles}
            >
              About
            </animated.a>
          </li>
          <li className="nav-item">
            <animated.a
              href="#projects"
              className="nav-link"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={styles}
            >
              Projects
            </animated.a>
          </li>
          <li className="nav-item">
            <animated.a
              href="#contact"
              className="nav-link"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={styles}
            >
              Contact
            </animated.a>
          </li>
          <button
            onClick={toggleTheme}
            className="theme-toggle-button"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {ThemeIcon}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
