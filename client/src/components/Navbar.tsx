import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-indigo-400">Khaalid.dev</h1>
        <ul className="flex space-x-6 text-white font-medium">
          <li><a href="#home" className="hover:text-indigo-400 transition">Home</a></li>
          <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
          <li><a href="#experience" className="hover:text-indigo-400 transition">Experience</a></li>
          <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
