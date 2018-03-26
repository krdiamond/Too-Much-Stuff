import React from 'react';
import ItemList from './ItemList'

const MissionBox = (props) => {
  return(
    <div id="mission-box">
      <div>FIND THESE ITEMS!</div>
      <ItemList list={props.mission} className={'mission-item'}/>
    </div>
  )
}

export default MissionBox;
