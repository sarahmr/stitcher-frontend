import React from 'react'
import DesignGrid from './DesignGrid'
import Data from './data.json'

class DesignArea extends React.Component {

  state = {
    cells: Data.cells
  }

  render(){
    return (
      <div className="design area">
        <DesignGrid selectedColor={this.props.selectedColor} cells={this.state.cells} />
      </div>
    )
  }
}

export default DesignArea