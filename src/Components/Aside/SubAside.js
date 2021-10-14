import React, { Component } from 'react';
import SubCategory from './SubCategory';
import './SubAside.scss';

export default class SubAside extends Component {
  render() {
    const { isExpand, whatIPush, category } = this.props;
    return (
      <div className={`article ${isExpand ? 'expandShow' : ''}`}>
        <div className="SubCat">
          <h3>{whatIPush}</h3>
          {category.map((el, index) => {
            return el.name === whatIPush ? (
              <SubCategory key={index} subCategories={el.sub_categories} />
            ) : null;
          })}
        </div>
      </div>
    );
  }
}
