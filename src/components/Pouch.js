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
    files: [
    ]
  }

  handleDrop = (files) => 
  {
    let fileList = this.state.files
    for (var i = 0; i < files.length; i++) 
    {
      if (!files[i].name) return
      fileList.push(files[i].name)
    }
    this.setState({files: fileList})
  }

  render()
  {
    return (
      <>
        <DragNDrop handleDrop={this.handleDrop}>
          <div className={styles.pouch_container}>
          {this.state.files.map((file, i) =>
            <div key={i}>{file}</div>
          )}
        </div>
      </DragNDrop>
      </>
    );
  }
}