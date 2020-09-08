import React from 'react'

class Cell extends React.Component {

  startGrab = () => {
    this.props.changeCollecting()
    this.props.updateCellCollectionColor(this.props.x, this.props.y)
  }

  grabbing = () => {
    if (this.props.collecting === true) {
      this.props.updateCellCollectionColor(this.props.x, this.props.y)
    }
  }

  endGrab = () => {
    this.props.updateCellCollectionColor(this.props.x, this.props.y)
    this.props.changeCollecting()
  }

  render() {
    return (
      <div className="cell" 
      style={{ backgroundColor: this.props.cell.color }}
      onMouseDown={this.startGrab}
      onMouseOver={this.grabbing}
      onMouseUp={this.endGrab}
      >
      </div>
    )
  }
}

export default Cell