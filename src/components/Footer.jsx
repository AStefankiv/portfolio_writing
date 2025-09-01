// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#7c3aed",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-2 mt-20 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex space-x-6">
              <motion.a 
                href="/about" 
                className="text-gray-600"
                variants={linkVariants}
                whileHover="hover"
              >
                About
              </motion.a>
              <motion.a 
                href="/work" 
                className="text-gray-600"
                variants={linkVariants}
                whileHover="hover"
              >
                Work
              </motion.a>
              <motion.a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600"
                variants={linkVariants}
                whileHover="hover"
              >
                Resume
              </motion.a>
            </div>
          </div>
          
          <motion.div 
            className="text-center text-gray-500 max-w-2xl mx-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg">© {currentYear}, Andrii Stefankiv</p>
            <p className="text-base">Powered by love for tech, grammar, punctuation, Oxford commas, AI, and cats</p>
          </motion.div>
          
          <div className="flex flex-row items-center space-x-6">
            <motion.a 
              href="mailto:stefankif35@gmail.com" 
              className="text-gray-600 flex items-center"
              variants={linkVariants}
              whileHover="hover"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/andrii-stefankiv/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 flex items-center"
              variants={linkVariants}
              whileHover="hover"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;