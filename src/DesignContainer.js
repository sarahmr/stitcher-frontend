import React from 'react'
import DesignItem from './DesignItem'

function DesignContainer(props) {

  let renderDesignItem = () => {
    return props.designs.map(design =>
      <DesignItem key={design.id} design={design} user={props.user} />
    )
  }

  return (
    <div className="design-container">
      {renderDesignItem()}
    </div>
  )
}

export default DesignContainer