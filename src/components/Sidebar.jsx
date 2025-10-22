import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Home, User, Code, Mail, Sun, Moon, Menu } from 'lucide-react';

export default function Sidebar({ toggleDark, darkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setOpen(!open)}>
          <Menu className="w-8 h-8 text-black dark:text-white" />
        </button>
      </div>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-16 md:flex flex-col items-center py-4 space-y-6 shadow-lg bg-gray-100 dark:bg-gray-900 transition-transform transform ${
          open ? 'translate-x-0' : '-translate-x-20 md:translate-x-0'
        }`}
      >
        <Link to="hero" smooth={true} duration={500} spy={true}>
          <Home className="w-6 h-6 text-black dark:text-white cursor-pointer hover:text-blue-500 hover:scale-110 transition transform" />
        </Link>
        <Link to="about" smooth={true} duration={500} spy={true}>
          <User className="w-6 h-6 text-black dark:text-white cursor-pointer hover:text-blue-500 hover:scale-110 transition transform" />
        </Link>
        <Link to="projects" smooth={true} duration={500} spy={true}>
          <Code className="w-6 h-6 text-black dark:text-white cursor-pointer hover:text-blue-500 hover:scale-110 transition transform" />
        </Link>
        <Link to="contact" smooth={true} duration={500} spy={true}>
          <Mail className="w-6 h-6 text-black dark:text-white cursor-pointer hover:text-blue-500 hover:scale-110 transition transform" />
        </Link>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDark} className="mt-auto">
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-400 hover:text-yellow-300 hover:scale-110 transition transform" />
          ) : (
            <Moon className="w-6 h-6 text-gray-700 hover:text-gray-500 hover:scale-110 transition transform" />
          )}
        </button>
      </nav>
    </>
  );
}
