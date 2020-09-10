import React from 'react'

class Cell extends React.Component {

  startGrab = () => {
    this.props.changeCollecting()
    this.props.addToCollection(this.props.x, this.props.y)
  }

  grabbing = () => {
    if (this.props.collecting === true) {
      this.props.addToCollection(this.props.x, this.props.y)
    }
  }

  endGrab = () => {
    this.props.changeCollecting()
    this.props.addToCollection(this.props.x, this.props.y)
  }

  render() {
    return (
      <div className="cell" 
      style={{ backgroundColor: this.props.cell, opacity: this.props.opacity }}
      onMouseDown={this.startGrab}
      onMouseEnter={this.grabbing}
      onMouseUp={this.endGrab}
      >
      </div>
    )
  }
}

export default Cell