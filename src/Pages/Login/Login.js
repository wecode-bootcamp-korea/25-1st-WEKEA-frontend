import React, { Component } from 'react';
import LoginBtn from './LoginBtn';
import LoginInput from './LoginInput';
import './Login.scss';
import LoginTextPage from './LoginTextPage';

export default class Login extends Component {
  state = {
    idValue: '',
    passwordValue: '',
  };
  handleIdChange = e => {
    this.setState({
      idValue: e.target.value,
    });
  };
  handlePasswordChange = e => {
    this.setState({
      passwordValue: e.target.value,
    });
  };

  render() {
    const { idValue, passwordValue } = this.state;
    return (
      <section className="loginMainSection">
        <LoginTextPage />
        <article className="loginMainArticle">
          <form className="loginForm">
            <LoginInput
              placeholder="이메일 또는 휴대폰 번호"
              idValue={idValue}
              handleChange={this.handleIdChange}
              subtext="다른 로그인 옵션 :"
              linkText="일회용 코드로 로그인"
              warnText="이메일 또는 휴대폰 번호를 입력해주세요"
            />
            <LoginInput
              placeholder="비밀번호"
              type="password"
              passwordValue={passwordValue}
              handleChanges={this.handlePasswordChange}
              linkText="비밀번호 찾기"
              warnText="비밀번호를 입력해주세요"
              eyeOn={<i className="far fa-eye"></i>}
              eyeOff={<i className="far fa-eye-slash"></i>}
            />
            <LoginBtn placeholder="로그인" className="loginBtn" />
          </form>
          <p className="loginComment">
            WEKEA 계정이 없으신가요? 지금 바로 만들어 보세요!
          </p>
          <LoginBtn placeholder="회원가입" className="loginBtnForSignup" />
        </article>
      </section>
    );
  }
}
