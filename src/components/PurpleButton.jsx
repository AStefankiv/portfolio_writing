// src/components/PurpleButton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PurpleButton = ({ children, href, onClick, className = '' }) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`btn-purple-gradient text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-purple transition-all duration-300 ${className}`}
      whileHover={{ 
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

export default PurpleButton;