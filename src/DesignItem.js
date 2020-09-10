import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class DesignItem extends React.Component {
  render(){
    let { title, id } = this.props.design
    return (
      <div className="design-card">
        <h2>{title}</h2>
        <Link to={`/designs/${id}`}>
          <div className="design-image">
            {this.props.design.cells.map((cellArr, x) => cellArr.map((cell, y) => 
              <div key={(x+y)} className="cell" style={{ backgroundColor: cell}}>
              </div>
            ))}
          </div>
        </Link>
        <p>Created by: {this.props.design.user.name}</p>
      </div>
    )
  }
}

export default withRouter(DesignItem)