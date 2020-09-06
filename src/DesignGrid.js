import React from 'react'
import Cell from './Cell'

class DesignGrid extends React.Component {

  state = {
    collecting: false,
    cellsToChange: []
  }

  componentDidUpdate(prevProps){
    if (this.props.selectedColor !== prevProps.selectedColor) {
      this.setState({
        cellsToChange: []
      })
    }
  }

  changeCollecting = () => {
    this.setState( prevState => ({
      collecting: !prevState.collecting
    }))
  }

  updateCellCollectionColor = (cells) => {
    console.log(cells)
    if (!this.state.cellsToChange.includes(cells)) {
      this.setState({
        cellsToChange: [...this.state.cellsToChange, cells]
      })
    }
    this.state.cellsToChange.map(cell => cell.color = this.props.selectedColor)
  }

  render(){
    return (
      <div className="grid">
        {this.props.cells.map(cellRow => 
          cellRow.map(cell => 
            <Cell
              cell={cell} 
              changeCellColor={this.changeCellColor} 
              collecting={this.state.collecting} 
              changeCollecting={this.changeCollecting} 
              updateCellCollectionColor={this.updateCellCollectionColor}
            />
          )
        )}
      </div>
    )
  }
}

export default DesignGrid