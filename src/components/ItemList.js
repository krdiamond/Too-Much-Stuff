import React, { Component } from 'react';
import Item from './Item'

const ItemList = (props) => {
  let imgs;
  (props.list) ?
    imgs = props.list.map((img) => {
      return (
        <Item img={img} handleClick={props.handleClick}/>
      )
    })
  : null

  return (
    <div className="item-list">
      {imgs}
    </div>
  )
}

export default ItemList;
