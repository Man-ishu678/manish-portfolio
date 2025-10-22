import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white px-4"
    >
      <h2 className="text-4xl font-bold mb-6 animate-fadeIn">About Me</h2>
      <p className="max-w-xl text-center text-lg leading-relaxed animate-fadeIn delay-200">
        I am a CSE graduate specialized in AI & ML with hands-on experience in data analysis, machine learning, and building intelligent systems.
        I enjoy transforming data into actionable insights and developing AI solutions that impact real-world problems.
      </p>
    </section>
  );
}
