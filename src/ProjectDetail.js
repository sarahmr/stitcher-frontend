import React from "react"
import Progress from './Progress'
import Supplies from './Supplies'
import Cell from './Cell'
import { withRouter } from "react-router-dom"
import Data from './data.json'

class ProjectDetail extends React.Component {

  state = {
    design: null,
    cellsCompleted: [],
    collecting: false,
    project_id: null
  }

  componentDidMount(){
    let id = this.props.match.params.id
    if (this.props.user) {
      fetch(`http://localhost:3001/projects`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`
          }
      })
      .then(res => res.json())
      .then((projects) => {
        let project = projects.find(project => project.design.id === Number(id)) 
        if (project) {
          this.setState({ 
            design: project.design,
            cellsCompleted: project.cells,
            project_id: project.id
          })
        }
      })
    }

    fetch(`http://localhost:3001/designs/${id}`)
    .then(res => res.json())
    .then((design) => {
      this.setState({ design })
    })
      // work on clearing it in unmount
    this.interval = setInterval(() => {
      if (this.state.project_id) {
      fetch(`http://localhost:3001/projects/${this.state.project_id}`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${localStorage.token}`,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          cells: this.state.cellsCompleted
        })
      })
      .then(res => res.json())
      .then((project) => {
      })
    }}, 5000)
  }

  changeCollecting = () => {
    this.setState(prevState => ({
      collecting: !prevState.collecting
    }))
  }

  addToCollection = (cellX, cellY) => {

    let newCells = this.state.cellsCompleted.map((cellArr, x) => cellArr.map((cell, y) => {
      if (x === cellX && y === cellY){
        let newCell = true
        return newCell
      } return cell
    }))

    this.setState({
      cellsCompleted: newCells
    })
  }

  handleAddProject = () => {
    fetch("http://localhost:3001/projects/", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        design_id: this.state.design.id,
        user_id: this.props.user.id
      })
    })
    .then(res => res.json())
    .then((obj) => {
      this.setState({
        design: obj.design,
        cellsCompleted: obj.cells
      })
    })
  }

  handleDeleteDesign = () => {
    fetch(`http://localhost:3001/designs/${this.state.design.id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then((obj) => {
      this.setState({
        design: null
      },
      () => { this.props.history.push('/')})
      this.props.removeDesign(obj)
    })
  }

  handleDeleteProject = () => {
    fetch(`http://localhost:3001/projects/${this.state.project_id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then((obj) => {
      this.setState({
        design: null,
        completedCells: [],
        project_id: null
      },
      () => { this.props.history.push('/')})
    })
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  displaySupplies = () => {
    let suppliesList = []
    let design = this.state.design
    design.cells.flat().forEach(color => { if (!suppliesList.includes(color)) { suppliesList.push(color) }})

    return suppliesList.map(supply => <Supplies key={supply} supply={Data.supplies[supply]} />)
  }

  render(){
    if (!this.state.design) {
      return null
    } 
    let { title } = this.state.design
    return (
      <div className="project-details"> 
        <div className="design-info">
          <h2>{title}</h2>
          <p>Created by: {this.state.design.user.name}</p>
          { this.state.cellsCompleted.length > 0 ? <button onClick={this.handleDeleteProject}>Delete Project</button> : null }
          { this.props.user && this.props.user.id === this.state.design.user.id ? 
            <button onClick={this.handleDeleteDesign}>Delete Design</button>
          : null}
          { this.props.user && !this.state.cellsCompleted.length > 0 ? 
            <button onClick={this.handleAddProject}>Add to Your Projects</button> : null }
        </div>
        <div className="design-image">
          {this.state.design.cells.map((cellArr, x) => cellArr.map((cell, y) => {
            let opacity = 1
            if (this.state.cellsCompleted.length > 0 && this.state.cellsCompleted[x][y] === true ){
              opacity = .3
            }
            return (
              <Cell 
                key={(x + y)}
                cell={cell}
                opacity={opacity}
                collecting={this.state.collecting}
                changeCollecting={this.changeCollecting}
                addToCollection={this.addToCollection}
                x={x}
                y={y}
              />
            )
          }
          ))}
        </div>
        <div className="supplies">
          <h3>Embroidery Thread Supplies:</h3>
          <ul>
            {this.displaySupplies()}
          </ul>
        </div>
        { this.state.cellsCompleted.length > 0 ? 
            <div className="progress">
            <Progress 
              cells={this.state.design.cells} 
              completedCells={this.state.cellsCompleted} />
            </div> 
          : null }
      </div> 
    )
  }
}

export default withRouter(ProjectDetail)