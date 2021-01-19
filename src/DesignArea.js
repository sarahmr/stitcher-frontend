import React from 'react'
import DesignGrid from './DesignGrid'
// import Data from './data.json'

function DesignArea(props) {
  return (
    <div className="design area">
      <DesignGrid 
        selectedColor={props.selectedColor} 
        cells={props.cells}
        updateCellCollectionColor={props.updateCellCollectionColor} />
    </div>
  )
}

export default DesignArea