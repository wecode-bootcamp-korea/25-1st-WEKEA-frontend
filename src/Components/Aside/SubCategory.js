import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SubCategory.scss';

export default class SubCategory extends Component {
  render() {
    const { subCategories } = this.props;
    return (
      <>
        {subCategories.map((el, index) => {
          return (
            <Link to={`/product-list/${el.id}`} key={index}>
              {el.name}
            </Link>
          );
        })}
      </>
    );
  }
}
