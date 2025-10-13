export default function Experience() {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>

      {/* Work Info */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-indigo-300">
          Full-Stack Developer – Luul Solutions
        </h3>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
          <li>Developed full-stack web applications using React, Node.js, and MongoDB</li>
          <li>Implemented RESTful APIs and integrated secure authentication systems</li>
          <li>Worked collaboratively in Agile/Scrum environments</li>
        </ul>
      </div>

      {/* Projects Section */}
      <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Projects Worked On</h3>

      {/* Tuition Center Management System */}
      <div className="bg-white/10 p-6 rounded-lg shadow-md mb-6">
        <h4 className="text-xl font-semibold text-indigo-200 mb-2">
          Tuition Center Management System
        </h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Designed and developed React-based UI for admin, teacher, and student roles</li>
          <li>Used lazy loading, memoization, and code splitting to optimize performance</li>
          <li>Handled high traffic volumes with stable UI performance</li>
          <li>Created intuitive features improving daily operations</li>
        </ul>
      </div>

      {/* Property Management System */}
      <div className="bg-white/10 p-6 rounded-lg shadow-md mb-6">
        <h4 className="text-xl font-semibold text-indigo-200 mb-2">
          Civic Security Compliance System
        </h4>
        <p className="text-gray-400 mb-2">
          A comprehensive full-stack platform for managing property rentals and SIM card registrations
          for local authorities.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Implemented CRUD operations for properties, landlords, tenants, and brokers</li>
          <li>Integrated secure JWT authentication and role-based access control</li>
          <li>Developed real-time analytics dashboard with Recharts and MUI Data Grid</li>
          <li>Built backend using Node.js, Express.js, and MongoDB</li>
          <li>Frontend built with React 18, TypeScript, and Material-UI</li>
        </ul>
      </div>

      {/* Coming Soon or Second Project Placeholder */}
      <div className="bg-white/10 p-6 rounded-lg shadow-md mb-6">
        <h4 className="text-xl font-semibold text-indigo-200 mb-2">
          [Second Project Name – Coming Soon]
        </h4>
        <p className="text-gray-400">
          Details will be added once the project development is complete.
        </p>
      </div>

      {/* Image Gallery Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-indigo-400 text-center">
          Project Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src="/src/images/tcms.png"
            alt="Tuition Center Management System"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/src/images/cscs.png"
            alt="Civic Security Compliance System"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
}
