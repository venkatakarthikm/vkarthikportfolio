import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Education.css';

const educationData = [
  {
    year: '2022 - Present',
    degree: 'Bachelor Of Technology In Computer Science',
    institution: 'KONERU LAKSHMAIAH EDUCATION FOUNDATION',
    grade: 'CGPA: 9.35/10',
  },
  {
    year: '2022',
    degree: 'Board Of Intermediate Education',
    institution: 'SRI BASARA EDUCATIONAL INSTITUTIONS',
    grade: 'Percentage: 91%',
  },
  {
    year: '2020',
    degree: 'Board Of Secondary Education',
    institution: 'LORVENS SCHOOL',
    grade: 'CGPA: 9.8/10',
  },
];

// **New Component for Individual Education Item**
const EducationItem = ({ edu, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 0.8 }}
    >
      <div className="timeline-content">
        <div className="time">{edu.year}</div>
        <h3>{edu.degree}</h3>
        <h4>{edu.institution}</h4>
        <p className="grade">{edu.grade}</p>
        <p className="description">{edu.description}</p>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education Timeline</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <EducationItem key={index} edu={edu} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;
