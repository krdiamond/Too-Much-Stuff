import React from 'react';
import ItemList from './ItemList'

class FoundBox extends React.Component {
  render() {
    return(
      <div id="found-box">
        <div id="inner-found-box">
          <ItemList list={this.props.found} className={'found-item'}/>
        </div>
      </div>
    )
  }
}

export default FoundBox;
