import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import Lightning from './components/Lightning';
import './index.css';
import Meta from "./components/Meta";

function App() {
  // const [lightningPosition, setLightningPosition] = useState({ x: -100, y: -100 });
  // const [key, setKey] = useState(0);

  // const handleClick = (e) => {
  //   setLightningPosition({ x: e.clientX, y: e.clientY });
  //   setKey(prev => prev + 1);
  // };

  // useEffect(() => {
  //   const createRandomLightning = () => {
  //     setLightningPosition({
  //       x: Math.random() * window.innerWidth,
  //       y: Math.random() * (window.innerHeight * 0.3),
  //     });
  //     setKey(prev => prev + 1);
  //   };

  //   const interval = setInterval(() => {
  //     if (Math.random() < 0.7) createRandomLightning();
  //   }, Math.random() * 10000 + 5000);

  //   return () => clearInterval(interval);
  // }, []);


  useEffect(() => {
    // Add scroll event handler
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    // Prevent right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable key combinations for inspecting
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 'i' || e.key === 'I')) || e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I')
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    handleScroll(); // Initial check to apply visible class to sections already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="app" /*onClick={handleClick*/>
      {/* <Lightning key={key} position={lightningPosition} /> */}
      <Navbar />
      <Home />
      <Skills />
      <Education />
      <Projects />
      <Certificates />
      <Footer />
      <Meta />
    </div>
  );
}

export default App;
