import React from 'react';
import ItemList from './ItemList'

const FoundBox = (props) => {
  console.log("FoundBox Props:", props)
  return(
    <div className="status-box">
      <div>FOUND ITEMS</div>
      {/* NOTE: this handleClick will need to get to the div holding the items some other way eventually */}
      <ItemList list={props.found} handleClick={props.handleClick} />
      {(props.won) ? "YOU WON!!!" : null}
    </div>
  )
}

export default FoundBox;
