import React from 'react'

class Progress extends React.Component {

  state = {
    totalCells: 0
  }

  componentDidMount(){
    let total = this.props.cells.map(cellArr => cellArr.length).reduce((acc,cur) => acc + cur)
    this.setState({
      totalCells: total
    })
  }

  render(){
    let percentage = (this.props.completedCells.length/this.state.totalCells) * 100
    return (
      <div>
        <h2>Progress</h2>
        <div className="meter">
          <span style={{width: `${percentage}%`}}></span>
      </div>
      </div>
    )
  }
}

export default Progress