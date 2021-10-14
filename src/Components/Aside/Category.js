import React, { Component } from 'react';

export default class Category extends Component {
  state = {
    subCategory: [],
  };

  render() {
    const { expandBar, id, name } = this.props;
    return (
      <>
        <li key={id}>
          <span className="sideProductList" onClick={expandBar}>
            {name}
          </span>
        </li>
      </>
    );
  }
}
