import React from 'react'
import DesignItem from './DesignItem'

class DesignContainer extends React.Component {

  renderDesignItem = () => {
    return this.props.designs.map(design => <DesignItem key={design.id} design={design} />)
  }

  render(){
    return (
      <div>
        {this.renderDesignItem()}
      </div>
    )
  }
}

export default DesignContainer