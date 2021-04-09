import React, { Component } from "react";
import styles from "../styles/up.module.css";
import { motion } from "framer-motion";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Pouch from "./Pouch";

export default class Send extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      subfile: {},
      code: "",
      waiting: false
    }
  }

  handleSub = (sub) =>
  {
    this.setState({
      subfile: sub
    })
    this.showLoading()
    setTimeout(() => {
      this.setState({
      code: sub.name,
      waiting: false
    },
    console.log(sub))}, 2000)

  }

  showLoading() {
    this.setState({
      waiting: true
    })
  }

  codeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
  }
  
  render()
  {
    if (this.state.waiting)
    {
      return (
        <>
          <div
            className={styles.upload_file}
          >
            <h1>
              {this.state.subfile.name}
            </h1>
            <Loader
              type="Oval"
              color="#4d4d4d"
              height={100}
              width={100}
            // timeout={3000}
            />
          </div>
        </>
      );
    }
    else if (this.state.code)
    {
      return (
        <div className={styles.upload_file}>
          <div className={styles.code_from_upload_container}>
            <h2>Step 2: Copy your code</h2>
            <textarea
              className={styles.code_from_upload}
              ref={(textarea) => this.textArea = textarea}
              value={this.state.code}
              readOnly
            />
            <button
              onClick={() => this.codeToClipboard()}
            >
              Copy
            </button>
          </div>
        </div>
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
          </motion.div>
        </>
      );
    }
    
  }
}
