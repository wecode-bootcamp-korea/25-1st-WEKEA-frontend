import React, { Component } from 'react';
import './Aside.scss';
import { Link } from 'react-router-dom';

export default class Aside extends Component {
  render() {
    return (
      <aside>
        <div className="sideBar">
          <img className="navLogo" alt="wekeaLogo" src="/image/logo.png" />
          <Link className="allProduct" to="/">
            모든 제품
          </Link>
        </div>
      </aside>
    );
  }
}
