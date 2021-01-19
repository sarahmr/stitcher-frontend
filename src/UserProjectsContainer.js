import React, { useEffect, useState } from "react"
import DesignItem from './DesignItem'

function UserProjectsContainer(props) {
  let [projects, setProjects] = useState([])
  let [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001/projects", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then((projects) => {
        setProjects(projects)
        setIsFetching(true)
      })
  }, [])
  

  let renderProjects = () => {
    if (isFetching && projects.length === 0) {
      return (
        <h3>It looks like you haven't started working on any projects! You can add to this list by selected "Add to Your Projects" inside any design on the main page.</h3>
      )
    } else {
      return projects.map(design => { 
        return (
        <DesignItem key={design.id} design={design.design} user={props.user} />
      )})
    }
  }

  return(
    <div className="design-container">
      {renderProjects()}
    </div>
  )
}

export default UserProjectsContainer