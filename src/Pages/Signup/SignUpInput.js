import React, { Component } from 'react';

class SignupInput extends Component {
  render() {
    const { inputValue, placeholder, type, text, handleChange, name } =
      this.props;
    return (
      <React.Fragment>
        <input
          inputValue={inputValue}
          name={name}
          placeholder={placeholder}
          className="signupInput"
          type={type}
          onChange={handleChange}
        />

        <p className={inputValue > 0 ? 'warnTextFalse' : 'warnText'}>{text}</p>
      </React.Fragment>
    );
  }
}

export default SignupInput;
