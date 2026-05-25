"use client";

import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-section" id="about">

      <motion.div
        className="paper"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <div className="tape"></div>

        <h2 className="paper-title">
          About Me
        </h2>

        <div className="paper-content">

          <p>
            Hi! I’m <span>Venkat</span>, a passionate Full Stack Developer
            and Machine Learning enthusiast. I enjoy building modern,
            scalable and responsive web applications.
          </p>

          <p>
            My focus is on
            <span> algorithms and data structures </span>
            while continuously improving my problem-solving skills through
            projects and development practice.
          </p>

          <p>
            Beyond web development, I also build
            <span> AI projects </span>
            and explore modern technologies to create useful applications
            with beautiful user experiences.
          </p>

        </div>

        <div className="note-box">
           Want to know more about my skills and projects?
          Explore the sections below!
        </div>

      </motion.div>

    </section>
  );
};

export default About;