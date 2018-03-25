import React from 'react';
import ItemList from './ItemList'

const MissionBox = (props) => {
  return(
    <div id="mission-box">
      <div>YOUR MISSION</div>
      <ItemList list={props.mission} className={'game-status-item'}/>
    </div>
  )
}

export default MissionBox;
