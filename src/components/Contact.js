import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className="relative h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col justify-center items-center px-6 lg:px-20 py-20"
    >
      {/* Background Decorations */}
      <div className="absolute w-48 h-48 bg-blue-500 rounded-full opacity-10 top-16 left-16 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-10 bottom-16 right-16 animate-pulse"></div>

      {/* Title */}
      <motion.div
        className="text-center mb-16 z-10"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-5xl lg:text-6xl font-bold mb-6"
          variants={itemVariant}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-lg lg:text-xl text-gray-400"
          variants={itemVariant}
        >
          I’d love to hear from you! Whether it’s collaboration, freelance work, or just a chat—reach out through the platforms below.
        </motion.p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-12 z-10 text-center"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {/* Email Link */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariant}
        >
          <a
            href="mailto:harshinikurupati23@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 text-6xl transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
          <p className="mt-4 text-gray-300 text-lg">Email</p>
        </motion.div>

        {/* LinkedIn Link */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariant}
        >
          <a
            href="https://www.linkedin.com/in/harshinikurupati/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 text-6xl transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <p className="mt-4 text-gray-300 text-lg">LinkedIn</p>
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariant}
        >
          <a
            href="https://github.com/harshinik62"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 text-6xl transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <p className="mt-4 text-gray-300 text-lg">GitHub</p>
        </motion.div>
      </motion.div>

      {/* Additional Content */}
      <motion.div
        className="text-center mt-20 z-10 max-w-3xl"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-lg lg:text-xl text-gray-400 mb-4"
          variants={itemVariant}
        >
          I’m always looking to collaborate on exciting projects that push boundaries and create impactful solutions. 
          Let’s turn your ideas into reality!
        </motion.p>
        <motion.p
          className="text-lg lg:text-xl text-gray-400"
          variants={itemVariant}
        >
          Interested in my work? Check out my GitHub for some of the projects I’ve worked on, or connect with me on LinkedIn for professional networking.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;
