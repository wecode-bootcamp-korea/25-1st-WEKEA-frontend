import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignupCheckBox extends Component {
  render() {
    const { placeholder, type, checkboxLink } = this.props;
    return (
      <div className="signupCheckBoxContainer">
        <input
          className="signupCheckBox"
          placeholder={placeholder}
          type={type}
        />
        <label className="signupCheckBox">
          {placeholder}
          <Link to="/">{checkboxLink}</Link>
        </label>
      </div>
    );
  }
}

export default SignupCheckBox;
