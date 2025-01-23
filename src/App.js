import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home"); // Default section is "home"

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />
      {activeSection === "home" && <Hero />}
      {activeSection === "about" && <About />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "skills" && <Skills />}
      {activeSection === "contact" && <Contact />}
    </div>
  );
}

export default App;
