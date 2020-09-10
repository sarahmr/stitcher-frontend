import React from 'react'
import DesignItem from './DesignItem'

class DesignContainer extends React.Component {

  renderDesignItem = () => {
    return this.props.designs.map(design =>
      <DesignItem key={design.id} design={design} user={this.props.user} />
    )
  }

  render(){
    return (
      <div className="design-container">
        {this.renderDesignItem()}
      </div>
    )
  }
}

export default DesignContainer