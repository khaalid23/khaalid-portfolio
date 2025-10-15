const Skills = () => {
  const skills = ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Framer Motion'];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <div className="flex flex-wrap justify-center mt-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 m-2 text-lg font-semibold text-white bg-gray-800 rounded-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
