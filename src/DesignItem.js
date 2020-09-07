import React from 'react'
import { Link } from 'react-router-dom'

class DesignItem extends React.Component {
  render(){
    let { title, user_id, id } = this.props.design
    return (
      <div className="design-card">
        <h2>{title}</h2>
        <Link to={`/designs/${id}`}>
          <div className="design-image">
            {this.props.design.cells.map(cellArr => cellArr.map(cell => 
              <div className="cell" style={{ backgroundColor: cell.color}}>
                {cell.symbol}
              </div>
            ))}
          </div>
        </Link>
        <p>Created by: {user_id}</p>
      </div>
    )
  }
}

export default DesignItem