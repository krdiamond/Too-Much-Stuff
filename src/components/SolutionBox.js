import React from 'react';
import ItemList from './ItemList'

const SolutionBox = (props) => {
  console.log("SolutionBox Props:", props)
  return(
    <div className="temp" style={{height: 100,
                                  width: 200,
                                  border: '2px solid red',
                                  display: 'inline-block',
                                  "text-align": 'center'}}>
      <ItemList list={props.solution} handleClick={props.handleClick} />
      {(props.won) ? "YOU WON!!!" : null}
    </div>
  )
}

export default SolutionBox;
