import React, { Component } from 'react';
import LoginLinkBox from './LoginLinkBox';

export default class LoginInput extends Component {
  state = {
    isPasswordSectetOnOff: false,
  };

  handleSecret = e => {
    const { isPasswordSectetOnOff } = this.state;
    this.setState({
      isPasswordSectetOnOff: !isPasswordSectetOnOff,
    });
  };

  handleBlur = e => {};

  render() {
    const { isPasswordSectetOnOff } = this.state;

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
          className="loginInput"
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={e => handleChange(e)}
        />

        {inputValue.length === 0 ? (
          <div className="loginWarnTextTrue">{warnText}</div>
        ) : (
          <div className="loginWarnText">{warnText}</div>
        )}

        <span
          className={inputValue.length > 0 ? 'passwordEyeFalse' : 'passwordEye'}
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
