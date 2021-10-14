import React, { Component } from 'react';
import Header from './Header/Header';
import ItemList from './ItemList/ItemList';
import Slider from '../../Components/Slider/Slider';
import './ProductList.scss';

export default class ProductList extends Component {
  state = {
    itemList: [],
  };

  componentDidMount() {
    fetch('http://10.58.5.115:8000/products/subcategories?sub_category_id=1', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          itemList: data['products'],
        });
      });
  }
  render() {
    const { itemList } = this.state;
    console.log(itemList);
    return (
      <div className="ProductList">
        <Header itemList={itemList} />
        <ItemList itemList={itemList} />
        <Slider sliderList={itemList} />
      </div>
    );
  }
}
