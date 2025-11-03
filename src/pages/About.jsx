// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import victoria_bike from '../assets/victoria_bike.jpg';
import profile_1 from '../assets/profile_1.jpg';
import profile_2 from '../assets/profile_2.jpg';
import profile_3 from '../assets/profile_3.jpg';
import profile_4 from '../assets/profile_4.jpg';
import profile_5 from '../assets/profile_5.jpg';
import profile_6 from '../assets/profile_6.jpg';
import Lighthouse_Labs_Web_Development_DIPLOMA from '../assets/certificates/Lighthouse_Labs_Web_Development_DIPLOMA.png';
import tech_writing_certificate from '../assets/certificates/tech_writing_certificate.jpeg';
import celta from '../assets/certificates/celta.jpg';

const About = () => {
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

  const skillVariants = {
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
        {/* Introduction */}
        <motion.section 
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Greetings, my name is Andrii (Andrew)</h1>
          <p className="text-xl text-gray-600">I'm a technical & content writer with a background in <span className="text-purple-gradient-normal">education</span> and <span className="text-purple-gradient-normal">tech</span>, specializing in making complex topics accessible and engaging.</p>
        </motion.section>
        
        {/* My Story */}
        <motion.section 
          className="py-12 grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">My Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>My career path has always led me here. Maybe because my mom is an English teacher. In school, I looked up to teachers who explained things simply and made even tough ideas easy to understand. That love for clarity has stayed with me.</p>
              <p>I have worked in education for over ten years. As a teacher, my favorite moments were when confusion turned into understanding, and I saw the spark in a student’s eyes as they said, “Ohhh, I get it now!” That moment was always special.</p>
              <p>Writing gives me that same satisfaction. I enjoy breaking down tricky concepts, building step-by-step guides, and making complicated ideas clear and valuable. What excites me most is adapting information so it truly connects, whether the reader is a beginner, an expert, or somewhere in between.</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={victoria_bike}
                alt="Andrii Stefankiv" 
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </motion.section>
        
        {/* Certifications */}
        <motion.section 
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Certification 1 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">
                <img src={Lighthouse_Labs_Web_Development_DIPLOMA} alt="Lighthouse Labs Web Development Diploma" className="h-full" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Lighthouse Labs Web Development Diploma</h3>
              <p className="text-gray-600 text-sm">Lighthouse Labs, 2024</p>
            </motion.div>
            
            {/* Certification 2 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">
                <img src={tech_writing_certificate} alt="Technical Writing Certification" className="h-full" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Technical Writing Certificate</h3>
              <p className="text-gray-600 text-sm">Linked In Learning, 2025</p>
            </motion.div>
            
            {/* Certification 3 */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">
                <img src={celta} alt="CELTA Certification" className="h-full" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">CELTA (Certificate in Teaching English to Speakers of Other Languages)</h3>
              <p className="text-gray-600 text-sm">Cambridge University, 2021</p>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Writing Approach and Skills */}
        <motion.section 
          className="py-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Writing Approach and Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Technical Writing & Documentation",
                description: "I create step-by-step guides, FAQs, tutorials, and UI copy that make technical tools approachable and easy to use."
              },
              {
                title: "Development",
                description: "Hands-on experience with Next.js, TypeScript, JavaScript, Node.js, and Git/GitHub—skills that help me understand developers’ needs and write docs that actually make sense."
              },
              {
                title: "UI/UX Design",
                description: "Familiar with Ant Design, CSS libraries, and layout best practices. I focus on content that looks clean and supports usability instead of getting in the way."
              },
              {
                title: "Clarity & Structure",
                description: "I break down complex topics into clear explanations and organize content so readers can move through it naturally."
              },
              {
                title: "AI Tools",
                description: "I use AI selectively to polish and finalize my drafts—not to replace my own research, writing, or thinking."
              },
              {
                title: "Communication",
                description: "Over 10 years of ESL instruction taught me how to explain ideas to diverse audiences and collaborate with clients and teams effectively."
              },
              {
                title: "User Advocacy",
                description: "I always keep the reader in mind—anticipating their questions, smoothing out pain points, and writing with their perspective first."
              },
              {
                title: "Tools",
                description: "Comfortable with Microsoft Word, Adobe tools, and modern dev environments, which lets me switch easily between content, code, and design work."
              }
            ].map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg border border-gray-100"
                variants={skillVariants}
                whileHover="hover"
              >
                <h3 className="font-semibold text-gray-900 mb-3">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Beyond Work */}
        <motion.section 
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Beyond Work</h2>
          
          {/* Text in full width */}
          <div className="text-gray-700 space-y-4 mb-8">
            <p>My days start with a humble breakfast—bulletproof coffee. Another essential part of my day is staying active. Whether it’s hitting the gym, swimming laps, or going for a run, I need that physical outlet at least five times a week.</p>
            <p>I love nature, and whenever I get the chance, I drive to the Rocky Mountains. I never tire of those breathtaking views, regardless of the season. Living in Calgary means I’m lucky to be just one hour away from what other people cross half the world to see.</p>
            <p>You should also know that I’m a cat person. I love getting lost in a good book—Roald Dahl is my favorite author. In fact, I have two tattoos of characters from Fantastic Mr. Fox. And if you’re wondering about my drink of choice? A nice dry red wine, please.</p>
          </div>
          
          {/* Photos in 2 rows (3 columns on desktop, 2 on mobile) */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[profile_1, profile_2, profile_3, profile_4, profile_5, profile_6].map((profile, index) => (
              <motion.div 
                key={index}
                className="aspect-square rounded-lg overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={profile} 
                  alt={`Personal photo ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;