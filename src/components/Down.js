import React, { Component } from "react";
import styles from "../styles/down.module.css";
import { motion } from "framer-motion";

export default class Receive extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      link_input: ""
    }
  }

  updateInput = (e) =>
  {
    e.preventDefault()
    let input = e.target.value
    this.setState({
      link_input: input
    }, console.log(this.state.link_input))
  }

  render()
  {
    return (
      <>
        {/* <motion.div
          className={styles.download_file_shadow}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            type: "tween",
            delay: 0.5,
          }}
        ></motion.div> */}
        <motion.div
          className={styles.download_file}
          initial={{
            x: 900,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h2 className={styles.down_title}>Enter Code:</h2>
          <input
            className={this.state.link_input.length > 4 ? styles.link_input_pop : styles.link_input}
            type="text"
            onChange={this.updateInput}
            maxLength="8"
          />
          <button
            className={this.state.link_input.length > 4 ? styles.download_link_pop : styles.download_link}

          >
              &darr;
            </button>
        </motion.div>
      </>
    );}
}
