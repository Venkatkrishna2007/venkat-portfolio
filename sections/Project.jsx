"use client";

import React, { useState } from "react";
import "./Project.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Employee Churn Prediction",
    image: "/project1.png",
    description:
      "Machine learning project that predicts whether employees are likely to leave a company.",
    tech: ["Python", "Machine Learning", "Flask"],
    github: "https://github.com/Venkatkrishna2007",
    live: "#",
  },

  {
    title: "Disaster Management System",
    image: "/project2.png",
    description:
      "Web application for emergency reporting and disaster response management.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Venkatkrishna2007",
    live: "#",
  },

  {
    title: "Vehicle Rental System",
    image: "/project3.png",
    description:
      "Responsive vehicle booking platform with authentication and booking features.",
    tech: ["React", "Express", "MySQL"],
    github: "https://github.com/Venkatkrishna2007",
    live: "https://ridehub.42web.io/",
  },
];

const Project = () => {

  const [active, setActive] = useState(0);

  return (
    <section className="project-section" id="projects">

      <motion.h2
        className="project-title"

        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="project-container">

        {/* left tabs */}

        <div className="project-tabs">

          {projects.map((project, index) => (

            <button
              key={index}
              className={active === index ? "active-tab" : ""}

              onClick={() => setActive(index)}
            >
              {project.title}
            </button>

          ))}

        </div>

        {/* right card */}

        <motion.div
          key={active}

          className="project-card"

          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >

          <img
            src={projects[active].image}
            alt=""
          />

          <h3>
            {projects[active].title}
          </h3>

          <p>
            {projects[active].description}
          </p>

          <div className="tech-stack">

            {projects[active].tech.map((item, i) => (
              <span key={i}>
                {item}
              </span>
            ))}

          </div>

          <div className="project-links">

            <a href={projects[active].github}>
              <FaGithub />
              GitHub
            </a>

            <a href={projects[active].live}>
              <FaExternalLinkAlt />
              Live Demo
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Project;