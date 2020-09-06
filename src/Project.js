import React from "react"
import Cell from './Cell'
import { Route } from "react-router-dom"

class Project extends React.Component {
  render(){
    return(
        <div className="design-card">
           <Route to={`/user/${this.props.design.user_id}/projects/${this.props.design.id}`}>
          <h2>{this.props.design.title}</h2>
          </Route>
          <div className="design-image">
            {this.props.design.cells.map(cellArr => cellArr.map(cell => <Cell cell={cell} />))}
          </div>
          <p>Created by: {this.props.design.user_id}</p>
        </div>
    )
  }
}

export default Project