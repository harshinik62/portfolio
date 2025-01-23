import React from "react";
import { FaReact, FaNode, FaDatabase, FaAws, FaPhp, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiDocker, SiGraphql } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaReact size={50} className="text-blue-400" />, name: "ReactJS" },
  { icon: <FaNode size={50} className="text-green-400" />, name: "NodeJS" },
  { icon: <FaDatabase size={50} className="text-yellow-400" />, name: "MySQL" },
  { icon: <FaAws size={50} className="text-orange-400" />, name: "AWS" },
  { icon: <FaPhp size={50} className="text-indigo-400" />, name: "PHP" },
  { icon: <FaJsSquare size={50} className="text-yellow-300" />, name: "JavaScript" },
  { icon: <SiTailwindcss size={50} className="text-blue-500" />, name: "TailwindCSS" },
  { icon: <SiDocker size={50} className="text-blue-600" />, name: "Docker" },
  { icon: <SiGraphql size={50} className="text-pink-400" />, name: "GraphQL" },
];

const Skills = () => {
  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center px-10 lg:px-20"
    >
      {/* Title */}
      <motion.div
        className="text-center"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl lg:text-5xl font-bold mb-10"
          variants={itemVariant}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg mb-10"
          variants={itemVariant}
        >
          A blend of front-end, back-end, cloud, and database expertise built over 4+ years of development.
        </motion.p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            variants={itemVariant}
          >
            {skill.icon}
            <p className="mt-4 text-xl font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
