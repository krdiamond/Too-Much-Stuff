import React, { Component } from 'react';
import ItemList from './ItemList'

const SolutionBox = (props) => {
  console.log("SolutionBox Props:", props)
  return(
    <div className="temp" style={{height: 400, border: '2px solid red'}}>
      <ItemList list={props.solution} handleClick={props.handleClick} />
    </div>
  )
}

export default SolutionBox;
