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
      subfile_abbrev: "",
      code: "",
      waiting: false
    }
  }

  handleSub = (sub) =>
  {
    this.setState({
      subfile: sub.file,
      subfile_abbrev: sub.file_abbrev
    })
    this.showLoading()
    setTimeout(() =>
    {
      this.setState({
        code: sub.file_abbrev,
        waiting: false
      })
    }, 500)

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

  handleSendAgain = () =>
  {
    this.setState({
      subfile: {},
      subfile_abbrev: "",
      code: "",
      waiting: false
    })
  }
  
  render()
  {
    if (this.state.waiting)
    {
      return (
        <>
          <div
            className={styles.upload_file_waiting}
          >
            <h1>
              {this.state.subfile_abbrev}
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
            <h2>Here's your code:</h2>
            <div className={styles.code_and_copy_container}>
              <textarea
                className={styles.code_from_upload}
                ref={(textarea) => this.textArea = textarea}
                value={this.state.code}
                readOnly
              />
              <div
                className={styles.copy_button}
                onClick={() => this.codeToClipboard()}
              >
              </div>
            </div>
            <button
              className={styles.send_again_button}
              onClick={this.handleSendAgain}
            >
              Send another file
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
            <Pouch onSub={this.handleSub}/>
          </motion.div>
        </>
      );
    }
    
  }
}
