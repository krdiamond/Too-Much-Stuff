import React from 'react';
import ItemList from './ItemList'

const MissionBox = (props) => {
  return(
    <div className="status-box">
      <div>YOUR MISSION</div>
      <ItemList list={props.mission} className={'mission'}/>
    </div>
  )
}

export default MissionBox;
