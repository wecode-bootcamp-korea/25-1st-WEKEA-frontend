import React from 'react';

class Spot extends React.Component {
  render() {
    return <button id={this.props.id} className="Spot"></button>;
  }
}

export default Spot;
