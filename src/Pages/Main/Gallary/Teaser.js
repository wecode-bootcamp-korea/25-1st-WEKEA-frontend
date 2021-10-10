import React from 'react';
import { Link } from 'react-router-dom';
import Spot from './Spot';

class Teaser extends React.Component {
  render() {
    const { items } = this.props;
    const { img, spot } = items;
    return (
      <div className="Teaser">
        <Link to="">
          <img src={img} alt={`${img}_img`} />
        </Link>
        {spot.map((item, idx) => (
          <Spot key={idx} item={item} />
        ))}
      </div>
    );
  }
}

export default Teaser;
