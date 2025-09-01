// src/components/AboutSection.js
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Bringing Clarity to Complex Topics
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Clean, clear, and approachable information — that’s what I aim for. My writing puts the reader first, making sure technical details are accurate but never overwhelming. My readers are both my students and my audience.
          </motion.p>
          
          <motion.ul 
            className="space-y-6 mb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.li 
              className="flex items-start"
              variants={itemVariants}
            >
              <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-gray-700">
                My background in teaching and mentoring adults has shaped how I write: I aim for explanations that are straightforward, grammatically sound, and easy to follow.
              </p>
            </motion.li>
            
            <motion.li 
              className="flex items-start"
              variants={itemVariants}
            >
              <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-gray-700">
                I enjoy breaking down technical concepts into smaller, manageable parts. The goal isn’t to oversimplify but to make sure people at different levels—whether beginners or experts—can learn something useful.
              </p>
            </motion.li>
            
            <motion.li 
              className="flex items-start"
              variants={itemVariants}
            >
              <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-gray-700">
                I approach every project with careful research and attention to the audience. The result is documentation that’s not only correct but genuinely helpful to the people who rely on it.
              </p>
            </motion.li>
          </motion.ul>
          
          <motion.a 
            href="/about" 
            className="inline-flex items-center text-purple-600 font-semibold group"
            whileHover={{ 
              color: "#7c3aed",
              x: 5
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            More about me
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;