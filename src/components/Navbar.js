import React from 'react';
import profilePic from './Profile.jpg'; // Import your photo

const Navbar = ({ currentPage, setCurrentPage, isDarkMode, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => {
          setCurrentPage('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          {/* Photo added in front of R.K Mishra */}
          <img 
            src={profilePic} 
            alt="Profile" 
            className="logo-photo" 
          />
          <span className="logo-text">R.K Mishra</span>
        </div>
        
        <div className="nav-links">
          <button 
            type="button"
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
            aria-current={currentPage === 'home' ? 'page' : undefined}
          >
            Home
          </button>
          <button 
            type="button"
            className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
            onClick={() => setCurrentPage('projects')}
            aria-current={currentPage === 'projects' ? 'page' : undefined}
          >
            Projects
          </button>
          <button 
            type="button"
            className={`nav-link ${currentPage === 'certificates' ? 'active' : ''}`}
            onClick={() => setCurrentPage('certificates')}
            aria-current={currentPage === 'certificates' ? 'page' : undefined}
          >
            Certificates
          </button>
          <button 
            type="button"
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => setCurrentPage('contact')}
            aria-current={currentPage === 'contact' ? 'page' : undefined}
          >
            Contact
          </button>
        </div>

        <div className="nav-actions">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
