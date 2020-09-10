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
    // if (this.state.projects.length === 0) {
    //   return (
    //     <h3>It looks like you haven't started working on any projects! You can add to this list by selected "Add to Your Projects" inside any design on the main page.</h3>
    //   )
    // } else {
      return this.state.projects.map(design => { 
        return (
        <DesignItem key={design.id} design={design.design} user={this.props.user} />
      )})
    // }
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