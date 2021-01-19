import React, { useState } from 'react'
import Cell from './Cell'

function DesignGrid(props) {
  let [isCollecting, setIsCollecting] = useState(false)

  return (
    <div className="grid"
      onMouseDown={() => setIsCollecting(true)} 
      onMouseUp={() => setIsCollecting(false)} 
      onMouseLeave={() => setIsCollecting(false)}
    >
      {props.cells.map((cellRow, x) => 
        cellRow.map((cell, y) => 
          <Cell
            key={(x + y)}
            cell={cell} 
            collecting={isCollecting} 
            changeCollecting={setIsCollecting}
            addToCollection={props.updateCellCollectionColor}
            x={x}
            y={y}
          />
        )
      )}
    </div>
  )
}

export default DesignGrid