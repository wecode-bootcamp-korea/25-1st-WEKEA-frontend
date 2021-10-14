import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Footer.scss';

class Footer extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <>
        {pathname !== '/login' && (
          <div className="footer">
            <div className="upfooter">
              <div className="ikeaFamily">
                <h3>WEKEA Family</h3>
                <p>지금 WEKEA Family에 무료로 가입하고</p>
                <p>다양한 멤버 전용 혜택을 누리세요. 자세히 보기</p>
                <button>WEKEA Family 가입하기</button>
              </div>
              <div className="FooterMenu">
                <h4>고객문의</h4>
                <ul>
                  <li>
                    <Link>고객지원</Link>
                  </li>
                  <li>
                    <Link>자주 묻는 질문</Link>
                  </li>
                  <li>
                    <Link>문의하기</Link>
                  </li>
                  <li>
                    <Link>배송조회</Link>
                  </li>
                  <li>
                    <Link>교환환불</Link>
                  </li>
                  <li>
                    <Link>품질보증</Link>
                  </li>
                  <li>
                    <Link>제품리콜</Link>
                  </li>
                  <li>
                    <Link>제품 구매 가이드</Link>
                  </li>
                  <li>
                    <Link>브로슈어</Link>
                  </li>
                  <li>
                    <Link>피드백</Link>
                  </li>
                  <li>
                    <Link>부품신청</Link>
                  </li>
                </ul>
              </div>
              <div className="FooterMenu">
                <h4>쇼핑하기</h4>
                <ul>
                  <li>
                    <Link>쇼핑하기</Link>
                  </li>
                  <li>
                    <Link>전화주문</Link>
                  </li>
                  <li>
                    <Link>WEKEA for business</Link>
                  </li>
                  <li>
                    <Link>제품사용 팁</Link>
                  </li>
                  <li>
                    <Link>결제 옵션</Link>
                  </li>
                  <li>
                    <Link>기프트 카드</Link>
                  </li>
                </ul>
              </div>
              <div className="FooterMenu">
                <h4>서비스</h4>
                <ul>
                  <li>
                    <Link>WEKEA 서비스</Link>
                  </li>
                  <li>
                    <Link>배송 서비스</Link>
                  </li>
                  <li>
                    <Link>조립 서비스</Link>
                  </li>
                  <li>
                    <Link>설치 서비스</Link>
                  </li>
                  <li>
                    <Link>주방 서비스</Link>
                  </li>
                  <li>
                    <Link>홈퍼니싱 플래닝 서비스</Link>
                  </li>
                  <li>
                    <Link>인테리어 디자인 서비스</Link>
                  </li>
                  <li>
                    <Link>바이백 서비스</Link>
                  </li>
                </ul>
              </div>
              <div className="FooterMenu">
                <h4>IKEA 이야기</h4>
                <ul>
                  <li>
                    <Link>브랜드 소개</Link>
                  </li>
                  <li>
                    <Link>집에서의 삶</Link>
                  </li>
                  <li>
                    <Link>지속가능한 생활</Link>
                  </li>
                  <li>
                    <Link>내가 아끼는 집, 나를 아끼는 집</Link>
                  </li>
                  <li>
                    <Link>뉴스룸</Link>
                  </li>
                  <li>
                    <Link>채용 정보</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="underFooter">
              <p>© Inter WEKEA Systems B.V 1999-2021</p>
              <p>
                WEKEA 코리아 주소 : (우) 12345 경기도 광명시 XX로 17 WEKEA광명점
                <br />
                사업자 등록번호 : 1WX-XX-XXX71 사업자정보확인
                <br />
                대표자 : 프레드산성
                <br />
                통신판매업 신고 : 20XX-경기광명-0XX9
                <br />
                TEL : XXX0-XXX2
                <br />
              </p>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(Footer);
