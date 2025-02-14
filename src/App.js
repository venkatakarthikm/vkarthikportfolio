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
    </div>
  );
}

export default App;
