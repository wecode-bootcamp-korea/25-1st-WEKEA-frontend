import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {
  render() {
    return (
      <header>
        <img src="#" alt="banner_img" />
        <h1>가을 신제품을 만나보세요</h1>
        <span class="explain">
          선선해진 공간에 어울리는 이번 시즌 신제품을 만나보세요. 가을 분위기가
          물씬 나는 제품들로 더 포근하고 따뜻하게 생활해보세요.
        </span>
        <Link to="">지금 보러가기</Link>
      </header>
    );
  }
}

export default Banner;
