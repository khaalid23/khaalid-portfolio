interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
  image: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="p-6 text-white bg-gray-900 rounded-md">
      <h3 className="text-2xl font-bold">{project.title}</h3>
      <p className="mt-2">{project.description}</p>
      <div className="flex flex-wrap mt-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 mr-2 text-sm text-white bg-gray-800 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <a href={project.github} className="text-brand hover:underline">
          GitHub
        </a>
        <a href={project.live} className="ml-4 text-brand hover:underline">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
