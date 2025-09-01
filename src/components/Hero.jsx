// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import andriiImage from '../assets/andrii_point.png';

const Hero = () => {
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

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5
      }
    }
  };

  return (
    <section className="min-h-[85vh] flex items-center px-6 -mt-4">
      <div className="container mx-auto grid md:grid-cols-4 gap-10 items-center">
        {/* Text content - 3 parts */}
        <motion.div 
          className="md:col-span-3 space-y-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
        >
          The writer who makes complex ideas clear—
          <span className="text-purple-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
            with a pinch of human soul.
          </span>
        </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Hi, I’m Andrii (Andrew). I’m a technical and content writer—and yes, I actually know how to use an em dash. Coming from <span className="text-purple-gradient-normal">teaching</span> and <span className="text-purple-gradient-normal">software development</span>, I make complex ideas feel clear and approachable, even to someone who’d rather skip the manual.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-3"
          >
            <motion.a 
              href="https://www.linkedin.com/in/andrii-stefankiv/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              whileHover={{ 
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Connect on LinkedIn
            </motion.a>
            <motion.a 
              href="/work" 
              className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              whileHover={{ 
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              See my work
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Image - 1 part */}
        <motion.div 
          className="md:col-span-1 relative flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-purple-100 transform rotate-3">
            <img 
              src={andriiImage}
              alt="Andrii Stefankiv" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;