import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubAside from './SubAside';
import './Aside.scss';
import Category from './Category';

export default class Aside extends Component {
  state = {
    category: [],
  };

  componentDidMount() {
    fetch('/data/category.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          category: data.main_categories,
        });
      });
  }

  render() {
    const { isVisible, toggleSideBar, expandBar, isExpand } = this.props;
    const { category } = this.state;
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
              {category.map(el => {
                return (
                  <Category key={el.id} name={el.name} expandBar={expandBar} />
                );
              })}
            </ul>
          </div>
          {category.map(el => {
            return (
              <SubAside
                isExpand={isExpand}
                isVisible={isVisible}
                catName={category.name}
              />
            );
          })}
        </div>
      </>
    );
  }
}
