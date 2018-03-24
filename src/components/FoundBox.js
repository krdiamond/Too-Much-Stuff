import React from 'react';
import ItemList from './ItemList'

const FoundBox = (props) => {
  return(
    <div className="status-box">
      <div>FOUND ITEMS</div>
      {/* NOTE: this handleClick will need to get to the div holding the items some other way eventually */}
      <ItemList list={props.found} handleClick={props.handleClick} />
      <div>{(props.won) ? "YOU WON!!!" : null}</div>
    </div>
  )
}

export default FoundBox;
