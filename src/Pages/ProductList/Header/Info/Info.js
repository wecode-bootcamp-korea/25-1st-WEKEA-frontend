import React, { Component } from 'react';
import './Info.scss';

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <h1>침대</h1>
        <span>
          하루를 최상의 컨디션으로 시작하려면 숙면을 취해야 하죠. 다양한
          스타일의 튼튼한 IKEA 침대는 최고의 편안함과 품질을 약속해드려요.
          빌트인 수납처럼 스마트한 기능이 있거나 밑에 수납함을 밀어넣을 수 있는
          크기의 침대도 많답니다. IKEA의 침대로 오랫동안 달콤한 꿈을 꾸는 숙면을
          즐겨보세요.
        </span>
      </div>
    );
  }
}

export default Info;
