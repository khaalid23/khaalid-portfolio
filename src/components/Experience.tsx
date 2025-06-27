export default function Experience() {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>

      <div className="mb-10">
        <h3 className="text-xl font-semibold text-indigo-300">Junior React Developer – Luul Solutions</h3>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
          <li>Implemented REST APIs for NodeJS backend</li>
          <li>Utilised React, JavaScript, HTML, and CSS in both design & development</li>
          <li>Worked in Agile/Scrum team structures</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Projects Worked On</h3>
      <div className="bg-white/10 p-6 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold text-indigo-200 mb-2">Tuition Center Management System</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Designed and developed React-based UI for admin/teacher/student roles</li>
          <li>Used lazy loading, memoization, and code splitting to optimize performance</li>
          <li>Handled high traffic volumes with stable UI performance</li>
          <li>Created intuitive features improving daily operations</li>
        </ul>
      </div>
    </div>
  );
}
