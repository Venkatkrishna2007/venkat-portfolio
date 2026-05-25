"use client";

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (

    <nav className="navbar">

      {/* logo */}

      <div className="logo">
        V
      </div>

      {/* nav links */}

      <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      {/* resume button */}

      <a
        href="https://drive.google.com/file/d/1Puw1ToSVuksz6WStAjULP-g6vogGIziX/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        Resume
      </a>

    </nav>
  );
};

export default Navbar;