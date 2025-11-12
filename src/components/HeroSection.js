import React from 'react';
import profilePic from './Profile.jpg';

const HeroSection = ({ isDarkMode, onNavigateToProjects }) => {
  return (
    <section className="hero-modern">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Left Side - Text Content */}
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-text">Hello, I'm</span>
            </div>
            
            <h1 className="hero-title">
              <span className="name-gradient">Raman Kumar Mishra</span>
            </h1>
            
            <h2 className="hero-subtitle">
              <span className="subtitle-text">Software Developer</span>
              <span className="subtitle-accent">& AI Enthusiast</span>
            </h2>
            
            <p className="hero-description">
              I’m a passionate Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning, driven by a deep curiosity 
              to explore how intelligent systems 
              can solve real-world problems. Alongside my AI/ML journey,
               I’ve gained hands-on experience in Full Stack Development and AIML, enabling me to build scalable, 
               end-to-end solutions that seamlessly connect data, intelligence, and user experience. 
            </p>
            
            {/* Action Buttons */}
            <div className="hero-actions">
              <button 
                className="btn-modern btn-primary-modern"
                onClick={() => onNavigateToProjects && onNavigateToProjects()}
              >
                <span className="btn-text">View My Work</span>
                <span className="btn-icon">→</span>
              </button>
              
              <a 
                href="https://github.com/Raman909" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-modern btn-secondary-modern"
              >
                <span className="btn-text">GitHub Profile</span>
                <span className="btn-icon">↗</span>
              </a>
            </div>
          </div>

          {/* Right Side - Profile Card */}
          <div className="hero-profile">
            <div className="profile-card-modern">
              <div className="card-glow"></div>
              
              <div className="profile-avatar-modern">
                <div className="avatar-bg">
                  <span className="avatar-bg-text">R.M</span>
                </div>
                <div className="avatar-content">
                  <img 
                    src={profilePic}
                    alt="Profile"
                    className="avatar-image"
                  />
                </div>
                <div className="avatar-ring"> R.M</div>
              </div>
              
              <div className="profile-info-modern">
                <h3 className="profile-name">Raman Kumar Mishra</h3>
                <p className="profile-title">Software Developer & AI Enthusiast</p>
                <p className="profile-location">📍 Noida, India</p>
                
                <div className="profile-stats">
                  <div className="stat-item">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Certificates</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                </div>
                
                <div className="social-links-modern">
                  <a 
                    href="https://github.com/Raman909" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link-modern"
                    title="GitHub"
                  >
                    <span className="social-icon-modern">📱</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/raman-mishra-80a703261/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link-modern"
                    title="LinkedIn"
                  >
                    <span className="social-icon-modern">💼</span>
                  </a>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ramanmishra25432543@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-modern"
                    title="Email"
                  >
                    <span className="social-icon-modern">📧</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
