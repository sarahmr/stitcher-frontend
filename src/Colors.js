import React from 'react'
import Color from './Color'

class Colors extends React.Component {
  render(){
    return (
      <div className="pick colors">
        {this.props.colors.map(color => <Color selectAColor={this.props.selectAColor} key={color} color={color} />)}
      </div>
    )
  }
}

export default Colors