import React from 'react'
import Cell from './Cell'

class DesignGrid extends React.Component {

  state = {
    collecting: false,
  }

  changeCollecting = (bool) => {
    this.setState({
      collecting: bool
    })
  }

  handleMouseDown = () => {
    this.setState({
        collecting: true
    })
  }

  handleMouseUp = () => {
    this.setState({
      collecting: false
    })
  }

  handleMouseLeave = () => {
    this.setState({
      collecting: false
    })
  }

  render(){
    return (
      <div className="grid" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseLeave={this.handleMouseLeave}>
        {this.props.cells.map((cellRow, x) => 
          cellRow.map((cell, y) => 
            <Cell
              key={(x + y)}
              cell={cell} 
              collecting={this.state.collecting} 
              changeCollecting={this.changeCollecting} 
              addToCollection={this.props.updateCellCollectionColor}
              x={x}
              y={y}
            />
          )
        )}
      </div>
    )
  }
}

export default DesignGrid