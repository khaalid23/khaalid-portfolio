import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-5xl font-bold md:text-7xl"
        variants={itemVariants}
      >
        I build scalable React apps that ship fast.
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl"
        variants={itemVariants}
      >
        Full-Stack Developer | TypeScript, React, Node.js
      </motion.p>
      <motion.div variants={itemVariants} className="mt-8">
        <Link
          to="work"
          smooth={true}
          duration={500}
          className="px-8 py-3 font-bold text-white rounded-md cursor-pointer bg-brand hover:bg-opacity-80"
        >
          View My Work
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
