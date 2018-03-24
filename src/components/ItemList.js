import React, { Component } from 'react';
import Item from './Item'

const ItemList = (props) => {
  let imgs;
  (props.list) ?
    imgs = props.list.map((img) => {
      return (
        <Item img={img} key={img.id} handleClick={props.handleClick}/>
      )
    })
  : null

  return (
    imgs
  )
}

export default ItemList;
