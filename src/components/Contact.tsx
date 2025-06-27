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
