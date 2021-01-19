import React from 'react'

function Cell(props) {

  let startGrab = () => {
    props.addToCollection(props.x, props.y)
  }

  let grabbing = () => {
    if (props.collecting === true) {
      props.addToCollection(props.x, props.y)
    }
  }

  return (
    <div className="cell" 
    style={{ backgroundColor: props.cell, opacity: props.opacity }}
    onMouseDown={startGrab}
    onMouseOver={grabbing}
    >
    </div>
  )
}

export default Cell