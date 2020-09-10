import React from "react"
import DesignItem from './DesignItem'

class UserProjectsContainer extends React.Component {

  state = {
    projects: []
  }

  componentDidMount(){
  fetch("http://localhost:3001/projects", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then((projects) => {
      this.setState({ projects })
    })
  }

  renderProjects = () => {
    return this.state.projects.map(design => { 
      return (
      <DesignItem key={design.id} design={design.design} user={this.props.user} />
    )})
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