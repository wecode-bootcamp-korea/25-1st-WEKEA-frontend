import React, { Component } from 'react';
import './SubAside.scss';

export default class SubAside extends Component {
  render() {
    const { isExpand, catName } = this.props;
    return (
      <div className={`article ${isExpand ? 'expandShow' : ''}`}>
        <div className="sideBar">
          <h1>{catName}</h1>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}
