import React, { Component } from 'react';
import Header from './Header/Header';
import ItemList from './ItemList/ItemList';
import './ProductList.scss';

export default class ProductList extends Component {
  state = {
    subcategoryInfo: {},
    itemList: [],
    productList: [],
  };

  componentDidMount() {
    fetch('http://10.58.5.115:8000/products/subcategories?sub_category_id=7', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          subcategoryInfo: data['results']['subcategory'],
          itemList: data['results']['products'],
        });
      });
  }

  render() {
    const { itemList, subcategoryInfo } = this.state;
    return (
      <div className="ProductList">
        <Header subcategoryInfo={subcategoryInfo} />
        <ItemList itemList={itemList} />
      </div>
    );
  }
}
