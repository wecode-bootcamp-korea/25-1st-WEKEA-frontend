import React, { Component } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import Aside from '../Aside/Aside';
import PageTest from './PageTest';

export default class Nav extends Component {
  state = {
    iconList: [],
    isVisible: false,
  };

  toggleSideBar = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/IconData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          iconList: data,
        });
      });
  }

  render() {
    return (
      <nav>
        <div className="blackBar">
          <Link to="/">코로나 19 대응 공지</Link>
          <Link to="/">비대면 전화주문 서비스</Link>
          <Link to="/">IKEA 인기제품</Link>
        </div>

        <div className="navBottomBorder">
          <div className="navBar">
            <Link to="nav">
              <img className="navLogo" alt="wekeaLogo" src="/image/logo.png" />
            </Link>
            <div className="search">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="검색어 입력" />
            </div>
            <div className="IconComponent">
              {this.state.iconList.map(el => {
                return <Icon url={el.url} id={el.id} />;
              })}
              <i onClick={this.toggleSideBar} className="fas fa-bars"></i>
            </div>
          </div>
          <Aside
            isVisible={this.state.isVisible}
            toggleSideBar={this.toggleSideBar}
          />
        </div>
        <PageTest />
      </nav>
    );
  }
}
