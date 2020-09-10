import React from 'react'
import DesignGrid from './DesignGrid'
// import Data from './data.json'

class DesignArea extends React.Component {

  render(){
    return (
      <div className="design area">
        <DesignGrid 
          selectedColor={this.props.selectedColor} 
          cells={this.props.cells}
          updateCellCollectionColor={this.props.updateCellCollectionColor} />
      </div>
    )
  }
}

export default DesignArea