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
    // fetch('http://10.58.5.115:8000/products/subcategories?subcategory_id=1', {
    //   method: 'GET',
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       itemList: data,
    //     });
    //   });
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
    console.log(this.props);
    return (
      <div className="ProductList">
        <Header />
        <ItemList itemList={itemList} />
        <Slider sliderList={sliderList} />
      </div>
    );
  }
}
