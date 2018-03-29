import React from 'react';
import Item from './Item'


class ItemList extends React.Component {

  buildImgComponents = () => {
    if (this.props.list.length > 0) {
      const newArray = this.props.list.map((img) => {
        console.log("IMG:", img)
        return (
          <Item className={this.props.className}
            key={img.id}
            id={img.id}
            x={img.x}
            y={img.y}
            findTheMovingItem={null}
          />
        )
      })
      return newArray
    }
  }

  render () {
    console.log("ItemList imgs:", typeof this.buildImgComponents())
    return (
      <div></div>
    )
  }
}

export default ItemList;
