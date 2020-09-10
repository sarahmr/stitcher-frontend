import React from 'react'

class Cell extends React.Component {

  startGrab = () => {
    console.log("down")
    this.props.changeCollecting()
    this.props.addToCollection(this.props.x, this.props.y)
  }

  grabbing = () => {
    console.log("over")
    if (this.props.collecting === true) {
      this.props.addToCollection(this.props.x, this.props.y)
    }
  }

  endGrab = () => {
    console.log("up")
    this.props.changeCollecting()
    this.props.addToCollection(this.props.x, this.props.y)
  }

  render() {
    return (
      <div className="cell" 
      style={{ backgroundColor: this.props.cell, opacity: this.props.opacity }}
      onMouseDown={this.startGrab}
      onMouseOver={this.grabbing}
      onMouseUp={this.endGrab}
      >
      </div>
    )
  }
}

export default Cell