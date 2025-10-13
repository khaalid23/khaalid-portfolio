import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]"
    >
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[180px] opacity-30"
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[160px] opacity-25"
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Profile Image */}
      <motion.img
        src="/src/images/me.jpeg"
        alt="Khaalid Ahmed"
        className="w-44 h-44 rounded-full border-4 border-white shadow-xl mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
      />

      {/* Name */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-3 text-white"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Hi, I’m <span className="text-indigo-400">Khaalid A Salaandhere</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-lg max-w-xl text-gray-300 mb-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Full-Stack Developer focused on building dynamic, responsive, and high-performance web applications with React & Node.js.
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex space-x-6 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="https://github.com/khaalid23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-indigo-400 transition transform hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://za.linkedin.com/in/khaalid-ahmed-06147831b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-400 transition transform hover:scale-125"
        >
          <FaLinkedin />
        </a>
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href="#contact"
        className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-indigo-500/40 hover:scale-105 transition-all"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Let’s Connect
      </motion.a>
    </section>
  );
}
