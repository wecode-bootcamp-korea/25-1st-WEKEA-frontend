import React, { Component } from 'react';
import SubCategory from './SubCategory';
import './SubAside.scss';

export default class SubAside extends Component {
  render() {
    const { isExpand, selectedBtn, category, toggleSideBar } = this.props;
    return (
      <div className={`article ${isExpand ? 'expandShow' : ''}`}>
        <div className="SubCat">
          <h3>{selectedBtn}</h3>
          {category.map((el, index) => {
            return el.name === selectedBtn ? (
              <SubCategory
                key={index}
                subCategories={el.sub_categories}
                toggleSideBar={toggleSideBar}
              />
            ) : null;
          })}
        </div>
      </div>
    );
  }
}
