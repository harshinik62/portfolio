import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between child animations
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 relative"
    >
      {/* Left Section: Stats */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-wrap justify-center gap-8"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-center"
          variants={itemVariant}
        >
          <h2 className="text-5xl font-bold text-green-400">4+</h2>
          <p className="text-gray-400 text-lg">Years of Experience</p>
        </motion.div>
        <motion.div
          className="text-center"
          variants={itemVariant}
        >
          <h2 className="text-5xl font-bold text-green-400">10+</h2>
          <p className="text-gray-400 text-lg">Technologies Mastered</p>
        </motion.div>
        <motion.div
          className="text-center"
          variants={itemVariant}
        >
          <h2 className="text-5xl font-bold text-green-400">25+</h2>
          <p className="text-gray-400 text-lg">Successful Projects</p>
        </motion.div>
        <motion.div
          className="text-center"
          variants={itemVariant}
        >
          <h2 className="text-5xl font-bold text-green-400">100+</h2>
          <p className="text-gray-400 text-lg">
            Cups of Coffee
          </p>
        </motion.div>
      </motion.div>

      {/* Right Section: Description */}
      <motion.div
        className="w-full lg:w-1/2"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl lg:text-5xl font-bold mb-6 leading-snug"
          variants={itemVariant}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg mb-6"
          variants={itemVariant}
        >
          From crafting scalable web solutions to optimizing backend performance,
          I’ve spent the past 4+ years building dynamic and user-friendly digital
          experiences. My journey has taken me through mastering modern web
          technologies like <span className="text-blue-400">React</span>,{" "}
          <span className="text-blue-400">Node.js</span>,{" "}
          <span className="text-blue-400">SQL</span>, and{" "}
          <span className="text-blue-400">PHP</span>, while excelling in cloud
          technologies and database optimization.
        </motion.p>
        <motion.p
          className="text-gray-400 text-lg mb-6"
          variants={itemVariant}
        >
          With a solid foundation in engineering principles and a knack for
          solving complex problems, I thrive in collaborative environments. My
          passion lies in delivering user-centric designs and innovative backend
          solutions.
        </motion.p>
        <motion.p
          className="text-gray-400 text-lg"
          variants={itemVariant}
        >
          Whether I’m optimizing code, integrating APIs, or crafting
          user-friendly interfaces, I’m committed to creating exceptional
          digital experiences.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
