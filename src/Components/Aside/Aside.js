import React, { Component } from 'react';
import './Aside.scss';
import { Link } from 'react-router-dom';

export default class Aside extends Component {
  state = {
    isActive: false,
  };

  render() {
    const { isVisible } = this.props;
    return (
      <aside className={isVisible ? 'show' : 'hide'}>
        <div className="sideBar">
          <i class="fas fa-times" onClick={this.props.toggleSideBar}></i>
          <Link to="/">
            <img className="navLogo" alt="wekeaLogo" src="/image/logo.png" />
          </Link>

          <h1>모든 제품</h1>
          <ul>
            <li>
              <Link className="sideProductList" to="/">
                <span>침대/매트리스</span>
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
          </ul>
        </div>
      </aside>
    );
  }
}
