"use client";

import React, { useState, useEffect } from "react";
import "./GuestBook.css";

import { motion, AnimatePresence } from "framer-motion";

const GuestBook = () => {

  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");

  const [message, setMessage] = useState("");

  const [entries, setEntries] = useState([]);

  /* load comments */

  useEffect(() => {

    const savedEntries =
      JSON.parse(localStorage.getItem("guestbook")) || [];

    setEntries(savedEntries);

  }, []);

  /* add comment */

  const addEntry = () => {

    if (!name || !message) return;

    const newEntry = {
      name,
      message
    };

    const updatedEntries = [newEntry, ...entries];

    setEntries(updatedEntries);

    localStorage.setItem(
      "guestbook",
      JSON.stringify(updatedEntries)
    );

    setName("");
    setMessage("");
  };

  return (

    <>

      {/* floating book */}

      <motion.div

        className="guestbook-floating"

        initial={{ opacity:0, scale:0.8 }}

        animate={{
          opacity:1,
          scale:1,
          y:[0,-10,0]
        }}

        transition={{
          duration:3,
          repeat:Infinity
        }}

        onClick={() => setOpen(true)}
      >

        <img
          src="/guestbook.png.png"
          alt="guestbook"
        />

    

      </motion.div>

      {/* popup */}

      <AnimatePresence>

        {open && (

          <motion.div

            className="guestbook-overlay"

            initial={{ opacity:0 }}

            animate={{ opacity:1 }}

            exit={{ opacity:0 }}
          >

            <motion.div

              className="guestbook-modal"

              initial={{
                scale:0.8,
                opacity:0
              }}

              animate={{
                scale:1,
                opacity:1
              }}

              exit={{
                scale:0.8,
                opacity:0
              }}
            >

              {/* close */}

              <button
                className="close-btn"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>

              {/* left */}

              <div className="book-page">

                <h2>
                  Guest Book
                </h2>

                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />

                <textarea
                  placeholder="Write your thoughts..."
                  rows="6"
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                ></textarea>

                <button
                  className="submit-btn"
                  onClick={addEntry}
                >
                  Submit
                </button>

              </div>

              {/* right */}

              <div className="book-page entries-page">

                <h2>
                  {entries.length} Entries
                </h2>

                <div className="entries-container">

                  {entries.map((entry, index) => (

                    <div
                      className="entry"
                      key={index}
                    >

                      <p>
                        {entry.message}
                      </p>

                      <span>
                        — {entry.name}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </>
  );
};

export default GuestBook;