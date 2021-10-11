import React, { Component } from 'react';
import LoginLinkBox from './LoginLinkBox';

export default class LoginInput extends Component {
  state = {
    isPasswordSectetOnOff: false,
    handleOnBlur: false,
    handleOnFocus: false,
  };

  handleSecret = e => {
    const { isPasswordSectetOnOff } = this.state;
    this.setState({
      isPasswordSectetOnOff: !isPasswordSectetOnOff,
    });
  };

  handleBlur = e => {
    this.setState({
      handleOnBlur: true,
    });
  };
  handleFocus = e => {
    this.setState({
      handleOnFocus: true,
    });
  };
  render() {
    const { isPasswordSectetOnOff, handleOnBlur, handleOnFocus } = this.state;

    const {
      name,
      handleChange,
      warnText,
      placeholder,
      type,
      linkText,
      subtext,
      value,
      inputValue,
    } = this.props;
    return (
      <div>
        <input
          inputValue={inputValue}
          name={name}
          className={
            handleOnFocus && inputValue.length > 0
              ? 'loginInputTrue'
              : 'loginInput'
          }
          placeholder={placeholder}
          type={isPasswordSectetOnOff ? null : type}
          value={value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={e => handleChange(e)}
        />

        {inputValue.length === 0 && handleOnBlur ? (
          <div className="loginWarnTextTrue">{warnText}</div>
        ) : (
          <div className="loginWarnText">{warnText}</div>
        )}

        <span
          className={
            inputValue.length > 0 && handleOnFocus && handleOnBlur
              ? 'passwordEye'
              : 'passwordEyeFalse'
          }
          onClick={this.handleSecret}
        >
          {isPasswordSectetOnOff ? (
            <i class="far fa-eye-slash"></i>
          ) : (
            <i class="far fa-eye"></i>
          )}
        </span>
        <LoginLinkBox linkText={linkText} subtext={subtext} />
      </div>
    );
  }
}
