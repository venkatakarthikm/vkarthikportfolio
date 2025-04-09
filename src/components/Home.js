import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Github } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  const handleResumeClick = () => {
    // Replace with your resume PDF URL
    window.open('https://muchukarthik.onrender.com/resume.pdf', '_blank');
  };

  const handleGithubClick = () => {
    // Replace with your GitHub profile URL
    window.open('https://github.com/venkatakarthikm', '_blank');
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <motion.div
          className="profile-image"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="mkv.png"
            alt="Profile"
            className="rounded-full"
          />
        </motion.div>
        
        <motion.div
          className="content"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>MUCHU VENKATA KARTHIK</h1>
          <h2>Web Developer</h2>
          <p>
            A passionate web enthusiast with a keen eye for creating beautiful and functional web experiences.
            Dedicated to crafting clean, efficient code and staying current with the latest web technologies.
          </p>
          <div className="button-group">
            <button onClick={handleResumeClick} className="resume-btn">
              <FileDown className="icon" />
              Download Resume
            </button>
            <button onClick={handleGithubClick} className="github-btn">
              <Github className="icon" />
              GitHub Profile
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;