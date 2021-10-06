import React from 'react';
import { Link } from 'react-router-dom';
import Spot from './Spot';

class Teaser extends React.Component {
  render() {
    const { img, spot } = this.props.items;
    return (
      <div className="teaser">
        <Link to="">
          <img src={img} alt={`${img}_img`} />
          {spot && spot.map(item => <Spot item={item} />)}
        </Link>
      </div>
    );
  }
}

export default Teaser;
