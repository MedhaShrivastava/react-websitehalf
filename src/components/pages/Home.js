import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import About from "../About";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Footer />
    </>
  );
}

export default Home;