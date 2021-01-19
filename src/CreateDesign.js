import React, { useEffect, useState } from 'react'
import DesignArea from './DesignArea'
import Colors from './Colors'
import Data from './data.json'

function CreateDesign(props) {
  let [cells, addCells] = useState([])

  useEffect(() => {
    Data.cells.forEach(cellArr => cellArr.forEach(cell => cell = "#FDF5E6"))

    addCells(Data.cells)
  }, [])

  let [selectedColor, changeSelectedColor] = useState("#FDF5E6")

  let [title, changeTitle] = useState("")

  const colors = ["#FF0000", "#FF007F", "#32CD32", "#0A5C23", "#87CEFA", "#1E90FF", "#8A2BE2", "#8B4513", "#CD853F", "#FFFF00", "#FF8C00", "#000000", "#FFFFFF", "#696969", "#D3A2F9"]

  let selectAColor = (colorChoice) => {
    changeSelectedColor(colorChoice)
  }

  let handleSubmit = (event) => {
    event.preventDefault()
    
    props.createNewDesign(cells, title)
  }

  let updateCellCollectionColor = (cellX, cellY) => {
    let newCells = cells.map((cellArr, x) => cellArr.map((cell, y) => {
      if ( x === cellX && y === cellY) {
        let newCell = selectedColor
        return newCell
      } return cell
    }))

    addCells(newCells)
  }

  return (
    <div className="create-area">
      <form className="create-form" onSubmit={handleSubmit}>
        <h2>Create Your Design</h2>
        <div>
        <label>Title:</label>
          <input 
            onChange={(evt) => changeTitle(evt.target.value)} 
            name="title" 
            value={title}
          />
        </div>
        <button>Submit Design</button>
      </form>
      <DesignArea 
        selectedColor={selectedColor} 
        cells={cells}
        updateCellCollectionColor={updateCellCollectionColor}
      />
      <Colors selectAColor={selectAColor} colors={colors} />
    </div>
  )
}

export default CreateDesign