import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDark = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="flex min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <Sidebar toggleDark={toggleDark} darkMode={darkMode} />
        <main className="flex-1 p-4 md:p-8">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}
