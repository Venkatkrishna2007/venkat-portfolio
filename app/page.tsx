import Navbar from "../components/Navbar";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skill from "../sections/Skill";
import Project from "../sections/Project";
import Competitive from "../sections/Competitive";
import Contact from "../sections/Contact";
import GuestBook from "../components/GuestBook";

import "../components/Navbar.css";

import "../sections/Hero.css";
import "../sections/About.css";
import "../sections/Skill.css";
import "../sections/Project.css";
import "../sections/Competitive.css";
import "../sections/Contact.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
       <GuestBook />

      <About />

      <Skill />

      <Project />
      <Competitive />
      <Contact />
    </>
  );
}