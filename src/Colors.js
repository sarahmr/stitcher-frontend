import React from 'react'
import Color from './Color'

function Colors(props) {
  return (
    <div className="pick colors">
      {props.colors.map(color => <Color selectAColor={props.selectAColor} key={color} color={color} />)}
    </div>
  )
}

export default Colors