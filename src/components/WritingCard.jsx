// src/components/WritingCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const WritingCard = ({ writing }) => {
  const isTechnical = writing.type === "Technical Writing";
  
  return (
    <motion.div 
      className={`p-6 rounded-lg border hover:shadow-lg transition-all duration-300 ${
        isTechnical 
          ? 'bg-purple-50 border-purple-100 hover:shadow-purple-100' 
          : 'bg-blue-50 border-blue-100 hover:shadow-blue-100'
      }`}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img 
            src={writing.image} 
            alt={writing.title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="md:w-2/3">
          <span className={`text-sm font-medium px-2 py-1 rounded-full ${
            isTechnical 
              ? 'bg-purple-100 text-purple-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {writing.type}
          </span>
          <h4 className="text-xl font-semibold text-gray-900 mt-3 mb-2">{writing.title}</h4>
          <p className="text-gray-600 mb-4">{writing.description}</p>
          <motion.a 
            href={writing.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-medium inline-flex items-center group ${
              isTechnical ? 'text-purple-gradient' : 'text-blue-gradient'
            }`}
            whileHover={{ x: 5 }}
          >
            {isTechnical ? 'View Project' : 'Read Article'}
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default WritingCard;