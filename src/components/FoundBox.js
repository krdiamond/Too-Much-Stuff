import React from 'react';
import ItemList from './ItemList'

const FoundBox = (props) => {
  return(
    <div id="found-box">
      <div id="inner-box">
        <ItemList list={props.found} handleClick={props.handleClick} className={'game-status-item'}/>
      </div>
    </div>
  )
}

export default FoundBox;
