import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white px-4"
    >
      <h2 className="text-4xl font-bold mb-4 animate-fadeIn">Contact</h2>
      <p className="text-lg mb-6 text-center animate-fadeIn delay-200">
        Feel free to reach out via email or connect on LinkedIn.
      </p>
      <div className="flex space-x-6 animate-fadeIn delay-400">
        <a
          href="mailto:manish.sonu2117@gmail.com"
          className="flex items-center space-x-2 hover:text-blue-500 transition transform hover:scale-105"
        >
          <Mail className="w-6 h-6" />
          <span>Email Me</span>
        </a>
        <a
          href="https://linkedin.com/in/manishkumarhttps://www.linkedin.com/in/manishkumardevarshetty/"
          target="_blank"
          className="flex items-center space-x-2 hover:text-blue-700 transition transform hover:scale-105"
        >
          <Linkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
