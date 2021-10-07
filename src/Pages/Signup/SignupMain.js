import React, { Component } from 'react';
import SignUpInput from './SignUpInput';

class SignupMain extends Component {
  render() {
    return (
      <article className="SignupMain_article">
        <SignUpInput placeholder="성" className="signUpInput" />
        <SignUpInput placeholder="이름" className="signUpInput" />
        <SignUpInput placeholder="생일" className="signUpInput" />
        <SignUpInput placeholder="KR (+82)" className="signUpInput" />
        <SignUpInput placeholder="성별(선택사향)" className="signUpList" />
      </article>
    );
  }
}

export default SignupMain;
