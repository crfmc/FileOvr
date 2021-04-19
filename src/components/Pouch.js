/* 
Inpiration for this component came from Egor Egorov's Medium article found below:
https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929
 */
import DragNDrop from "./DragNDrop";
import React, { Component } from "react";
import styles from "../styles/pouch.module.css"

export default class Pouch extends Component
{
  state = {
    file: {},
    file_abbrev: ""
  }

  handleChooseFile = (e) =>
  {
    let chosen = e.target.files[0]
    this.setState({
      file: chosen,
      file_abbrev: this.abbrev(chosen.name)
    })
  }

  handleDrop = (up_file) => 
  {
    this.setState({
      file: up_file[0],
      file_abbrev: this.abbrev(up_file[0].name)
    })
    // let fileList = this.state.files
    // for (var i = 0; i < files.length; i++) 
    // {
    //   if (!files[i].name) return
    //   fileList.push(files[i].name)
    // }
    // this.setState({files: fileList})
  }

  handleSubmit = (e) =>
  {
    // e.preventDefault()
    // e.stopPropagation()
    this.props.onSub({
      'file': this.state.file,
      'file_abbrev': this.state.file_abbrev
    })
  }

  handleCancel = () =>
  {
    this.setState({
      file: {},
      file_abbrev: ""
    })
  }

  abbrev = (str) => {
    let len = str.length;
    if (len < 30) return str
    else return str.substring(0,20) + " ... " + str.substring((len - 6))
  }

  render()
  {
    // Branch for uploaded file awaiting submission
    if (this.state.file.name)
    {
      return (
        <>
          <div className={styles.show_selected_file}>
            <div className={styles.file_option_container}>
              <button
                className={styles.cancel_button}
                onClick={this.handleCancel}
              >
                x
              </button>
              <h1 className={styles.selected_filename}>
                {this.state.file_abbrev}
              </h1>
            </div>
            <button
              className={styles.send_file}
              onClick={this.handleSubmit}
            >
              Send this file
            </button>
          </div>
        </>
      );
    }
    else {
      // Branch for awaiting file upload
      return (
        <>
          <DragNDrop handleDrop={this.handleDrop}>
            {/* {this.state.files.map((file, i) =>
            {
              if (i == 0)
              {
                <div key={i}>{file}</div>
              }
            }
            )} */}
            <h1 className={styles.up_subtext}>Drop your file here</h1>
            <h3 className={styles.choose_file_subtext}>...or click here to find it</h3>
            <input
              className={styles.choose_file}
              type="file"
              onChange={this.handleChooseFile}
            />
          </DragNDrop>
        </>
      );
    }
    
  }
}