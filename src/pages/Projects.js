import React from 'react';

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      id: 1,
      name: "Focus-on-Today",
      description: "A responsive task management web application that enables users to create, update, and complete daily goals efficiently. Features real-time progress tracking and localStorage for persistent data management.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Raman909/Focus-on-Today",
      live: "https://focus-on-today2543.netlify.app",
      status: "Completed"
    },
    {
      id: 2,
      name: "To-Do-App",
      description: "A secure and user-friendly **To-Do App** with login authentication that allows users to add, manage, and complete their daily tasks efficiently.",
      tech: ["React", "Firebase", "Mongo.db", "Express","Node"],
      github: "https://github.com/Raman909/To-Do-App",
      live: "https://to-do-app909.netlify.app/",
      status: "In Progress"
    },
    {
      id: 3,
      name: "Diabetes-Predictor",
      description: "A machine learning web app that predicts the likelihood of diabetes based on key health indicators like glucose, BMI, and insulin levels. Built using Python and Flask for fast, accurate medical insights.",
      tech: ["React", "Flask", "ML", "Python"],
      github: "https://github.com/Raman909/diabetes-predict",
      live: "https://diabetes-predict909.netlify.app/",
      status: "Completed"
    },
    {
      id: 4,
      name: "HousePrice-Predictor",
      description: "A full-stack house price prediction application using React.js (frontend), Flask (backend), and an XGBoost machine learning model. Users can enter property details to get accurate house price predictions in USD.",
      tech: ["React", "CSS", "Flask", "Python","Google Collab"],
      github: "https://github.com/Raman909/HousePrice-Predictor",
      live: "https://houseprice-predictor909.netlify.app/",
      status: "Completed"
    },
    {
      id: 5,
      name: "JustifAi – AI-Based Lawyer",
      description: "JustifAi is an AI-powered legal assistant that summarizes legal PDFs and predicts custody or compensation outcomes using a Flask–React architecture.",
      tech: ["React", "Python", "Flask", "ML"],
      github: "https://github.com/Raman909/JustivAi",
      live: "https://notworkingin.netlify.app/",
      status: "In Progress"
    },
    // {
    //   id: 6,
    //   name: "Smart Home IoT Controller",
    //   description: "A web-based IoT controller for smart home devices. Features real-time device monitoring, automation rules, and energy consumption tracking with mobile responsiveness.",
    //   tech: ["React", "Node.js", "MQTT", "Raspberry Pi"],
    //   github: "https://github.com/Raman/smart-home-controller",
    //   live: "https://raman-smart-home.netlify.app",
    //   status: "Completed"
    // }
  ];

  return (
    <div className="projects">
      <div className="projects-background">
        <div className="container">
        <div className="page-header">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <span className="link-icon">📱</span>
                  GitHub
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link live-link"
                >
                  <span className="link-icon">🌐</span>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>Want to see more?</h3>
          <p>Check out my GitHub profile for additional projects and contributions.</p>
          <a 
            href="https://github.com/Raman909" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View All Projects on GitHub
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;