import React from 'react'

class DesignItem extends React.Component {
  render(){
    let { title, user_id } = this.props.design
    return (
      <div className="design-card">
        <h2>{title}</h2>
        <div className="design-image">
          {this.props.design.cells.map(cellArr => cellArr.map(cell => 
            <div className="cell" style={{ backgroundColor: cell.color}}>
              {cell.symbol}
            </div>
          ))}
        </div>
        <p>Created by: {user_id}</p>
      </div>
    )
  }
}

export default DesignItem