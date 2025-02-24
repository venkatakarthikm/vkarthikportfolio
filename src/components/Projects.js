import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import '../styles/Projects.css';

const projectsData = [
  {
    "title": "Cric Web",
    "description": "A cricket web app to track stats and matches.",
    "image": "https://muchukarthik.onrender.com/cricweb.png",
    "github": "https://github.com/user/cric-web",
    "live": "https://frontend-tcpo.onrender.com/",
    "tags": ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    "title": "Chat Web VK",
    "description": "A real-time chat application for seamless communication.",
    "image": "https://muchukarthik.onrender.com/chaatweb.png",
    "github": "https://github.com/user/chat-web-vk",
    "live": "https://chatwebvk.onrender.com",
    "tags": ["React", "Node.js", "MongoDB", "Express", "Sockets"]
  },
  {
    "title": "streamyfilm",
    "description": "A movie player for seamless streaming.",
    "image": "https://muchukarthik.onrender.com/mp.png",
    "github": "https://github.com/user/movie-player",
    "live": "https://streamyfilm.vercel.app",
    "tags": ["Movies", "Player", "Streaming"]
  },
  {
    "title": "Video Downloader",
    "description": "Download any video.",
    "image": "https://muchukarthik.onrender.com/videodownload.png",
    "github": "https://github.com/user/movie-player",
    "live": "https://videodownloader-svk8.onrender.com",
    "tags": ["Downloader", "Video Downloader"]
  },
  {
    "title": "Weather Flow",
    "description": "Get live weather Updates",
    "image": "wf.png",
    "github": "https://github.com/user/movie-player",
    "live": "https://weatherflow.onrender.com",
    "tags": ["Weather", "GeoLocation","Api"]
  },
  {
    "title": "Fourz Deals",
    "description": "ecommerce ",
    "image": "fd.png",
    "github": "https://github.com/user/movie-player",
    "live": "https://fourzdealshop.vercel.app",
    "tags": ["ecommerce", "Payment Gateway - paypal","MongoDB","Express"]
  },
  {
    "title": "Movie Player",
    "description": "A movie player for seamless streaming.",
    "image": "https://muchukarthik.onrender.com/mp.png",
    "github": "https://github.com/user/movie-player",
    "live": "https://moviezplayer.onrender.com",
    "tags": ["Movies", "Player", "Streaming"]
  },
  {
    "title": "ECO LEARN",
    "description": "Sustainability education platform.",
    "image": "https://muchukarthik.onrender.com/jfsdsdp.png",
    "github": "https://github.com/user/movie-player",
    "live": "https://jfsd-sustainability-education-orbm.onrender.com/",
    "tags": ["Sustainable", "Education", "ECO LEARN"]
  },
  {
    "title": "Rules App",
    "description": "Approve and reject rules between users.",
    "image": "https://muchukarthik.onrender.com/rules.png",
    "github": "https://github.com/user/movie-player",
    "live": "https://rulesfrontend.onrender.com",
    "tags": ["Rules", "React", "Spring"]
  },
  {
    "title": "CineDisco",
    "description": "Movie news and collection tracker.",
    "image": "https://muchukarthik.onrender.com/cinedisco.png",
    "github": "https://github.com/user/movie-player",
    "live": "https://cinedisco.vercel.app/",
    "tags": ["Movies", "Cinema", "Collections"]
  },
  {
    "title": "Yt Transcript",
    "description": "Transcription of YouTube videos.",
    "image": "https://muchukarthik.onrender.com/yttrans.png",
    "github": "https://github.com/user/movie-player",
    "live": "https://yttranscript-psyo.onrender.com",
    "tags": ["Transcript", "YouTube"]
  },
  {
    "title": "X Comments Checker",
    "description": "Compare users in the comment section.",
    "image": "https://muchukarthik.onrender.com/xcomments.png",
    "github": "https://github.com/user/movie-player",
    "live": "https://xcomments.onrender.com/",
    "tags": ["X", "Twitter", "Comments"]
  },
  {
    "title": "Verified Follower Counter",
    "description": "To check verified followers on Twitter(X).",
    "image": "https://muchukarthik.onrender.com/xfollow.png",
    "github": "https://github.com/user/movie-player",
    "live": "https://twitter-verified-follower-counter.onrender.com/",
    "tags": ["X", "Twitter", "Followers"]
  },
  {
    "title": "Twitter Engagement Checker",
    "description": "To check the engagement of a Twitter(X) profile.",
    "image": "https://muchukarthik.onrender.com/xengcheck.png",
    "github": "https://github.com/user/movie-player",
    "live": "https://mahesher-twitter-engagement-checker.onrender.com/",
    "tags": ["X", "Twitter", "Engagement"]
  },
  
  // Add more projects here
];

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github /> Code
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <ExternalLink /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 6);

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
      {projectsData.length > 6 && (
        <button className="load-more" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Load More'}
        </button>
      )}
    </section>
  );
};

export default Projects;