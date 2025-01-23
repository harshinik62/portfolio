import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/photo.jpeg";

const Hero = () => {
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
      id="home"
      className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 relative"
    >
      {/* Left Section: Profile Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative max-w-md h-96 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-800 p-2">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

      </motion.div>

      {/* Right Section: Headline and Description */}
      <motion.div
        className="w-full lg:w-1/2 text-left"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl lg:text-5xl font-bold mb-4 leading-snug"
          variants={itemVariant}
        >
          Experienced <span className="text-green-400">Full Stack Developer</span>
          <br />
          Delivering Innovative Solutions for the Web
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg mb-6"
          variants={itemVariant}
        >
          Hi! I’m Harshini, a passionate developer with 4+ years of experience
          in <span className="text-blue-400">React</span>,{" "}
          <span className="text-blue-400">Node.js</span>,{" "}
          <span className="text-blue-400">SQL</span>, and{" "}
          <span className="text-blue-400">PHP</span>. I specialize in cloud
          technologies, containerization, and building scalable web
          applications.
        </motion.p>
        <motion.p
          className="text-gray-400 text-lg mb-6"
          variants={itemVariant}
        >
          I’m driven to create modern, user-friendly interfaces and innovative
          backend solutions that deliver exceptional user experiences. Let's
          build something amazing together!
        </motion.p>
        <motion.div className="flex gap-4" variants={itemVariant}>
          <a
            href="#resume"
            className="bg-green-500 text-black px-6 py-3 rounded-full shadow-lg hover:bg-green-600"
          >
            Download CV
          </a>
          <a
            href="#projects"
            className="border border-white px-6 py-3 rounded-full hover:bg-gray-700"
          >
            View Portfolio
          </a>
        </motion.div>
      </motion.div>

      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-10 left-20 w-32 h-32 bg-blue-700 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-20 w-48 h-48 bg-purple-700 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
    </section>
  );
};

export default Hero;
