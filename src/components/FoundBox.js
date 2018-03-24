import React from 'react';
import ItemList from './ItemList'

const FoundBox = (props) => {
  console.log("FoundBox Props:", props)
  return(
    <div className="temp" style={{height: 200,
                                  width: 200,
                                  border: '2px solid red',
                                  display: 'inline-block',
                                  "text-align": 'center'}}>
      {"FOUND ITEMS"}
      <ItemList list={props.found} handleClick={props.handleClick} />
      {(props.won) ? "YOU WON!!!" : null}
    </div>
  )
}

export default FoundBox;
