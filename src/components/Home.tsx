import { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

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
    <div className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden" data-aos="fade-up">
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10"
        init={async (engine) => {
          await loadFull(engine);
        }}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: '#ffffff' },
            links: { enable: true, color: '#a5b4fc', distance: 150, opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1, outModes: { default: 'bounce' } },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
      <img
        src="/me.jpg"
        alt="Me"
        className="w-40 h-40 rounded-full border-4 border-white mb-6 shadow-lg"
      />

      <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
        Hi, I’m <span className="text-indigo-300">Khaalid A. Salaandhere</span>
      </h1>
      <p className="text-xl sm:text-2xl max-w-2xl text-indigo-100 mb-6">
        Full‑Stack Developer & Web Designer — creating modern, fast, and delightful digital experiences.
      </p>

      <div className="flex space-x-4 mb-6">
        <a
          href="https://github.com/khaalid23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 text-2xl transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://za.linkedin.com/in/khaalid-ahmed-06147831b"
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
