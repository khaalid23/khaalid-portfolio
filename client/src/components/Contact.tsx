<<<<<<< HEAD:src/components/Contact.tsx
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.name || !form.email || !form.message) {
      setError('Please fill all fields');
      return;
    }
    try {
      setLoading(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.errors?.[0]?.message || 'Failed to send message');
      }
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 px-6 max-w-3xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

      {submitted ? (
        <p className="text-center text-green-300">Thanks for reaching out! ✅</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-300">{error}</p>}
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 border border-white/20 placeholder-gray-300 text-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 border border-white/20 placeholder-gray-300 text-white"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 border border-white/20 placeholder-gray-300 text-white resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded font-bold transition ${loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500'}`}
          >
            {loading ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
=======
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert('Please fill all fields');
      return;
    }

    // TODO: replace with backend POST later
    console.log('Submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-20 px-6 max-w-3xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

      {submitted ? (
        <p className="text-center text-green-300">Thanks for reaching out! ✅</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 border border-white/20 placeholder-gray-300 text-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 border border-white/20 placeholder-gray-300 text-white"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/10 border border-white/20 placeholder-gray-300 text-white resize-none"
          />
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 hover:bg-indigo-500 rounded font-bold transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
>>>>>>> 05bc7f5 (modevi the client):client/src/components/Contact.tsx
