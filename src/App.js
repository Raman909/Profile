import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home 
            isDarkMode={isDarkMode}
            onNavigateToProjects={() => setCurrentPage('projects')}
          />
        );
      case 'projects':
        return <Projects isDarkMode={isDarkMode} />;
      case 'certificates':
        return <Certificates isDarkMode={isDarkMode} />;
      case 'contact':
        return <Contact isDarkMode={isDarkMode} />;
      default:
        return <Home isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;