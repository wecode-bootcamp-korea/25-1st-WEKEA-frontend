import React, { Component } from 'react';
import './Info.scss';

class Info extends Component {
  render() {
    const { subcategoryInfo } = this.props;
    const { name, description } = subcategoryInfo;
    return (
      <div className="Info">
        <h1>{name}</h1>
        <span>{description}</span>
      </div>
    );
  }
}

export default Info;
