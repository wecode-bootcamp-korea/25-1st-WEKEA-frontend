import React, { Component } from 'react';
import './ItemList.scss';

export default class ItemList extends Component {
  state = {
    itemList: [],
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
  }

  render() {
    return (
      <div className="ItemList">
        {ITEM_EXAMPLE.map(el => (
          <div key={el.category_id} className="Item">
            <div>{`${el.foreign_name} ${el.korea_name}`}</div>
            <div>{el.information}</div>
            <div>{`₩ ${el.price}`}</div>
          </div>
        ))}
      </div>
    );
  }
}

const ITEM_EXAMPLE = [
  {
    category_id: 1,
    korea_name: '제품명',
    foreign_name: 'Product_Name',
    information: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    category_id: 2,
    korea_name: '제품명',
    foreign_name: 'Product_Name',
    information: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    category_id: 3,
    korea_name: '제품명',
    foreign_name: 'Product_Name',
    information: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    category_id: 4,
    korea_name: '제품명',
    foreign_name: 'Product_Name',
    information: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    category_id: 5,
    korea_name: '제품명',
    foreign_name: 'Product_Name',
    information: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    category_id: 6,
    korea_name: '제품명',
    foreign_name: 'Product_Name',
    information: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    category_id: 7,
    korea_name: '제품명',
    foreign_name: 'Product_Name',
    information: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    category_id: 8,
    korea_name: '제품명',
    foreign_name: 'Product_Name',
    information: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    category_id: 9,
    korea_name: '제품명',
    foreign_name: 'Product_Name',
    information: '이건 무슨 제품일까요우',
    price: 234234,
  },
];
