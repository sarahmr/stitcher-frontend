import React from 'react'

class Cell extends React.Component {

  startGrab = () => {
    this.props.changeCollecting()
    this.props.updateCellCollectionColor(this.props.cell)
  }

  grabbing = () => {
    if (this.props.collecting === true) {
      this.props.updateCellCollectionColor(this.props.cell)
    }
  }

  endGrab = () => {
    this.props.updateCellCollectionColor(this.props.cell)
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
        {this.props.cell.symbol}
      </div>
    )
  }
}

export default Cell