import React from 'react';

const Item = (props) => {
  const { className } = props
  return(
    <span className={className}>
      <img  src={props.img.src}
            onClick={() => props.handleClick(props.img)}
            style={{height: '30px', width: '30px'}}
            alt={props.img.name}/>
    </span>
  )
}

export default Item;
