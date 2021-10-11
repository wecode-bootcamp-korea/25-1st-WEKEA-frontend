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
        {parseInt(currentSpot) === id && <ToolTip item={item}></ToolTip>}
        <Spot id={id} to=""></Spot>
      </div>
    );
  }
}

export default SpotContainer;
