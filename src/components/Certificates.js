import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';
import '../styles/Certificates.css';

const certificatesData = [
  {
    "id": 1,
    "title": "AUTOMATION ANYWHERE CERTIFIED ESSENTIALS RPA PROFESSIONAL",
    "issuer": "AUTOMATION ANYWHERE",
    "date": "July 25, 2024",
    "image": "https://muchukarthik.onrender.com/aacer1.png",
    "verifyUrl": "https://certificates.automationanywhere.com/12ded5a8-2051-4f46-90b3-ce6b94cd64ce#acc.J3vEandY"
  },
  {
    "id": 2,
    "title": "Red Hat Certified Enterprise Application Developer",
    "issuer": "Red Hat",
    "date": "Dec 23, 2024",
    "image": "https://muchukarthik.onrender.com/rdhat.png",
    "verifyUrl": "https://udemy.com/certificate/123"
  },
  {
    "id": 3,
    "title": "Salesforce Certified AI Associate",
    "issuer": "Salesforce",
    "date": "Oct 20, 2024",
    "image": "https://muchukarthik.onrender.com/salesforce.png",
    "verifyUrl": "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=GecERbEq0QRu2bG1yV1ihQTRHp/oq8BaTsbTSz0cMjrFHAfzhwLahw2/yO03Bef7"
  },
  // Add more certificates
];

const CertificateCard = ({ certificate, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="certificate-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="certificate-image">
        <img src={certificate.image} alt={certificate.title} />
      </div>
      <div className="certificate-content">
        <h3>{certificate.title}</h3>
        <p>{certificate.issuer}</p>
        <p className="date">{certificate.date}</p>
        <a
          href={certificate.verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="verify-btn"
        >
          <Award /> Verify Certificate
        </a>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {certificatesData.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;