import React from 'react';
import { Link } from 'react-router-dom';

class Spot extends React.Component {
  render() {
    const { id, item } = this.props;
    const { x, y, en, kr, explain, price } = item;

    return (
      <Link
        key={id}
        className="Spot"
        style={{ bottom: `${x}%`, left: `${y}%` }}
        to=""
      >
        <button></button>
        <div className="box">
          <div className="text">
            <span className="isNew">New</span>
            <span className="name">{`${en} ${kr}`}</span>
            <span className="explain">{explain}</span>
            <span className="price">{`₩ ${price}`}</span>
          </div>
          <i className="fas fa-chevron-right"></i>
        </div>
      </Link>
    );
  }
}

export default Spot;
