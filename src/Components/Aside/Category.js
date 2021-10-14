import React, { Component } from 'react';
import './Category.scss';

export default class Category extends Component {
  render() {
    const { id, expandBar, name } = this.props;
    return (
      <>
        <li>
          <button id={id} className="sideProductList" onClick={expandBar}>
            {name}
          </button>
        </li>
      </>
    );
  }
}
