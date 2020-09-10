import React from 'react'

class Color extends React.Component {
  render(){
    return (
      <button 
        className="color"
        style={{ backgroundColor: this.props.color }}
        onClick={() => this.props.selectAColor(this.props.color)}
      >
      </button>
    )
  }
}

export default Color