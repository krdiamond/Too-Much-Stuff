import React from 'react';
import ItemList from './ItemList'

const FoundBox = (props) => {
  const { username } = props.user

  return(
    <div id="found-box">
      <ItemList list={props.found} handleClick={props.handleClick} className={'game-status-item'}/>
      <div style={{color: 'blue', fontSize: '24px', fontWeight: 'bold', margin: '40px'}}>{(props.won) ? `YOU WON ${username.toUpperCase()}!!!!` : null}</div>
    </div>
  )
}

export default FoundBox;
