"use client";

import React from "react";
import "./Competitive.css";

import {
  FaCode,
  FaLaptopCode,
  FaTrophy,
  FaStar
} from "react-icons/fa";

import { motion } from "framer-motion";

const platforms = [

  {
    icon: <FaLaptopCode />,
    title: "LeetCode",
    subtitle: "Data Structures & Algorithms",
    description:
      "Solved 300+ algorithmic problems and strengthened problem-solving ability through regular coding practice.",
    stats: [
      { label: "Problems Solved", value: "300+" },
      { label: "Contest Rating", value: "1653" },
      { label: "Max Rating", value: "1657" },
    ],
  },

  {
    icon: <FaStar />,
    title: "HackerRank",
    subtitle: "Programming Badges",
    description:
      "Achieved strong language proficiency through HackerRank practice and coding challenges.",
    stats: [
      { label: "Java", value: "5★" },
      { label: "C Language", value: "3★" },
      { label: "Python", value: "2★" },
    ],
  },

  {
    icon: <FaCode />,
    title: "Codeforces",
    subtitle: "Competitive Programming",
    description:
      "Actively solving algorithmic problems and improving analytical thinking through contests.",
    stats: [
      { label: "Problems Solved", value: "30+" },
      { label: "Difficulty", value: "Medium" },
      { label: "Topics Covered", value: "10+" },
    ],
  },

  {
    icon: <FaTrophy />,
    title: "GeeksforGeeks",
    subtitle: "Learning Platform",
    description:
      "Practicing DSA concepts regularly and improving core programming fundamentals.",
    stats: [
      { label: "Problems Solved", value: "80+" },
      { label: "Practice Score", value: "230" },
      { label: "Topics Mastered", value: "15+" },
    ],
  },

];

const Competitive = () => {
  return (

    <section className="competitive-section">

      <motion.h1
        className="competitive-title"

        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}

        viewport={{ once: true }}
      >
        Competitive Programming
      </motion.h1>

      <motion.p
        className="competitive-subtitle"

        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}

        transition={{ delay: 0.3 }}

        viewport={{ once: true }}
      >
        Sharpening problem-solving skills through coding challenges
      </motion.p>

      <div className="competitive-cards">

        {platforms.map((platform, index) => (

          <motion.div
            className="competitive-card"

            key={index}

            initial={{
  opacity: 0,
  y: 120,
  rotate: 2,
  scale: 0.95
}}

whileInView={{
  opacity: 1,
  y: 0,
  rotate: 0,
  scale: 1
}}

            transition={{
  duration: 0.9,
  delay: index * 0.15,
  type: "spring"
}}
            viewport={{ once: true }}
          >

            <div className="card-top">

              <div className="platform-icon">
                {platform.icon}
              </div>

              <div>

                <h2>
                  {platform.title}
                </h2>

                <h4>
                  {platform.subtitle}
                </h4>

              </div>

            </div>

            <p className="platform-description">
              {platform.description}
            </p>

            <div className="stats-grid">

              {platform.stats.map((item, i) => (

                <div
                  className="stat-box"
                  key={i}
                >

                  <span>
                    {item.label}
                  </span>

                  <h3>
                    {item.value}
                  </h3>

                </div>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Competitive;