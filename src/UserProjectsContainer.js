import React from "react"
import DesignItem from './DesignItem'

class UserProjectsContainer extends React.Component {

  renderProjects = () => {
    return this.props.designs.map(design => <DesignItem key={design.id} design={design} />)
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