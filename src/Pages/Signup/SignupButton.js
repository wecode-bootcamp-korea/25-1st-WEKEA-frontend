import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class SignupButton extends Component {
  render() {
    const { text, handleClick } = this.props;
    return (
      <button onClick={handleClick} className="signupButton">
        {text}
      </button>
    );
  }
}

export default withRouter(SignupButton);
