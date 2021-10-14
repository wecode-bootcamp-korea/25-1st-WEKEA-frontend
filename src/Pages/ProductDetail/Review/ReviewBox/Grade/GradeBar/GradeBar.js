import React from 'react';
import './GradeBar.scss';

class GradeBar extends React.Component {
  render() {
    const { grade } = this.props;
    const indicatorWidth = { width: `${grade * 20}%` };

    return (
      <div className="GradeBar">
        <div className="dot-wrapper">
          <div className="dot" />
        </div>
        <div className="dot-wrapper">
          <div className="dot" />
        </div>
        <div className="dot-wrapper">
          <div className="dot" />
        </div>
        <div className="dot-wrapper">
          <div className="dot" />
        </div>
        <div className="indicator" style={indicatorWidth} />
      </div>
    );
  }
}

export default GradeBar;
