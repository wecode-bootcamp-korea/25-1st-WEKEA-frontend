import React, { Component } from 'react';
import './ItemList.scss';

export default class ItemList extends Component {
  render() {
    return (
      <div className="ItemList">
        {ITEM_EXAMPLE.map(el => (
          <div className="Item">
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
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
  {
    name: '제품명',
    explain: '이건 무슨 제품일까요우',
    price: 234234,
  },
];
