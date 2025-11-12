import React from 'react';
import HeroSection from '../components/HeroSection';
import '../components/HeroSection.css';

const Home = ({ isDarkMode, onNavigateToProjects }) => {
  return (
    <div className="home">
      <HeroSection 
        isDarkMode={isDarkMode} 
        onNavigateToProjects={onNavigateToProjects}
      />

      <section className="about">
        <div className="about-background">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I’m a dedicated Computer Science Engineering student at MIET, Noida, with a deep passion for Artificial Intelligence and Machine Learning. Currently pursuing my B.Tech in CSE (AIML), 
                I’ve developed a strong foundation in both theoretical and practical aspects of intelligent systems. Through my internships with Google Cloud and Eduskills Academy,
                 I’ve gained valuable hands-on experience working on real-world projects that strengthened my understanding of AI-driven technologies.
              </p>
              <p>
               My technical expertise extends across Full Stack Development, Cloud Computing, and AI/ML technologies, where I focus on creating solutions that merge innovation with functionality. I enjoy building responsive, user-focused web applications, 
               designing efficient architectures, and exploring how intelligent systems can simplify everyday challenges.
              </p>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages</h3>
                <div className="skills">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">HTML/CSS</span>
                  <span className="skill-tag">MongoDB</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Frameworks & Tools</h3>
                <div className="skills">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Google Cloud</span>
                  <span className="skill-tag">VS Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;