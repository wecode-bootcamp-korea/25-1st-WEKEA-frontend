import React, { Component } from 'react';

export default class LoginLinkBox extends Component {
  render() {
    const { linkText, subtext } = this.props;
    return (
      <div className="loginLinkTextBox">
        <p className="loginLinkSubtext">{subtext}</p>
        <a href="/" className="loginLink">
          {linkText}
        </a>
      </div>
    );
  }
}
