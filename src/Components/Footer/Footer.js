import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="ikeaFamily">
          <h3>Ikea Family</h3>
          <p>
            지금 IKEA Family에 무료로 가입하고 <br /> 다양한 멤버 전용 혜택을
            누리세요. 자세히 보기
          </p>
          <button>Ikea Family 가입하기</button>
        </div>
        <div className="FooterMenu">
          <h4>고객문의</h4>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}
