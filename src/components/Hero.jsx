import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black text-black dark:text-white"
    >
      <h1 className="text-6xl font-extrabold mb-4 text-center drop-shadow-lg animate-fadeIn">
        Manish Kumar Devarshetty
      </h1>
      <p className="text-2xl mb-8 text-center opacity-80 max-w-xl animate-fadeIn delay-200">
        AI & ML Engineer passionate about building intelligent systems and scalable ML applications.
      </p>
      <div className="flex space-x-4 animate-fadeIn delay-400">
        <a
          href="#projects"
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition transform"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-2xl border border-gray-500 dark:border-gray-400 hover:bg-gray-700 hover:text-white transition transform hover:scale-105"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
