import React from 'react';
import { Link } from 'react-router-dom';
import SpotContainer from './SpotContainer';

class Teaser extends React.Component {
  state = {
    currentSpot: 0,
  };

  spotOn = e => {
    this.setState({
      currentSpot: e.target.id,
    });
  };

  spotOff = () => {
    this.setState({
      currentSpot: -1,
    });
  };

  isLeave = () => {
    this.setState({
      currentSpot: 0,
    });
  };

  render() {
    const { currentSpot } = this.state;
    const { spotOn, spotOff, isLeave } = this;
    const { items } = this.props;
    const { img, spot } = items;
    return (
      <div className="Teaser" onMouseLeave={isLeave}>
        <Link to="">
          <img src={img} alt={`${img}_img`} />
        </Link>
        {spot.map((item, idx) => (
          <SpotContainer
            key={idx}
            id={idx}
            item={item}
            currentSpot={currentSpot}
            spotOn={spotOn}
            spotOff={spotOff}
          />
        ))}
      </div>
    );
  }
}

export default Teaser;
