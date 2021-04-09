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
    file: {}
  }

  handleChooseFile = (e) =>
  {
    let chosen = e.target.files[0]
    console.log(chosen)
    this.setState({file: chosen})
  }

  handleDrop = (up_file) => 
  {
    console.log(up_file)
    this.setState({file: up_file})
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
    this.props.onSub(this.state.file)
  }

  render()
  {
    // Branch for uploaded file awaiting submission
    if (this.state.file.name)
    {
      return (
        <>
          {this.state.file.name}
          <button
            className={styles.send_file}
            onClick={this.handleSubmit}
          >
            Send this file
          </button>
        </>
      );
    }
    else {
      // Branch for awaiting file upload
      return (
        <>
          <DragNDrop handleDrop={this.handleDrop}>
            <div className={styles.pouch_container}>
              {/* {this.state.files.map((file, i) =>
              {
                if (i == 0)
                {
                  <div key={i}>{file}</div>
                }
              }
              )} */}
              {this.state.file.name}
              <h3 className={styles.choose_file_subtext}>or click here to find it</h3>
              <input
                className={styles.choose_file}
                type="file"
                onChange={this.handleChooseFile}
              />
            </div>
        </DragNDrop>
        </>
      );
    }
    
  }
}