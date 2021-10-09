import React, { Component } from 'react';

export default class LoginBtn extends Component {
  render() {
    const { placeholder, className, goToSignup } = this.props;
    return (
      <div>
        <button className={className} onClick={goToSignup}>
          {placeholder}
        </button>
      </div>
    );
  }
}
