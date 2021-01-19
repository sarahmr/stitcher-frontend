import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function DesignItem(props) {
  let { title, id } = props.design
  return (
    <div className="design-card">
      <h2>{title}</h2>
      <Link to={`/designs/${id}`}>
        <div className="design-image">
          {props.design.cells.map((cellArr, x) => cellArr.map((cell, y) => 
            <div key={(x+y)} className="cell" style={{ backgroundColor: cell}}>
            </div>
          ))}
        </div>
      </Link>
      <p>Created by: {props.design.user.name}</p>
    </div>
  )
}

export default withRouter(DesignItem)