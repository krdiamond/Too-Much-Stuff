import React from 'react';
import ItemList from './ItemList'

const MissionBox = (props) => {
  console.log("MissionBox Props:", props)
  return(
    <div className="status-box">
      {"YOUR MISSION"}
      <ItemList list={props.mission} />
    </div>
  )
}

export default MissionBox;
