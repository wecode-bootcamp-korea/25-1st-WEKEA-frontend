import React, { Component } from 'react';

class SignupButton extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <button className="signupButton">{text}</button>
      </div>
    );
  }
}

export default SignupButton;
