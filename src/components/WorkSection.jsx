// src/components/WorkSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const WorkSection = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Work
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Technical Writing - Purple Theme */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-purple-gradient mb-6 pb-2 border-b border-purple-200">Technical Writing</h3>
            
            <div className="space-y-6">
              {/* Project 1 */}
              <motion.div 
                className="p-6 bg-purple-50 rounded-lg border border-purple-100 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Get Started with NASA’s API</h4>
                <p className="text-gray-600 mb-4">A concise guide to NASA's Astronomy Picture of the Day API, featuring step-by-step instructions and code examples for integrating daily space imagery into applications.</p>
                <motion.a 
                  href="https://github.com/AStefankiv/writing/blob/main/NASA_api_documentation.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-gradient font-medium inline-flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </motion.div>
              
              {/* Project 2 */}
              <motion.div 
                className="p-6 bg-purple-50 rounded-lg border border-purple-100 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">How to Configure a .gitignore File</h4>
                <p className="text-gray-600 mb-4">A concise guide on creating and managing .gitignore files to keep repositories clean and secure.</p>
                <motion.a 
                  href="https://github.com/AStefankiv/writing/blob/main/how_to_configure_a_gitignore_file.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-gradient font-medium inline-flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </motion.div>

              {/* Project 3 */}
              <motion.div 
                className="p-6 bg-purple-50 rounded-lg border border-purple-100 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Set Up a GitHub Page with a Custom Domain</h4>
                <p className="text-gray-600 mb-4">A step-by-step guide to deploying a personal website using GitHub Pages and a custom domain.</p>
                <motion.a
                  href="https://github.com/AStefankiv/writing/blob/main/set_up_a_github_page_with_a_custom_domain.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-gradient font-medium inline-flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </motion.div>

              {/* Project 4 */}
              <motion.div 
                className="p-6 bg-purple-50 rounded-lg border border-purple-100 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Install and Configure Node.js + npm on Ubuntu 20.04</h4>
                <p className="text-gray-600 mb-4">A comprehensive guide to setting up Node.js and npm on Ubuntu 20.04 for web development.</p>
                <motion.a
                  href="https://github.com/AStefankiv/writing/blob/main/install_and_configure_node_%26_npm_on_ubuntu.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-gradient font-medium inline-flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content Writing - Blue Theme */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-blue-gradient mb-6 pb-2 border-b border-blue-200">Content Writing</h3>
            
            <div className="space-y-6">

            {/* Article 1 */}
              <motion.div 
                className="p-6 bg-blue-50 rounded-lg border border-blue-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Inside a Google Search: How It Works [Infographic]</h4>
                <p className="text-gray-600 mb-4">An infographic explaining the inner workings of Google Search, including crawling, indexing, and ranking.</p>
                <motion.a
                  href="https://github.com/AStefankiv/writing/blob/main/what_happens_when_you_google_something.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-gradient font-medium inline-flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  Read Article
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </motion.div>

              {/* Article 2 */}
              <motion.div 
                className="p-6 bg-blue-50 rounded-lg border border-blue-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">How to Contribute to Open Source</h4>
                <p className="text-gray-600 mb-4">A beginner-friendly technical content guide explaining open source, GitHub, and contribution workflows.</p>
                <motion.a
                  href="https://github.com/AStefankiv/writing/blob/main/how_to_contribute_to_open_source.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-gradient font-medium inline-flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  Read Article
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </motion.div>

              {/* Article 3 */}
              <motion.div
                className="p-6 bg-blue-50 rounded-lg border border-blue-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">How to Communicate With Non-Fluent English Speakers</h4>
                <p className="text-gray-600 mb-4">A practical guide to clear, respectful communication with non-fluent English speakers.</p>
                <motion.a 
                  href="https://github.com/AStefankiv/writing/blob/main/how_to_communicate_with_non-fluent_english_speakers.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-gradient font-medium inline-flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  Read Article
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </motion.div>
              
              {/* Article 4 */}
              <motion.div 
                className="p-6 bg-blue-50 rounded-lg border border-blue-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Start Brewing Bulletproof Espresso at Home</h4>
                <p className="text-gray-600 mb-4">A comprehensive guide to brewing the perfect cup of Bulletproof Espresso at home.</p>
                <motion.a 
                  href="https://github.com/AStefankiv/writing/blob/main/start_brewing_bulletproof_espresso.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-gradient font-medium inline-flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  Read Article
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;