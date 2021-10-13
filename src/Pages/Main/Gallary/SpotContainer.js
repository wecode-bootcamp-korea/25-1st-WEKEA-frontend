import React from 'react';
import Spot from './Spot';
import ToolTip from './ToolTip';

class SpotContainer extends React.Component {
  render() {
    const { id, item, spotOff, spotOn, currentSpot } = this.props;
    const { x, y } = item;
    return (
      <div
        id={id}
        className="SpotContainer"
        style={{ bottom: `${x}%`, left: `${y}%` }}
        onMouseLeave={spotOff}
        onMouseEnter={spotOn}
      >
        {Number(currentSpot) === id && <ToolTip item={item} />}
        <Spot id={id} to="" />
      </div>
    );
  }
}

export default SpotContainer;
