import React, { Component } from 'react';

export default class SubCategory extends Component {
  render() {
    const { sub } = this.props;
    return (
      <>
        {sub.map((el, index) => {
          return (
            <li key={index}>
              <button>{el.name}</button>
            </li>
          );
        })}
      </>
    );
  }
}
