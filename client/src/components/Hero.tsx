import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          I build scalable React apps that ship fast
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 max-w-2xl"
        >
          A passionate Full-Stack Developer with a knack for creating elegant, high-performance web applications.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={scrollToWork}
          className="bg-brand hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          View My Work
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-10 w-12 h-12 border-4 border-brand rounded-full animate-bounce"
      ></motion.div>
    </section>
  );
};

export default Hero;
