import React, { Component } from 'react';

class SignupInput extends Component {
  state = {
    forFocus: false,
    forBlur: false,
  };

  handleBlur = e => {
    this.setState({
      forBlur: true,
    });
  };

  handleFocus = e => {
    this.setState({
      forFocus: true,
    });
  };

  render() {
    const { forBlur, forFocus } = this.state;
    const {
      toggleSecret,
      inputValue,
      placeholder,
      type,
      text,
      handleChange,
      name,
    } = this.props;
    return (
      <React.Fragment>
        <input
          inputValue={inputValue}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          name={name}
          placeholder={placeholder}
          className={
            forFocus && inputValue.length > 0
              ? 'signupInputNull'
              : 'signupInput'
          }
          type={toggleSecret ? null : type}
          onChange={handleChange}
        />

        <div
          className={
            forBlur && inputValue.length === 0 ? 'warnText' : 'warnTextFalse'
          }
        >
          {text}
        </div>
      </React.Fragment>
    );
  }
}

export default SignupInput;
