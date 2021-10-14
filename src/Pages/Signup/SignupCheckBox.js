import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignupCheckBox extends Component {
  render() {
    const { placeholder, type, checkboxLink, name, handleCheck } = this.props;
    return (
      <div className="signupCheckBoxContainer">
        <input
          name={name}
          className="signupCheckBox"
          placeholder={placeholder}
          type={type}
          onClick={handleCheck}
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
