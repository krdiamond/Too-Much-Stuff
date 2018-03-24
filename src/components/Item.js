import React from 'react';

const Item = (props) => {
  const { className } = props
  return(
      <img  height="30"
            width="30"
            src={props.img.src}
            onClick={() => props.handleClick(props.img)}
            alt={props.img.name}/>
  )
}

export default Item;
