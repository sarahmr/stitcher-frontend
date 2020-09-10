import React from 'react'

class Progress extends React.Component {

  render(){
    let total = this.props.cells.map(cellArr => cellArr.length).reduce((acc,cur) => acc + cur)

    let completed = this.props.completedCells.map(cellArr => cellArr.filter(cell => cell === true).length).reduce((acc, curr) => acc + curr )

    let percentage = (completed/total) * 100
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