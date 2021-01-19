import React, { useState, useEffect } from "react"
import Progress from './Progress'
import Supplies from './Supplies'
import Cell from './Cell'
import { withRouter, useHistory } from "react-router-dom"
import Data from './data.json'

function ProjectDetail(props) {
  let [design, setDesign] = useState(null)

  let [cellsCompleted, setCellsCompleted] = useState([])

  let [isCollecting, setIsCollecting] = useState(false)

  let [project_id, setProjectId] = useState(null)

  let history = useHistory()

  useEffect(() => {
    let mounted = true
    
    let id = props.match.params.id

    if (props.user) {
      fetch(`http://localhost:3001/projects`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`
          }
      })
      .then(res => res.json())
      .then((projects) => {
        let project = projects.find(project => project.design.id === Number(id)) 
        console.log(projects)
        if (project && mounted) {
          setDesign(project.design)
          setCellsCompleted(project.cells)
          setProjectId(project.id)
        }
      })
    }

    fetch(`http://localhost:3001/designs/${id}`)
    .then(res => res.json())
    .then((design) => {
      if (mounted) {
        setDesign(design)
      }
    })

    return () => { mounted = false };
  }, [])

  useEffect(() => {
    let interval = setInterval(() => {
      if (project_id) {
      fetch(`http://localhost:3001/projects/${project_id}`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${localStorage.token}`,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          cells: cellsCompleted
        })
      })
      .then(res => res.json())
      .then((project) => {
      })
    }}, 5000)
    return clearInterval(interval)
  }, [])

  let addToCollection = (cellX, cellY) => {

    let newCells = cellsCompleted.map((cellArr, x) => cellArr.map((cell, y) => {
      if (x === cellX && y === cellY){
        let newCell = !cell
        return newCell
      } return cell
    }))

    setCellsCompleted(newCells)
  }

  let handleAddProject = () => {
    let mounted = true

    fetch("http://localhost:3001/projects/", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        design_id: design.id,
        user_id: props.user.id
      })
    })
    .then(res => res.json())
    .then((obj) => {
      if (mounted) {
        setDesign(obj.design)
        setCellsCompleted(obj.cells)
        setProjectId(obj.id)
      }
    })
    // return () => { mounted = false };
  }

  let handleDeleteDesign = () => {
    let mounted = true

    fetch(`http://localhost:3001/designs/${design.id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then((obj) => {
      // callback not supported
      if (mounted) {
        setDesign(null)
        props.removeDesign(obj)
      }
    })
    handleRedirect()
    // return () => { mounted = false };
  }

  let handleDeleteProject = () => {
    let mounted = true
    console.log(project_id)

    fetch(`http://localhost:3001/projects/${project_id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then((obj) => {
      if (mounted) {
        setDesign(null)
        setCellsCompleted([])
        setProjectId(null)
      }
    })

    handleRedirect()
    // return () => { mounted = false };
  }

  let displaySupplies = () => {
    let suppliesList = []
    // let design = design

    design.cells.flat().forEach(color => { 
      if ( color === "#FDF5E6") {
        
      } else if (!suppliesList.includes(color)) { 
        suppliesList.push(color) 
      }
    })

    return suppliesList.map(supply => <Supplies key={supply} supply={Data.supplies[supply]} />)
  }

  let handleMouseDown = () => {
    setIsCollecting(true)
  }

  let handleMouseUp = () => {
    setIsCollecting(false)
  }

  let handleMouseLeave = () => {
    setIsCollecting(false)
  }

  let handleRedirect = () => {
    history.push('/')
  }

  if (!design) {
    return null
  } 

  let { title } = design
  return (
    <div className="project-details"> 
      <div className="design-info">
        <h2>{title}</h2>
        <p>Created by: {design.user.name}</p>
        <div className="details-buttons">
          { cellsCompleted.length > 0 ? <button onClick={handleDeleteProject}>Delete Project</button> : null }
          { props.user && props.user.id === design.user.id ? 
            <button onClick={handleDeleteDesign}>Delete Design</button>
          : null}
          { props.user && !cellsCompleted.length > 0 ? 
            <button onClick={handleAddProject}>Add to Your Projects</button> : null }
        </div>
      </div>
      <div className="design-image" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave}>
        {design.cells.map((cellArr, x) => cellArr.map((cell, y) => {
          let opacity = 1
          if (cellsCompleted.length > 0 && cellsCompleted[x][y] === true ){
            opacity = .3
          }
          return (
            <Cell 
              key={(x + y)}
              cell={cell}
              opacity={opacity}
              collecting={isCollecting}
              // changeCollecting={changeCollecting}
              addToCollection={addToCollection}
              x={x}
              y={y}
            />
          )
        }
        ))}
      </div>
      <div className="supplies">
        <h2>Embroidery Thread Supplies:</h2>
        <ul>
          {displaySupplies()}
        </ul>
      </div>
      { cellsCompleted.length > 0 ? 
          <div className="progress">
          <Progress 
            cells={design.cells} 
            completedCells={cellsCompleted} />
          </div> 
        : null }
    </div> 
  )
}

export default withRouter(ProjectDetail)