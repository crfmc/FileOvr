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
      subfile: {},
      code: ""
    }
  }

  handleSub = (sub) =>
  {
    this.setState({
      subfile: sub
    },
    console.log(sub))

  }
  
  render()
  {
    if (this.state.subfile.name)
    {
      return (
        <>
          <div
            className={styles.upload_file}
          >
            <h1>
              {this.state.subfile.name}
            </h1>
            <h2>
              Loading...
            </h2>
          </div>
        </>
      );
    }
    else {
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
              <h2 className={styles.up_subtext}>Step 1: Drop your file here</h2>
              <Pouch onSub={this.handleSub}/>
            </div>
            <div className={styles.code_from_upload_container}>
              <h2>Step 2: Copy your code</h2>
              <h4 className={styles.code_from_upload}>{this.state.code}</h4>
            </div>
          </motion.div>
        </>
      );
    }
    
  }
}
