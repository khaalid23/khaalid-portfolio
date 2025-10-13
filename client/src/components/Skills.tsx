import {
  FaHtml5, FaCss3Alt, FaWordpress, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaLinux, FaNodeJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'WordPress', icon: <FaWordpress className="text-blue-700" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-300" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'Linux', icon: <FaLinux className="text-yellow-200" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
];

export default function Skills() {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto text-center" data-aos="fade-right">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map(({ name, icon }) => (
          <div key={name} className="flex flex-col items-center space-y-2 hover:scale-110 transition">
            <div className="text-5xl">{icon}</div>
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
