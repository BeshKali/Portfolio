import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    fetch('http://localhost:3001/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('There was an issue sending your message.');
        }
      })
      .catch((err) => {
        console.error(err);
        setStatus('There was an issue sending your message.');
      });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-300 dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="rounded-lg border border-gray-300 dark:border-gray-600 p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="rounded-lg border border-gray-300 dark:border-gray-600 p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              required
              rows="5"
              className="rounded-lg border border-gray-300 dark:border-gray-600 p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'Sending...'}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50"
          >
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-300">{status}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
