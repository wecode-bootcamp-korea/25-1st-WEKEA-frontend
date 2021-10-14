import React from 'react';
import './Loading.scss';

class Loading extends React.Component {
  render() {
    return (
      <div className="Loading">
        <div className="ground">
          <div className="ball"></div>
        </div>
      </div>
    );
  }
}

export default Loading;
