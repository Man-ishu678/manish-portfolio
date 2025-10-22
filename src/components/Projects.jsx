import React from 'react';

const projectList = [
  { title: 'Smart Traffic Violation Detection', desc: 'IoT + ML system to monitor and report traffic violations automatically.' },
  { title: 'Hybrid AI Gym Coach', desc: 'AI-based fitness app providing real-time exercise guidance and analytics.' },
  { title: 'Agrisense', desc: 'IoT & ML application for smart agriculture, crop monitoring, and yield prediction.' },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-black dark:text-white px-4"
    >
      <h2 className="text-4xl font-bold mb-8 animate-fadeIn">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projectList.map((project, i) => (
          <div
            key={i}
            className="p-6 border border-gray-300 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 animate-fadeIn delay-200"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-lg">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
