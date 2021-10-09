import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubAside from './SubAside';
import './Aside.scss';

export default class Aside extends Component {
  render() {
    const { isVisible, toggleSideBar, expandBar, isExpand } = this.props;
    console.log(isVisible);
    return (
      <>
        <div>
          <div className={`aside ${isVisible ? 'show' : 'hide'}`}>
            <i className="fas fa-times" onClick={toggleSideBar}></i>
            <Link to="/">
              <img className="navLogo" alt="wekeaLogo" src="/image/logo.png" />
            </Link>

            <h1>모든 제품</h1>
            <ul>
              <li>
                <span className="sideProductList" onClick={expandBar}>
                  침대/매트리스
                </span>
              </li>
              <li>
                <span className="sideProductList" onClick={expandBar}>
                  아웃도어
                </span>
              </li>
              <li>
                <span className="sideProductList" onClick={expandBar}>
                  홈오피스
                </span>
              </li>
            </ul>
          </div>
          <SubAside isExpand={isExpand} isVisible={isVisible} />
        </div>
      </>
    );
  }
}
