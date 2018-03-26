import React from 'react'

 const DummyTimer = (props) => {
  const time = ((props.won) ? props.time : 0 )
  return (
    <div className={"timer"} >
      <strong>{time}</strong>
    </div>
  )
};

export default DummyTimer;
