import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ads for 100",
    description:
      "An affordable online advertising platform with targeted advertising, real-time analytics, and several payment options.",
    image: "path_to_ads_image.jpg", // Replace with actual image path
    link: "#",
  },
  {
    title: "My Fresh Basket",
    description:
      "A grocery hub with transaction management, geospatial search, and personalized recommendations.",
    image: "path_to_fresh_basket_image.jpg", // Replace with actual image path
    link: "#",
  },
  // {
  //   title: "OCR Grocery Assistant",
  //   description:
  //     "A visual assistance system that recognizes grocery store product labels and translates text into speech.",
  //   image: "path_to_ocr_image.jpg",
  //   link: "#",
  // },
];

const Projects = () => {
  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between animations
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="projects"
      className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-10 lg:px-20 py-20"
    >
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
          My Projects
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg mb-10"
          variants={itemVariant}
        >
          Below are some of the projects I’ve worked on, showcasing my expertise
          in building scalable and user-friendly web applications.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            variants={itemVariant}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-green-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
