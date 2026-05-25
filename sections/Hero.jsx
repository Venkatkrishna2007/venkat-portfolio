"use client";

import React from 'react'
import './Hero.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero" id="home">

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="sticky-note"
      >
        <p>
          “Code.                Create.          Innovate.”
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-center"
      >

        <div className="hero-image">
          <img
            src="/profile.jpeg.jpeg"
            alt="venkat"
          />
        </div>

        <h1>I'm Venkat</h1>

        <p className="hero-subtitle">
           Developer • Problem Solver • AI & ML Enthusiast
        </p>

        <div className="hero-icons">

          <a href="#">
            <FaEnvelope />
          </a>

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero