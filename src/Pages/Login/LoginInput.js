import React, { Component } from 'react';
import LoginLinkBox from './LoginLinkBox';

export default class LoginInput extends Component {
  state = {
    passwordSectetOnOff: false,
  };

  handleSecret = e => {
    const { passwordSectetOnOff } = this.state;
    this.setState({
      passwordSectetOnOff: !passwordSectetOnOff,
    });
  };
  render() {
    const { passwordSectetOnOff: toggleSecret } = this.state;
    const {
      eyeOn,
      eyeOff,
      warnText,
      placeholder,
      type,
      handleChanges,
      linkText,
      subtext,
      value,
    } = this.props;
    return (
      <div>
        <input
          className="loginInput"
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={handleChanges}
        />

        <div className="loginWarnText">{warnText}</div>

        <span className="passwordEye" onClick={this.handleSecret}>
          {toggleSecret ? eyeOff : eyeOn}
        </span>
        <LoginLinkBox linkText={linkText} subtext={subtext} />
      </div>
    );
  }
}
