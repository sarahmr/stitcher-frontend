import React from 'react'

function Color(props) {
  return (
    <button 
      className="color"
      style={{ backgroundColor: props.color }}
      onClick={() => props.selectAColor(props.color)}
    >
    </button>
  )
}

export default Color