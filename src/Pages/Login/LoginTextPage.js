import React, { Component } from 'react';

export default class LoginTextPage extends Component {
  render() {
    return (
      <article className="loginArticle">
        <div className="leftArrow">
          <i className="fas fa-arrow-left"></i>
        </div>
        <div>
          <img className="logo" src="Image/loginLogo.png" alt="logo" />
        </div>
        <div>
          <h1 className="LoginTextPage_title">로그인</h1>
          <p className="LoginTextPage_text">
            외워야 할 비밀번호가 많아 불편하셨죠?
            <br />
            <p className="LoginTextPage_text_subText">
              이제 일회용 코드를 이용하여 간편하게 로그인
              <br />
              하세요
            </p>
            <br />
            * 이메일 또는 휴대폰 번호 최초 인증 후 사용
            <br />
            가능
          </p>
        </div>

        <footer className="LoginTextPage_footer">
          <p className="LoginTextPage_footer_mainText">
            WEKEA.kr - <a>개인정보처리방침</a>
          </p>
          <p className="LoginTextPage_footer_subText">
            © Inter WEKEA Systems B.V. 1999-2021
          </p>
        </footer>
      </article>
    );
  }
}
