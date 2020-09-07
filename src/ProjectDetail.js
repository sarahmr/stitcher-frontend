import React from "react"
import Progress from './Progress'
import Supplies from './Supplies'

class ProjectDetail extends React.Component {

  state = {
    design: null,
    cellsCompleted: [],
    collecting: false
  }

  mouseDown = (cell) => {
    this.updateCollecting()
    this.addToCollection(cell)
  }

  mouseOver = (cell) => {
    if (this.state.collecting === true) {
      this.addToCollection(cell)
    }
  }

  mouseUp = (cell) => {
    this.updateCollecting()
    this.addToCollection(cell)
  }

  updateCollecting = () => {
    this.setState(prevState => ({
      collecting: !prevState.collecting
    }))
  }

  addToCollection = (cell) => {
    if (!this.state.cellsCompleted.includes(cell)){
      this.setState({
        cellsCompleted: [...this.state.cellsCompleted, cell]
      })
    }
    this.state.cellsCompleted.map(cell => cell["symbol"] = "X")
  }

  componentDidMount(){
    let id = this.props.match.params.id
    let design = this.props.designs.find(design => design.id === Number(id))
    console.log("here")
    this.setState({ design })
  }

  render(){
    if (!this.state.design) {
      return null
    } 
    let { title, user_id } = this.state.design
    return (
      <div className="project-details"> 
        <div className="design-info">
          <h2>{title}</h2>
          <p>Created by: {user_id}</p>
        </div>
        <div className="design-image">
          {this.state.design.cells.map(cellArr => cellArr.map(cell => 
            <div 
              className="cell" 
              style={{ backgroundColor: cell.color}}
              onMouseDown={() => this.mouseDown(cell)}
              onMouseOver={() => this.mouseOver(cell)}
              onMouseUp={() => this.mouseUp(cell)}
            >
              {cell.symbol}
            </div>
          ))}
        </div>
        { this.props.user ? 
          <div className="progress">
          <Progress 
            cells={this.state.design.cells} 
            completedCells={this.state.cellsCompleted} 
          />
          </div> : null }
        <div className="supplies">
          <Supplies />
        </div>
      </div> 
    )
  }
}

export default ProjectDetail