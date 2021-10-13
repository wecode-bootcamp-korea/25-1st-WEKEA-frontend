import React, { Component } from 'react';
import Header from './Header/Header';
import ItemList from './ItemList/ItemList';
import Slider from '../../Components/Slider/Slider';
import './ProductList.scss';

export default class ProductList extends Component {
  state = {
    itemList: [],
    sliderList: [],
  };

  componentDidMount() {
    fetch('', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          itemList: data,
        });
      });
    fetch('', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          sliderList: data,
        });
      });
  }
  render() {
    const { itemList, sliderList } = this.state;
    return (
      <div className="ProductList">
        <Header />
        <ItemList itemList={itemList} />
        <Slider sliderList={sliderList} />
      </div>
    );
  }
}
