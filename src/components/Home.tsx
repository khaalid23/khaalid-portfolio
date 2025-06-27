import { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = document.createElement('div');
      el.style.position = 'absolute';
      el.style.width = el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.background = 'rgba(255,255,255,0.6)';
      el.style.left = `${e.clientX - 10}px`;
      el.style.top = `${e.clientY - 10}px`;
      el.className = 'animate-ping';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 500);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4" data-aos="fade-up">
      <img
        src="./public/me.jpg"
        alt="Me"
        className="w-40 h-40 rounded-full border-4 border-white mb-6 shadow-lg"
      />

      <h1 className="text-4xl font-bold mb-2">Hi, I’m <span className="text-indigo-300"> Khaalid A Salaandhere</span></h1>
      <p className="text-lg max-w-xl text-gray-200 mb-6">
        Junior React Developer passionate about building modern and performant web applications.
      </p>

      <div className="flex space-x-4 mb-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 text-2xl transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 text-2xl transition"
        >
          <FaLinkedin />
        </a>
      </div>

      <a
        href="#contact"
        className="px-6 py-3 bg-white text-indigo-700 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        Let’s Connect
      </a>
    </div>
  );
}
