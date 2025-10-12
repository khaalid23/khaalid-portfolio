import { useEffect, useState } from 'react';

type Project = {
  slug: string;
  title: string;
  summary: string;
  features: string[];
  tech: { frontend: string[]; backend: string[] };
  links?: { repo?: string; live?: string; docs?: string };
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch('/api/projects')
      .then(async (r) => {
        if (!r.ok) throw new Error('Failed to load projects');
        return r.json();
      })
      .then((data: Project[]) => {
        if (mounted) setProjects(data);
      })
      .catch((e: any) => setError(e.message || 'Error'));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="py-20 px-6 max-w-6xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      {error && <p className="text-center text-red-300">{error}</p>}

      {!projects ? (
        <div className="flex justify-center"><div className="animate-spin h-8 w-8 rounded-full border-2 border-white/40 border-t-white" /></div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.slug} className="group bg-white/10 backdrop-blur p-6 rounded-xl border border-white/10 hover:border-white/20 transition">
              <header className="mb-4">
                <h3 className="text-xl font-semibold text-indigo-100 group-hover:text-white transition">{p.title}</h3>
                <p className="text-indigo-200/90 mt-1">{p.summary}</p>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-indigo-200 mb-2">Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-200">
                    {p.features.slice(0, 5).map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-200 mb-2">Tech</h4>
                  <div className="text-sm text-gray-200">
                    <p><span className="text-indigo-300">Frontend:</span> {p.tech.frontend.join(', ')}</p>
                    <p><span className="text-indigo-300">Backend:</span> {p.tech.backend.join(', ')}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
