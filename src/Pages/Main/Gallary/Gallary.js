import React from 'react';
// import { Link } from 'react-router-dom';
import Teaser from './Teaser';

class Gallary extends React.Component {
  render() {
    const { title, items } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <div>
          {items.map(item => (
            <Teaser items={item} />
          ))}
        </div>
      </>
    );
  }
}

export default Gallary;
