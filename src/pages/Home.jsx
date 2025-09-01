// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import WorkSection from '../components/WorkSection';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <AboutSection />
      <WorkSection />
    </div>
  );
};

export default Home;