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
          category: data.categories,
        });
      });
  }

  render() {
    const { isVisible, isExpand, toggleSideBar, expandBar, whatIPush } =
      this.props;
    const { category } = this.state;
    return (
      <>
        <div className={`aside ${isVisible ? 'show' : 'hide'}`}>
          <i className="fas fa-times" onClick={toggleSideBar}></i>
          <Link to="/">
            <img className="navLogo" alt="wekeaLogo" src="/image/logo.png" />
          </Link>

          <h1>모든 제품</h1>
          <ul>
            {category.map((el, index) => {
              return (
                <Category key={index} name={el.name} expandBar={expandBar} />
              );
            })}
          </ul>
        </div>
        {whatIPush === '침대/매트리스' && (
          <SubAside
            isExpand={isExpand}
            whatIPush={whatIPush}
            category={category}
          />
        )}
        {whatIPush === '아웃도어' && (
          <SubAside
            isExpand={isExpand}
            whatIPush={whatIPush}
            category={category}
          />
        )}
        {whatIPush === '홈오피스' && (
          <SubAside
            isExpand={isExpand}
            whatIPush={whatIPush}
            category={category}
          />
        )}
      </>
    );
  }
}
