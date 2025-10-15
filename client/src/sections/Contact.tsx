import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 text-white bg-gray-800 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-4 text-white bg-gray-800 rounded-md"
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 mt-4 text-white bg-gray-800 rounded-md"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-8 py-3 mt-4 font-bold text-white rounded-md bg-brand hover:bg-opacity-80"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-white">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
