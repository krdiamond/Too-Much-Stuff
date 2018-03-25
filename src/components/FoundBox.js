import React from 'react';
import ItemList from './ItemList'

const FoundBox = (props) => {
  const { username } = props.user

  return(
    <div className="status-box">
      <div>FOUND ITEMS</div>
      {/* NOTE: this handleClick will need to get to the div holding the items some other way eventually */}
      <ItemList list={props.found} handleClick={props.handleClick} className={'game-status-item'}/>
      <div style={{color: 'blue', fontSize: '24px', fontWeight: 'bold', margin: '40px'}}>{(props.won) ? `YOU WON ${username.toUpperCase()}!!!!` : null}</div>
    </div>
  )
}

export default FoundBox;
