import React, { Component } from "react";
import styles from "../styles/up.module.css";
import { motion } from "framer-motion";

const code_from_upload = "QWERTY123";

export default class Upload extends Component {
  render() {
    return (
      <>
        <motion.div
          className={styles.upload_file_shadow}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1.5,
          }}
          transition={{
            duration: 1.5,
            type: "tween",
            dampening: 50,
            stiffness: 50,
          }}
        ></motion.div>
        <motion.div
          className={styles.upload_file}
          initial={{
            x: -900,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className={styles.upload_file_prompt}>
            <h2 className={styles.up_subtext}>Drop/Insert File</h2>
            <input className={styles.file_input} type="file" />
          </div>
          <div className={styles.code_from_upload_container}>
            <h2>Code</h2>
            <h4 className={styles.code_from_upload}>{code_from_upload}</h4>
          </div>
        </motion.div>
      </>
    );
  }
}
