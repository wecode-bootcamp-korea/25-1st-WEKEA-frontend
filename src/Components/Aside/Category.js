import React, { Component } from 'react';
import './Category.scss';

export default class Category extends Component {
  render() {
    const { expandBar, name } = this.props;
    return (
      <>
        <li>
          <button className="sideProductList" onClick={expandBar}>
            {name}
          </button>
        </li>
      </>
    );
  }
}
