/* 
Inpiration for this component came from Egor Egorov's Medium article found below:
https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929
 */

import React, { Component } from "react";

export default class DragNDrop extends Component
{
  state = {
    drag: false
  }

  dropRef = React.createRef()

  handleDrag = (e) =>
  {
    e.preventDefault()
    e.stopPropagation()
  }

  handleDragIn = (e) =>
  {
    e.preventDefault()
    e.stopPropagation()
    this.dragCounter++
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0)
    {
      this.setState({ drag: true })
    }
  }

  handleDragOut = (e) =>
  {
    e.preventDefault()
    e.stopPropagation()
    this.dragCounter--
    if (this.dragCounter > 0)
    {
      return
    }
    this.setState({ drag: false })
  }

  handleDrop = (e) =>
  {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ drag: false })
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0)
    {
      this.props.handleDrop(e.dataTransfer.files)
      e.dataTransfer.clearData()
      this.dragCounter = 0
    }
  }

  componentDidMount()
  {
    this.dragCounter = 0
    let div = this.dropRef.current
    div.addEventListener('dragenter', this.handleDragIn)
    div.addEventListener('dragleave', this.handleDragOut)
    div.addEventListener('dragover', this.handleDrag)
    div.addEventListener('drop', this.handleDrop)
  }

  componentWillUnmount()
  {
    let div = this.dropRef.current
    div.removeEventListener('dragenter', this.handleDragIn)
    div.removeEventListener('dragleave', this.handleDragOut)
    div.removeEventListener('dragover', this.handleDrag)
    div.removeEventListener('drop', this.handleDrop)
  }

  render()
  {
    return (
      <div
        style={{display: 'inline-block', position: 'relative'}}
        ref={this.dropRef}
      >
        {this.state.drag &&
          <div
            style={{
              border: 'dashed grey 4px',
              backgroundColor: 'rgba(255,255,255,.8)',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0, 
              right: 0,
              zIndex: 9999
            }}
          >
          <div
            style={{
                position: 'absolute',
                top: '50%',
                right: 0,
                left: 0,
                textAlign: 'center',
                color: 'grey',
                fontSize: 15
            }}
          >
            <h4>
              Ready to catch...
            </h4>
            </div>
          </div>
        }
        {this.props.children}
      </div>
    );
  }
}