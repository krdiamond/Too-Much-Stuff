import React from 'react';
import ItemList from './ItemList'

const FoundBox = (props) => {
  return(
    <div id="found-box">
      {/* NOTE: this handleClick will need to get to the div holding the items some other way eventually */}
      <div id="inner-box">
        <ItemList list={props.found} handleClick={props.handleClick} className={'game-status-item'}/>
      </div>

      {(props.won) ? "SOMETHING WILL HAPPEN NOT SURE WHAT YET" : null}
    </div>
  )
}

export default FoundBox;
