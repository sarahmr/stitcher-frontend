import React from 'react'

class Supplies extends React.Component {
  render(){
    return (
      <li>{this.props.supply.item}</li>
    )
  }
}

export default Supplies