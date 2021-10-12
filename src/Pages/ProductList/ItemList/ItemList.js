import React, { Component } from 'react';
import './ItemList.scss';

export default class ItemList extends Component {
  render() {
    return (
      <div className="ItemList">
        {ITEM_EXAMPLE.map(el => (
          <div key={el.id} className="Item">
            <div>{el.name}</div>
            <div>{el.explain}</div>
            <div>{el.price}</div>
          </div>
        ))}
      </div>
    );
  }
}

const ITEM_EXAMPLE = [
  {
    id: 1,
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    id: 2,
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    id: 3,
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    id: 4,
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    id: 5,
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    id: 6,
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    id: 7,
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    id: 8,
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    id: 9,
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
];
