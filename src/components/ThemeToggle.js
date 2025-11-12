import React, { useEffect, useState } from 'react';

function ThemeToggle() {
	const [theme, setTheme] = useState(() => {
		const saved = localStorage.getItem('theme');
		return saved || 'dark';
	});

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : 'dark');
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle theme">
			{theme === 'light' ? '🌙 Dark' : '☀️ Light'}
		</button>
	);
}

export default ThemeToggle;

function ThemeToggle({ theme, onToggle }) {
  const label = theme === 'dark' ? 'Dark' : 'Light';
  return (
    <button className="toggle" onClick={onToggle} aria-label="Toggle theme">
      <span className="toggle-dot" />
      <span>{label} mode</span>
    </button>
  );
}

window.ThemeToggle = ThemeToggle;


