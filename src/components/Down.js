import React, { Component } from "react";
import styles from "../styles/down.module.css";
import { motion } from "framer-motion";

export default class Upload extends Component {
  render() {
    return (
      <>
        <motion.div
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
        ></motion.div>
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
          <input className={styles.link_input} type="text" />
          <button className={styles.download_link}>&darr;</button>
        </motion.div>
      </>
    );
  }
}
