import React, { Component } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <>
        <div className="blackBar">
          <div>
            <Link to="/">코로나 19 대응 공지</Link>
            <Link to="/">비대면 전화주문 서비스</Link>
            <Link to="/">IKEA 인기제품</Link>
          </div>
        </div>
        <div className="navBar"></div>

        <nav>
          <img alt="wekeaLogo" src="/image/logo.png" />
          <input type="text" placeholder="검색어 입력" />
          <navIcon />
        </nav>
      </>
    );
  }
}
