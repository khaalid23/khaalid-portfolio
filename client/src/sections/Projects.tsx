import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the project.',
    stack: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
    image: '',
  },
  {
    title: 'Project Two',
    description: 'A brief description of the project.',
    stack: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
    image: '',
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-20 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">Selected Projects</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
