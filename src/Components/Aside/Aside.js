import React, { Component } from 'react';
import './Aside.scss';
import { Link } from 'react-router-dom';

export default class Aside extends Component {
  render() {
    return (
      <aside>
        <div className="sideBar">
          <ul>
            <li>
              <Link to="/">
                <img
                  className="navLogo"
                  alt="wekeaLogo"
                  src="/image/logo.png"
                />
              </Link>
            </li>
            <li>
              <Link className="allProduct" to="/">
                <span>모든 제품</span>
              </Link>
            </li>
            <li>
              <Link className="sideProductList" to="/">
                <span>아웃도어</span>
              </Link>
            </li>
            <li>
              <Link className="sideProductList" to="/">
                <span>홈오피스</span>
              </Link>
            </li>
            <li>
              <Link className="sideProductList" to="/">
                <span>침대/매트리스</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}
