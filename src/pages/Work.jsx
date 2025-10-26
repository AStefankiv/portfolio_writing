// src/pages/Work.js
import React from 'react';
import { motion } from 'framer-motion';
import WritingCard from '../components/WritingCard';
import thumbnail_nasa from '../assets/thumbnails/thumbnail_nasa.png';
import thumbnail_gitignore from '../assets/thumbnails/thumbnail_gitignore.png';
import thumbnail_communicate from "../assets/thumbnails/thumbnail_communicate.png";
import thumbnail_domain from "../assets/thumbnails/thumbnail_domain.png";
import thumbnail_espresso from "../assets/thumbnails/thumbnail_espresso.png";
import thumbnail_node_npm from "../assets/thumbnails/thumbnail_node_npm.png";
import thumbnail_google from "../assets/thumbnails/thumbnail_google.png";
import grammarGPT from '../assets/thumbnails/thumbnail_grammar_gpt.gif';
import medium_clone from '../assets/thumbnails/thumbnail_medium.png';
import twitter from '../assets/thumbnails/thumbnail_twitter.gif';
import thumbnail_ai_writing from '../assets/thumbnails/thumbnail_ai_writing.jpg'

const Work = () => {
  const writings = [
    {
      id: 1,
      title: "Get Started with NASA's API",
      description: "A concise guide to NASA's Astronomy Picture of the Day API, featuring step-by-step instructions and code examples for integrating daily space imagery into applications.",
      type: "Technical Writing",
      image: thumbnail_nasa,
      link: "https://github.com/AStefankiv/writing/blob/main/NASA_api_documentation.md"
    },
    {
      id: 2,
      title: "The Smart Way to Use AI for Writing",
      description: "Practical tips for using Grammarly Go, ChatGPT, and other AI assistants to enhance, but not replace your writing process.",
      type: "Content Writing",
      image: thumbnail_ai_writing,
      link: "https://github.com/AStefankiv/writing/blob/main/ai_for_writing.md"
    },
    {
      id: 3,
      title: "How to Configure a .gitignore File",
      description: "A concise guide on creating and managing .gitignore files to keep repositories clean and secure.",
      type: "Technical Writing",
      image: thumbnail_gitignore,
      link: "https://github.com/AStefankiv/writing/blob/main/how_to_configure_a_gitignore_file.md"
    },
    {
      id: 4,
      title: "Inside a Google Search: How It Works [Infographic]",
      description: "An infographic explaining the inner workings of Google Search, including crawling, indexing, and ranking.",
      type: "Content Writing",
      image: thumbnail_google,
      link: "https://github.com/AStefankiv/writing/blob/main/what_happens_when_you_google_something.md"
    },
    {
      id: 5,
      title: "Set Up a GitHub Page with a Custom Domain",
      description: "A step-by-step guide to deploying a personal website using GitHub Pages and a custom domain.",
      type: "Technical Writing",
      image: thumbnail_domain,
      link: "https://github.com/AStefankiv/writing/blob/main/set_up_a_github_page_with_a_custom_domain.md"
    },
    {
      id: 6,
      title: "Install and Configure Node.js + npm on Ubuntu 20.04",
      description: "A comprehensive guide to setting up Node.js and npm on Ubuntu 20.04 for web development.",
      type: "Technical Writing",
      image: thumbnail_node_npm,
      link: "https://github.com/AStefankiv/writing/blob/main/install_and_configure_node_%26_npm_on_ubuntu.md"
    },
    {
      id: 7,
      title: "How to Start Brewing Bulletproof Espresso at Home",
      description: "A comprehensive guide to brewing the perfect cup of Bulletproof Espresso at home.",
      type: "Content Writing",
      image: thumbnail_espresso,
      link: "https://github.com/AStefankiv/writing/blob/main/start_brewing_bulletproof_espresso.md"
    },
    {
      id: 8,
      title: "How to Communicate With Non-Fluent English Speakers",
      description: "A practical guide to clear, respectful communication with non-fluent English speakers.",
      type: "Content Writing",
      image: thumbnail_communicate,
      link: "https://github.com/AStefankiv/writing/blob/main/how_to_communicate_with_non-fluent_english_speakers.md"
    },
  ];

  const webProjects = [
    {
      id: 1,
      title: "Grammar GPT",
      description: "An AI-powered web app that corrects your English sentences, analyzes errors, and provides detailed explanations of your mistakes.",
      type: "Web Application",
      image: grammarGPT,
      link: "https://github.com/AStefankiv/chatgpt-grammar",
      technologies: ["OpenAI API", "React.js", "MongoDB", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Medium Clone",
      description: "A full-stack web application that replicates the functionality of https://medium.com/, allowing users to share knowledge through articles, engage with content, and interact with a community of writers and readers.",
      type: "Web Application",
      image: medium_clone,
      link: "https://github.com/AStefankiv/medium-clone",
      technologies: ["React.js", "Firebase", "Tailwind CSS", "HTML", "OAuth"]
    },
    {
      id: 3,
      title: "Twitter Clone",
      description: "A twitter clone project, to help students gain front-end dev chops. Starter (incomplete) code.",
      type: "Web Application",
      image: twitter,
      link: "https://github.com/AStefankiv/tweeter",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"]
    }
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className="pt-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h1 
          className="text-4xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A collection of my technical writing & content writing projects + web applications
        </motion.p>
        

        
        {/* Writing Portfolio Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >          
          <div className="space-y-10">
            {writings.map((writing, index) => (
              <motion.div key={writing.id} variants={itemVariants}>
                <WritingCard writing={writing} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Web Applications Portfolio Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 mt-18 pb-2 border-b border-green-200">
            My Web Applications Portfolio
          </h2>
          
          <div className="grid md:grid-cols-1 gap-8">
            {webProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                      {project.type}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <motion.a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-medium inline-flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Work;