import React from 'react'
import DesignArea from './DesignArea'
import Tools from './Tools'
import Colors from './Colors'

class CreateDesign extends React.Component {

  state = {
    selectedColor: '#FDF5E6'
  }

  colors = ["#FFFFFF", "#000000", "#FF0000", "#008000", "#0000FF", "#FFFF00", "#800080"]

  selectAColor = (selectedColor) => {
    this.setState({ selectedColor })
  }

  render(){
    return (
      <div className="create-area">
        <DesignArea selectedColor={this.state.selectedColor} />
        <Tools />
        <Colors selectAColor={this.selectAColor} colors={this.colors} />
      </div>
    )
  }
}

export default CreateDesign