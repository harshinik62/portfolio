import React from "react";

const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 text-white py-4 z-50 shadow-lg">
      <ul className="flex justify-center space-x-8">
        <li>
          <button
            onClick={() => setActiveSection("home")}
            className="hover:text-green-400"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("about")}
            className="hover:text-green-400"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("projects")}
            className="hover:text-green-400"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("skills")}
            className="hover:text-green-400"
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("contact")}
            className="hover:text-green-400"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
