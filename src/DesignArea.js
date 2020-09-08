import React from 'react'
import DesignGrid from './DesignGrid'
// import Data from './data.json'

class DesignArea extends React.Component {

  // state = {
  //   cells: []
  // }

  // componentDidMount(){
  //   Data.cells.forEach(cellArr => cellArr.forEach(cell => cell.color = "#FDF5E6"))

  //   this.setState({
  //     cells: Data.cells
  //   })
  // }

  // updateCellCollectionColor = (cellX, cellY) => {
  //   let newCells = this.state.cells.map((cellArr, x) => cellArr.map((cell, y) => {
  //     if ( x === cellX && y === cellY) {
  //       let newCell = {...cell}
  //       newCell.color = this.props.selectedColor
  //       return newCell
  //     } return cell
  //   }))

  //   this.setState({
  //     cells: newCells
  //   })
  // }

  render(){
    return (
      <div className="design area">
        <DesignGrid 
          selectedColor={this.props.selectedColor} 
          cells={this.props.cells}
          updateCellCollectionColor={this.props.updateCellCollectionColor} />
      </div>
    )
  }
}

export default DesignArea