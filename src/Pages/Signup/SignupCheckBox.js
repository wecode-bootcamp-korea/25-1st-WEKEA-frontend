import React, { Component } from 'react';

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
          <a href="/">{checkboxLink}</a>
        </label>
      </div>
    );
  }
}

export default SignupCheckBox;
