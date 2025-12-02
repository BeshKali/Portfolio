// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react'; // If using Swiper
// import 'swiper/css'; // If using Swiper
import { FaQuoteLeft } from 'react-icons/fa';
import { sectionVariants, itemVariants, staggerContainerVariants } from '../animationVariants';

const testimonialData = [
  { quote: "Kaberere is an incredibly talented developer...", author: "Satisfied Client", title: "CEO, Example Inc.", avatar: "path/to/avatar1.jpg" },
  { quote: "Working with Kaberere was a fantastic experience...", author: "Team Lead", title: "Tech Solutions LLC", avatar: "path/to/avatar2.jpg" },
];

const Testimonials = () => {
  return (
    <motion.section id="testimonials" /* ... */>
      <div className="container max-w-5xl mx-auto">
        <motion.h2 /* ... */>What Others Say</motion.h2>
        {/* Option 1: Grid Layout */}
        <motion.div className="grid md:grid-cols-2 gap-8 mt-12" variants={staggerContainerVariants()}>
          {testimonialData.map((testimonial, index) => (
            <motion.div key={index} className="bg-slate-50 dark:bg-slate-700/70 p-6 rounded-xl shadow-lg" variants={itemVariants}>
              <FaQuoteLeft className="text-indigo-400 text-3xl mb-4" />
              <p className="italic text-slate-600 dark:text-slate-300 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                {/* <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4"/> */}
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100">{testimonial.author}</h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Option 2: Swiper Carousel - would require Swiper setup */}
      </div>
    </motion.section>
  );
};
export default Testimonials;