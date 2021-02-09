import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/landing.css';
import Up from './Up';
import Down from './Down'

export const Landing = () => {
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);

  const baseStyle_background = {
    backgroundColor: "white",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
  }
  const slideLeftStyle_background = {
    backgroundColor: "red",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  }


  // ————————————————————————————————————
   const fullPanel_background = {
    width: "180vw",
    height: "90vh",
    backgroundColor: "transparent",
    marginTop: "10vh"
   }
  // ————————————————————————————————————
  

  // LEFT PANEL — dynamic styling
  const baseStyle_leftPanel = {
    height: "90vh",
    backgroundColor: "white",
    width: "50vw"
  }
  const slideLeftStyle_leftPanel = {
    height: "90vh",
    backgroundColor: "white",
    width: "90vw"
  }
  const slideRightStyle_leftPanel = {
    height: "90vh",
    backgroundColor: "white",
    width: "10vw"
  }

  // RIGHT PANEL — dynamic styling
  const baseStyle_rightPanel = {
    height: "90vh",
    backgroundColor: "black",
    width: "50vw"
  }
  const slideLeftStyle_rightPanel = {
    height: "90vh",
    backgroundColor: "black",
    width: "10vw"
  }
  const slideRightStyle_rightPanel = {
    height: "90vh",
    backgroundColor: "black",
    width: "90vw"
  }


  // SEND BUTTON — dynamic styling
  const baseStyle_sendButton = {
    marginLeft: "41.5vw",
    backgroundColor: "white",
    color: "black",
    borderColor: "black"
  }

  // RECEIVE BUTTON — dynamic styling
  const baseStyle_receiveButton = {
    marginLeft: "41.5vw",
    backgroundColor: "black",
    color: "white",
    borderColor: "white"
  }

  return (
    <>
      <div style={fullPanel_background}>
        <div style={full_panel_left}>

        </div>
        <div style={full_panel_right}>

        </div>

      </div>
    </>
  );

  return (
    <motion.div
      style={slideLeft ? slideLeftStyle_background : baseStyle_background}
    >
      {(!slideLeft && !slideRight) &&
        <motion.div
        className="subtext_container"
        initial={{
            x: '-100vw'
        }}
        animate={{
            x: 0,
        }}
        transition={{
            ease: "easeOut",
            duration: 1,
            delay: .5
        }}
        >
          <h2 className="subtext">A better way to share files privately.</h2>
      </motion.div>
      }
      <AnimatePresence>
        {/* Buttons for choosing "SEND" or "RECEIVE" */}
        <motion.div className="function_button_container" >
          {/* SEND BUTTON */}
          <motion.button
            className="function_button"
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 1
            }}
            animate={
              slideLeft ? { x: "40vw" }
                : slideRight ? { x: "-40vw" }
                  : { x: "0" }
            }
            style={baseStyle_sendButton}
            onClick={() => { setSlideLeft(true); setSlideRight(false) }}
          >
            SEND
          </motion.button>
          {/* RECEIVE BUTTON */}
          <motion.button
            className="function_button"
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 1
            }}
            animate={
              slideLeft ? { x: "40vw" }
                : slideRight ? { x: "-40vw" }
                  : { x: "0" }
            }
            style={baseStyle_receiveButton}
            onClick={() => { setSlideLeft(false); setSlideRight(true) }}
          >
            RECEIVE
          </motion.button>
        </motion.div>
        LEFT HOME-PANEL
        <motion.div
          style={
            slideLeft ? slideLeftStyle_leftPanel
              : slideRight ? slideRightStyle_leftPanel
                : baseStyle_leftPanel
          }
        >
          {slideLeft && <Up />}
        </motion.div>
        {/* RIGHT HOME-PANEL */}
        <motion.div
          style={
            slideLeft ? slideLeftStyle_rightPanel
              : slideRight ? slideRightStyle_rightPanel
                : baseStyle_rightPanel
          }
        >
          {slideRight && <Down />}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}