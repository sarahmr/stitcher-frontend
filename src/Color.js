import React from 'react'

class Color extends React.Component {
  render(){
    return (
      <div 
        className="color"
        style={{ backgroundColor: this.props.color }}
        onClick={() => this.props.selectAColor(this.props.color)}
      >
      </div>
    )
  }
}

export default Color