import React from 'react';
import { Link } from 'react-router-dom';

class Spot extends React.Component {
  render() {
    const { x, y, en, kr, explain, price } = this.props.item;
    return (
      <Link to="">
        <div className="note">
          <span style={{ color: 'orange' }}>New</span>
          <span className="name">{en + kr}</span>
          <span className="explain">{explain}</span>
          <span classNam="price">{price}</span>
        </div>
        <button className="spotBotton"></button>
      </Link>
    );
  }
}

export default Spot;
