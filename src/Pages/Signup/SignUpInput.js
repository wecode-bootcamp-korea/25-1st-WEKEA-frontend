import React, { Component } from 'react';

class SignUpInput extends Component {
  render() {
    const { placeholder, className } = this.props;
    return (
      <div>
        <input placeholder={placeholder} className={className} />
      </div>
    );
  }
}

export default SignUpInput;
