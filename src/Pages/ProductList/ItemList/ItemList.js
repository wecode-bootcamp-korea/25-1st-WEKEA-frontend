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
    const { itemList } = this.state;
    console.log(itemList);
    return (
      <div className="ItemList">
        {itemList['products'] &&
          itemList['products'].map(el => (
            <div key={el.category_id} className="Item">
              <img
                src={el.images[0]?.['product_image']}
                alt={`${el.images[0]?.['product_image']}_img`}
              />
              <div>{`${el.foreign_name} ${el.korea_name}`}</div>
              <div>{el.information}</div>
              <div>{`₩ ${el.price}`}</div>
            </div>
          ))}
      </div>
    );
  }
}
