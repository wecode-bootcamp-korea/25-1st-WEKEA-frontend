import React, { Component } from 'react';
import Header from './Header/Header';
import ItemList from './ItemList/ItemList';
import './ProductList.scss';

export default class ProductList extends Component {
  state = {
    subcategoryInfo: {},
    itemList: [],
    productList: [],
    filterName: '',
    example: [],
  };

  componentDidMount() {
    fetch(
      `http://10.58.5.115:8000/products/subcategories?sub_category_id=${this.props.match.params.id}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          subcategoryInfo: data['results']['subcategory'],
          itemList: data['results']['products'],
        });
      });
  }

  handleFilter = e => {
    this.setState(
      {
        filterName: e.target.id,
      },
      () => {
        fetch(
          `http://10.58.0.30:3200/products?products_list=2&sort=${this.state.filterName}`,
          {
            method: 'GET',
          }
        )
          .then(res => res.json())
          .then(data => {
            this.setState({ itemList: data['results'] });
          });
      }
    );
  };

  render() {
    const { itemList, subcategoryInfo } = this.state;
    return (
      <div className="ProductList">
        <Header
          handleFilter={this.handleFilter}
          subcategoryInfo={subcategoryInfo}
        />
        <ItemList itemList={itemList} />
      </div>
    );
  }
}
