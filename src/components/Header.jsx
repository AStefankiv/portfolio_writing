// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const fullText = 'Andrii Stefankiv—Technical & Content Writer';
  const typingSpeed = 100;
  const deletingSpeed = 80;
  const pauseTime = 2000;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleTyping = () => {
      setCurrentIndex(isDeleting ? currentIndex - 1 : currentIndex + 1);
      
      if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    setDisplayText(fullText.substring(0, currentIndex));

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, fullText]);

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="/" 
          className="text-xl font-bold text-purple-gradient relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {displayText}
          <span className="typing-cursor">|</span>
        </motion.a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <motion.a 
            href="/" 
            className="text-gray-600 hover:text-purple-gradient transition-all duration-300"
            variants={linkVariants}
            whileHover="hover"
          >
            Home
          </motion.a>
          <motion.a 
            href="/about" 
            className="text-gray-600 hover:text-purple-gradient transition-all duration-300"
            variants={linkVariants}
            whileHover="hover"
          >
            About
          </motion.a>
          <motion.a 
            href="/work" 
            className="text-gray-600 hover:text-purple-gradient transition-all duration-300"
            variants={linkVariants}
            whileHover="hover"
          >
            Work
          </motion.a>
          <motion.a 
            href="/Andrii_Stefankiv_Resume_Technical_Writer.pdf"
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-purple-gradient transition-all duration-300"
            variants={linkVariants}
            whileHover="hover"
          >
            Resume
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/andrii-stefankiv/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-purple-gradient text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-purple transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Connect
          </motion.a>
        </nav>
        
        {/* Mobile menu button */}
        <motion.button 
          className="md:hidden text-gray-600"
          whileTap={{ scale: 0.95 }}
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className="fixed top-0 right-0 h-full w-64 bg-purple-50 shadow-lg md:hidden"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex justify-end p-4">
          <motion.button 
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>
        <div className="flex flex-col items-center space-y-8 mt-10">
          <motion.a 
            href="/" 
            className="text-gray-600 text-lg hover:text-purple-gradient transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            onClick={toggleMenu}
          >
            Home
          </motion.a>
          <motion.a 
            href="/about" 
            className="text-gray-600 text-lg hover:text-purple-gradient transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            onClick={toggleMenu}
          >
            About
          </motion.a>
          <motion.a 
            href="/work" 
            className="text-gray-600 text-lg hover:text-purple-gradient transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            onClick={toggleMenu}
          >
            Work
          </motion.a>
          <motion.a 
            href="/Andrii_Stefankiv_Resume_Technical_Writer.pdf"
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 text-lg hover:text-purple-gradient transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            onClick={toggleMenu}
          >
            Resume
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-purple-gradient text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-purple transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
          >
            Connect
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;