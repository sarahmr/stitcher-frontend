import React from 'react'

class DesignItem extends React.Component {
  render(){
    let { title, user_id } = this.props.design
    return (
      <div>
        <h2>{title}</h2>
        <div>

        </div>
        <p>Created by: {user_id}</p>
      </div>
    )
  }
}

export default DesignItem