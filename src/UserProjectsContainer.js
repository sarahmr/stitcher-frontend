import React from "react"
import Project from './Project'

class UserProjectsContainer extends React.Component {

  renderProjects = () => {
    return this.props.designs.map(design => <Project key={design.id} design={design} />)
  }

  render(){
    return(
      <div className="design-container">
        {this.renderProjects()}
      </div>
    )
  }
}

export default UserProjectsContainer