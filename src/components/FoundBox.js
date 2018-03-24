import React from 'react';
import ItemList from './ItemList'

const FoundBox = (props) => {
  return(
    <div className="temp" style={{height: 200,
                                  width: 200,
                                  border: '2px solid red',
                                  display: 'inline-block',
                                  textAlign: 'center'}}>
      {"FOUND ITEMS"}
      {/* NOTE: this handleClick will need to get to the div holding the items some other way eventually */}
      <ItemList list={props.found} handleClick={props.handleClick} />
      {(props.won) ? "YOU WON!!!" : null}
    </div>
  )
}

export default FoundBox;
