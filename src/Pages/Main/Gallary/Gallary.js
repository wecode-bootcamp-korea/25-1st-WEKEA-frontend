import React from 'react';
import Teaser from './Teaser';
import './Gallary.scss';

class Gallary extends React.Component {
  render() {
    const { className, title, items } = this.props;
    return (
      <div className={className}>
        <h2>{title}</h2>
        <div className="images">
          {items.map(item => (
            <Teaser items={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Gallary;
