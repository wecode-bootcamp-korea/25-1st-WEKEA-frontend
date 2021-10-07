import React, { Component } from 'react';

export default class LoginBtn extends Component {
  render() {
    const { placeholder, className } = this.props;
    return (
      <div>
        <button className={className}>{placeholder}</button>
      </div>
    );
  }
}
