import React, { Component } from 'react';

class SignupInput extends Component {
  render() {
    const { placeholder, type, text, handleChange, name } = this.props;
    return (
      <React.Fragment>
        <input
          name={name}
          placeholder={placeholder}
          className="signupInput"
          type={type}
          onChange={handleChange}
        />

        <p className={'warnTextFalse'}>{text}</p>
      </React.Fragment>
    );
  }
}

export default SignupInput;
