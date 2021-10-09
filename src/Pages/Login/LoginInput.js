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
    } = this.props;
    return (
      <div>
        <input
          name={name}
          className="loginInput"
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={e => handleChange(e)}
        />

        <div className="loginWarnText">{warnText}</div>

        <span className="passwordEye" onClick={this.handleSecret}>
          {isPasswordSectetOnOff ? (
            <i className="far fa-eye-slash"></i>
          ) : (
            <i className="far fa-eye"></i>
          )}
        </span>
        <LoginLinkBox linkText={linkText} subtext={subtext} />
      </div>
    );
  }
}
