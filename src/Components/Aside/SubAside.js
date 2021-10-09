import React, { Component } from 'react';
import './SubAside.scss';

export default class SubAside extends Component {
  render() {
    const { isExpand } = this.props;
    console.log('expand' + this.props.isExpand);
    return (
      <article className={`${isExpand ? 'expandShow' : null}`}>
        <div className="sideBar">
          <h1>모든 제품</h1>
          <ul>
            <li>
              <span className="sideProductList">침대/매트리스</span>
            </li>
            <li>
              <span className="sideProductList">아웃도어</span>
            </li>
            <li>
              <span className="sideProductList">홈오피스</span>
            </li>
          </ul>
        </div>
      </article>
    );
  }
}
