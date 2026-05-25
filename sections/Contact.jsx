"use client";

import React, { useRef } from "react";
import "./Contact.css";

import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import { motion } from "framer-motion";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "venkatportfolio_vk",
      "template_phrieyn",
      form.current,
      "IWvA6TjNjvnnB9hr0"
    )

    .then(() => {

      alert("Message Sent Successfully 🚀");

    })

    .catch((error) => {

      console.log(error);

      alert("Failed to send message");

    });

    e.target.reset();
  };

  return (

    <section
      className="contact-section"
      id="contact"
    >

      <motion.h1
        className="contact-title"

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
        ✨ Get In Touch ✨
      </motion.h1>

      <div className="contact-container">

        {/* LEFT */}

        <motion.div
          className="contact-left"

          initial={{
            opacity:0,
            x:-80
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:1
          }}

          viewport={{
            once:true
          }}
        >

          <h2>
            Let's Connect!
          </h2>

          <p>
            Have a project idea or want to collaborate?
            Feel free to contact me anytime.
          </p>

          <div className="social-links">

            <a href="mailto:24eu04247@vrsec.ac.in">
              <FaEnvelope />
              Email
            </a>

            <a href="https://github.com/Venkatkrishna2007">
              <FaGithub />
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/peddireddi-venkat-krishna007519/">
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.form

          ref={form}

          onSubmit={sendEmail}

          className="contact-form"

          initial={{
            opacity:0,
            x:80
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:1
          }}

          viewport={{
            once:true
          }}
        >

          <div className="input-group">

            <label>
              Name
            </label>

            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
            />

          </div>

          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              name="user_email"
              placeholder="your.email@example.com"
              required
            />

          </div>

          <div className="input-group">

            <label>
              Message
            </label>

            <textarea
              name="message"
              rows="6"
              placeholder="Your message here..."
              required
            ></textarea>

          </div>

          <button type="submit">
            Send Message
          </button>

        </motion.form>

      </div>

    </section>
  );
};

export default Contact;