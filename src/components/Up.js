import React, { Component } from "react";
import styles from "../styles/up.module.css";
import { motion } from "framer-motion";
import Pouch from "./Pouch"

export default class Send extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      code: ""
    }
  }
  
  render()
  {
    return (
      <>
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
            <Pouch />
            <h2 className={styles.up_subtext}>Drop/Insert File</h2>
            <input
              className={styles.file_input}
              type="file" />
          </div>
          <div className={styles.code_from_upload_container}>
            <h2>Code</h2>
            <h4 className={styles.code_from_upload}>{this.state.code}</h4>
          </div>
        </motion.div>
      </>
    );
  }
}
