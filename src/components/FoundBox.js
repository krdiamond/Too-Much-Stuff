import React from 'react';
import ItemList from './ItemList'

const FoundBox = (props) => {
  const { username } = props.user

  return(
    <div id="found-box">
      <div id="inner-box">
        <ItemList list={props.found} handleClick={props.handleClick} className={'found-item'}/>
      </div>
    </div>
  )
}

export default FoundBox;
