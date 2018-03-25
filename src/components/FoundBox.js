import React from 'react';
import ItemList from './ItemList'

const FoundBox = (props) => {
  const { username } = props.user

  return(
    <div id="found-box">
      <ItemList list={props.found} handleClick={props.handleClick} className={'game-status-item'}/>
    </div>
  )
}

export default FoundBox;
