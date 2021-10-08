import React, { Component } from 'react';
import SignupImage from './SignupImage';

class SignupAside extends Component {
  render() {
    return (
      <article className="SignupAside_article">
        <h1 className="signupTitle">
          <span>WEKEA Family</span> 회원 가입
        </h1>
        <p>이미 가입하셨나요? 로그인 하기</p>

        <SignupImage />
      </article>
    );
  }
}

export default SignupAside;
