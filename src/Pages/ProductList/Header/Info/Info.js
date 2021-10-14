import React, { Component } from 'react';
import './Info.scss';

class Info extends Component {
  render() {
    const { itemList } = this.props;
    const len = itemList.length;
    const categoryInfo = itemList[len - 1]
      ? itemList[len - 1]['subcategory']
      : [];
    console.log(categoryInfo);
    const { name, description } = categoryInfo;
    return (
      <div className="Info">
        <h1>{name}</h1>
        <span>{description}</span>
      </div>
    );
  }
}

export default Info;
