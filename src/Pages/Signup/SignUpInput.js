import React, { Component } from 'react';

class SignupInput extends Component {
  render() {
    const { placeholder, className, type, text } = this.props;
    return (
      <div>
        <input placeholder={placeholder} className={className} type={type} />
        <p className="warnText">{text}</p>
      </div>
    );
  }
}

export default SignupInput;
