import React from 'react';
import ItemList from './ItemList'

const MissionBox = (props) => {
  console.log("MissionBox Props:", props)
  return(
    <div className="temp" style={{height: 200,
                                  width: 200,
                                  position: 'relative',
                                  border: '2px solid red',
                                  display: 'inline-block',
                                  "text-align": 'center'}}>
      {"YOUR MISSION"}
      <ItemList list={props.mission} />
    </div>
  )
}

export default MissionBox;
