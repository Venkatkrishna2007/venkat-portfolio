"use client";

import React from "react";
import "./Skill.css";

import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux
} from "react-icons/fa";

import {
  SiExpress,
  SiDjango,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiMongodb
} from "react-icons/si";

import { motion } from "framer-motion";

const skills = [

  { name:"Java", icon:<FaJava /> },

  { name:"Python", icon:<FaPython /> },

  { name:"JavaScript", icon:<FaJs /> },

  { name:"Data Structures", icon:"⚛" },

  { name:"Algorithms", icon:"◈" },

  { name:"HTML", icon:<FaHtml5 /> },

  { name:"CSS", icon:<FaCss3Alt /> },

  { name:"React.js", icon:<FaReact /> },

  { name:"Bootstrap", icon:<FaBootstrap /> },

  { name:"Node.js", icon:<FaNodeJs /> },

  { name:"Express.js", icon:<SiExpress /> },

  { name:"Django", icon:<SiDjango /> },

  { name:"Flask", icon:<SiFlask /> },

  { name:"MySQL", icon:<SiMysql /> },

  { name:"PostgreSQL", icon:<SiPostgresql /> },

  { name:"MongoDB", icon:<SiMongodb /> },

  { name:"Git", icon:<FaGitAlt /> },

  { name:"GitHub", icon:<FaGithub /> },

  { name:"Linux", icon:<FaLinux /> }

];

const Skill = () => {

  return (

    <section
      className="skill-section"
      id="skills"
    >

      <motion.h1

        className="skill-title"

        initial={{
          opacity:0,
          y:60
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1
        }}

        viewport={{
          once:true
        }}
      >
        Skills & Tech Stack
      </motion.h1>

      <div className="timeline-line"></div>

      <div className="skills-container">

        {skills.map((skill,index)=>(

          <motion.div

            className="skill-card"

            key={index}

            initial={{
              opacity:0,
              y:40
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.5,
              delay:index * 0.05
            }}

            viewport={{
              once:true
            }}

            whileHover={{
              y:-8,
              scale:1.05
            }}
          >

            <div className="connector"></div>

            <div className="connector-circle"></div>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <span>
              {skill.name}
            </span>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Skill;