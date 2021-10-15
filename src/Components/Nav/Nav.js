import React, { Component } from 'react';
import './Nav.scss';
import { Link, withRouter } from 'react-router-dom';
import Aside from '../Aside/Aside';

class Nav extends Component {
  state = {
    iconList: [],
    isVisible: false,
    isExpand: false,
    selectedBtn: '',
    searchKeyword: '',
  };

  expandBar = e => {
    this.setState({
      isExpand: !this.state.isExpand,
      selectedBtn: e.target.innerText,
    });
  };

  toggleSideBar = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      isExpand: false,
    });
  };

  handleSearch = e => {
    this.setState({
      searchKeyword: e.target.value,
    });
  };

  pressEnter = e => {
    if (e.code === 'Enter') {
      fetch(
        `http://10.58.3.128:7777/products?products_list=3&search=${this.state.searchKeyword}`,
        {
          method: 'GET',
        }
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ itemList: data['results'], searchKeyword: '' });
        });
    }
  };

  componentDidMount() {
    fetch('/data/IconData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          iconList: data,
        });
      });
  }

  render() {
    const { pathname } = this.props.location;
    const { selectedBtn } = this.state;
    console.log(this.state.searchKeyword);

    return (
      <>
        {pathname !== '/login' && (
          <div className="nav">
            <div className="blackBar">
              <Link to="/">코로나 19 대응 공지</Link>
              <Link to="/">비대면 전화주문 서비스</Link>
              <Link to="/">IKEA 인기제품</Link>
            </div>

            <div className="navBottomBorder">
              <div className="navBar">
                <Link to="/">
                  <img
                    className="navLogo"
                    alt="wekeaLogo"
                    src="/image/logo.png"
                  />
                </Link>
                <div className="search">
                  <i className="fas fa-search"></i>
                  <input
                    value={this.state.searchKeyword}
                    type="text"
                    placeholder="검색어 입력"
                    onChange={this.handleSearch}
                    onKeyPress={this.pressEnter}
                  />
                </div>
                <div className="iconComponent">
                  <Link className="icon" to="/login">
                    <i className="far fa-user"></i>
                  </Link>
                  <Link className="icon" to="/cart">
                    <i className="fas fa-shopping-basket" to=""></i>
                  </Link>
                  <i onClick={this.toggleSideBar} className="fas fa-bars"></i>
                </div>
              </div>
            </div>
            <Aside
              isVisible={this.state.isVisible}
              isExpand={this.state.isExpand}
              toggleSideBar={this.toggleSideBar}
              expandBar={this.expandBar}
              selectedBtn={selectedBtn}
            />
          </div>
        )}
      </>
    );
  }
}

export default withRouter(Nav);
