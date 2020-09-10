import React from 'react'
import DesignArea from './DesignArea'
import Colors from './Colors'
import Data from './data.json'

class CreateDesign extends React.Component {

  state = {
    cells: [],
    selectedColor: '#FDF5E6',
    // finalColors: [],
    title: ''
  }

  componentDidMount(){
    Data.cells.forEach(cellArr => cellArr.forEach(cell => cell = "#FDF5E6"))

    this.setState({
      cells: Data.cells
    })
  }

  colors = ["#FF0000", "#FF007F", "#32CD32", "#0A5C23", "#87CEFA", "#1E90FF", "#8A2BE2", "#8B4513", "#CD853F", "#FFFF00", "#FF8C00", "#000000", "#FFFFFF", "#696969", "#D3A2F9"]

  selectAColor = (selectedColor) => {
    this.setState({ 
        selectedColor: selectedColor,
        // finalColors: [...this.state.finalColors, selectedColor]
     })
  }

  handleTitle = (event) => {
    this.setState({ 
      title: event.target.value
     })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    this.props.createNewDesign(this.state.cells, this.state.title)

    this.setState({
      title: ""
    })
  }

  updateCellCollectionColor = (cellX, cellY) => {
    let newCells = this.state.cells.map((cellArr, x) => cellArr.map((cell, y) => {
      if ( x === cellX && y === cellY) {
        let newCell = this.state.selectedColor
        return newCell
      } return cell
    }))

    this.setState({
      cells: newCells
    })
  }

  render(){
    return (
      <div className="create-area">
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input 
            onChange={this.handleTitle} 
            name="title" 
            value={this.state.title}
          />
          <button>Submit Design</button>
        </form>
        <DesignArea 
          selectedColor={this.state.selectedColor} 
          cells={this.state.cells}
          updateCellCollectionColor={this.updateCellCollectionColor}
        />
        <Colors selectAColor={this.selectAColor} colors={this.colors} />
      </div>
    )
  }
}

export default CreateDesign