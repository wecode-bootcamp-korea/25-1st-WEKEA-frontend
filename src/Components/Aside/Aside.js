import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubAside from './SubAside';
import './Aside.scss';

export default class Aside extends Component {
  state = {
    isExpand: false,
  };

  expandBar = () => {
    this.setState({
      isExpand: !this.state.isExpand,
    });
  };

  render() {
    const { isVisible } = this.props;
    return (
      <>
        <div className={`aside ${isVisible ? 'show' : 'hide'}`}>
          <div className="sideBar">
            <i className="fas fa-times" onClick={this.props.toggleSideBar}></i>
            <Link to="/">
              <img className="navLogo" alt="wekeaLogo" src="/image/logo.png" />
            </Link>

            <h1>모든 제품</h1>
            <ul>
              <li>
                <span className="sideProductList" onClick={this.expandBar}>
                  침대/매트리스
                </span>
              </li>
              <li>
                <span className="sideProductList" onClick={this.expandBar}>
                  아웃도어
                </span>
              </li>
              <li>
                <span className="sideProductList" onClick={this.expandBar}>
                  홈오피스
                </span>
              </li>
            </ul>
          </div>
          <SubAside isExpand={this.state.isExpand} />
        </div>
      </>
    );
  }
}
