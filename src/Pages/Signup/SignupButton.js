import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class SignupButton extends Component {
  render() {
    const { text, handleClick } = this.props;
    return (
      <div>
        <button onClick={handleClick} className="signupButton">
          {text}
        </button>
      </div>
    );
  }
}

export default withRouter(SignupButton);
