import React from 'react'

class Cell extends React.Component {

  startGrab = () => {
    this.props.addToCollection(this.props.x, this.props.y)
  }

  grabbing = () => {
    if (this.props.collecting === true) {
      this.props.addToCollection(this.props.x, this.props.y)
    }
  }

  render() {
    return (
      <div className="cell" 
      style={{ backgroundColor: this.props.cell, opacity: this.props.opacity }}
      onMouseDown={this.startGrab}
      onMouseOver={this.grabbing}
      >
      </div>
    )
  }
}

export default Cell