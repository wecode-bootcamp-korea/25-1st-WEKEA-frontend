import React, { Component } from 'react';

class SignupInput extends Component {
  render() {
    const { placeholder, type, text, handleChange, name } = this.props;
    return (
      <div>
        <input
          name={name}
          placeholder={placeholder}
          className="signupInput"
          type={type}
          onChange={e => handleChange(e)}
        />
        <p className="warnText">{text}</p>
      </div>
    );
  }
}

export default SignupInput;
