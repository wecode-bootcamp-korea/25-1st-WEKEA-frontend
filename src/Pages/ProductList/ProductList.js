import React, { Component } from 'react';
import Header from './Header/Header';
import ItemList from './ItemList/ItemList';
import './ProductList.scss';

export default class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        <Header />
        <ItemList />
      </div>
    );
  }
}
