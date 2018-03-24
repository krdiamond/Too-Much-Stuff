import React from 'react';

const Item = (props) => {
  const { className } = props
  return(
      <img  src={props.img.src}
            onClick={() => (props.handleClick ? props.handleClick(props.img) : null )}
            alt={props.img.name}
            className={className}/>
  )
}

export default Item;
