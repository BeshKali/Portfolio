import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sectionVariants, staggerContainerVariants, itemVariants, buttonHoverVariants, textRevealContainer, textRevealWord } from '../animationVariants'; // Adjust path
import { FaPaperPlane } from 'react-icons/fa'; // Icon for send button

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus('Please correct the errors.');
      return;
    }
    setStatus('Sending...');
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2;
      if (isSuccess) {
        setStatus('Message sent successfully! I\'ll be in touch soon.');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setStatus('Oops! Something went wrong. Please try again or email me directly.');
      }
    }, 2000);
  };

  const inputFieldVariants = {
    focus: {
      borderColor: "rgb(99 102 241)", // Tailwind indigo-500
      boxShadow: "0 0 0 3px rgb(165 180 252 / 0.5)", // Tailwind indigo-300 with opacity
      transition: { duration: 0.2, ease: "circOut" }
    },
    blur: {
      borderColor: "rgb(203 213 219)", // Tailwind gray-300 (for light mode)
      // Dark mode initial border is dark:border-slate-600 from commonInputClasses
      boxShadow: "0 0 0 0px rgb(165 180 252 / 0)",
      transition: { duration: 0.2, ease: "circOut" }
    }
  };

  const commonInputClasses = `
    w-full p-3.5 rounded-lg 
    bg-slate-50 dark:bg-slate-700/60 
    text-slate-800 dark:text-slate-100 
    placeholder-slate-400 dark:placeholder-slate-500 
    border border-slate-300 dark:border-slate-600 
    focus:outline-none 
    transition-all duration-300 ease-in-out
  `;

  return (
    <motion.section
      id="contact"
      className="py-24 light:bg-gray-100 dark:bg-dark-900 transition-colors duration-500 px-4"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center light:text-slate-800 dark:text-dark-900 mb-12" // Use slate for better consistency
          variants={textRevealContainer}
        >
           {"Get In ".split("").map((char, i) => (
            <motion.span key={i} variants={textRevealWord} className="inline-block">
              {char}
            </motion.span>
          ))}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
             {"Touch".split("").map((char, i) => (
                <motion.span key={i} variants={textRevealWord} className="inline-block">
                  {char}
                </motion.span>
              ))}
          </span>
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-white shadow-2xl rounded-2xl p-8 md:p-10 space-y-6 transition-colors duration-300 border border-transparent hover:border-indigo-500/20"
          variants={staggerContainerVariants(0.1, 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            { id: "name", label: "Name", type: "text", placeholder: "Your Name" },
            { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
            { id: "message", label: "Message", type: "textarea", placeholder: "Your message here...", rows: 5 },
          ].map((field) => (
            <motion.div key={field.id} className="flex flex-col" variants={itemVariants}>
              {/* UPDATED LABEL COLORS */}
              <label 
                htmlFor={field.id} 
                className="dark:bg-slate-900 text-dark-900 dark:text-dark-900 font-medium mb-2"
              >
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <motion.textarea
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  rows={field.rows}
                  className={`${commonInputClasses} ${errors[field.id] ? 'border-red-500 focus:border-red-500' : ''}`}
                  variants={inputFieldVariants}
                  whileFocus="focus"
                  initial="blur"
                />
              ) : (
                <motion.input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className={`${commonInputClasses} ${errors[field.id] ? 'border-red-500 focus:border-red-500' : ''}`}
                  variants={inputFieldVariants}
                  whileFocus="focus"
                  initial="blur"
                />
              )}
              {errors[field.id] && <p className="text-red-500 text-xs mt-1">{errors[field.id]}</p>}
            </motion.div>
          ))}

          {/* UPDATED BUTTON STYLING */}
          <motion.button
            type="submit"
            disabled={status === 'Sending...'}
            className={`
              w-full flex items-center justify-center gap-3 
              font-semibold py-3.5 px-6 rounded-lg 
              text-lg shadow-md hover:shadow-lg 
              transition-all duration-300 
              disabled:opacity-60 disabled:cursor-not-allowed 
              focus:outline-none focus:ring-2 focus:ring-offset-2 
              dark:focus:ring-offset-slate-800
              bg-indigo-600 hover:bg-indigo-700 text-white 
              dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:text-white 
              focus:ring-indigo-400 dark:focus:ring-indigo-500
            `}
            // Using distinct bg colors for light/dark, text-white ensures visibility
            variants={buttonHoverVariants} // Framer motion can still enhance this
            whileHover="hover" // Ensure this doesn't override Tailwind hover bg if not desired
            whileTap="tap"
          >
            {status === 'Sending...' ? (
              <>
                <motion.div 
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                  aria-label="Loading spinner"
                />
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </motion.button>

          {status && status !== 'Sending...' && (
            <motion.p
              className={`text-center text-sm mt-4 p-3 rounded-md ${
                status.includes('successfully') ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                status.includes('error') || status.includes('Oops') ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                'text-slate-600 dark:text-slate-400'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;