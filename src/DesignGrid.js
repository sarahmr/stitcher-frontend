import React from 'react'
import Cell from './Cell'

class DesignGrid extends React.Component {

  state = {
    collecting: false,
  }

  // componentDidUpdate(prevProps){
  //   if (this.props.selectedColor !== prevProps.selectedColor) {
  //     this.setState({
  //       cellsToChange: []
  //     })
  //   }
  // }

  changeCollecting = () => {
    this.setState( prevState => ({
      collecting: !prevState.collecting
    }))
  }

  render(){
    return (
      <div className="grid">
        {this.props.cells.map((cellRow, x) => 
          cellRow.map((cell, y) => 
            <Cell
              cell={cell} 
              // changeCellColor={this.changeCellColor} 
              collecting={this.state.collecting} 
              changeCollecting={this.changeCollecting} 
              updateCellCollectionColor={this.props.updateCellCollectionColor}
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