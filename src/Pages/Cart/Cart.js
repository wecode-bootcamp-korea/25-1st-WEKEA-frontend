import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../Components/Slider/Slider';
import Loading from '../../Components/Loading/Loading';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = { productList: [], quantity: '1' };
  }

  componentDidMount() {
    fetch('/data/productDetailData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data,
        });
      });

    // fetch('http://10.58.5.115:8000/user/cart', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     token: '',
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(res => this.setState({ productList: [] }));
  }

  handleSelect = e => {
    this.setState({ quantity: e.target.value });
    // fetch('/', {
    //   method: 'POST',
    //   body: JSON.stringify({ quantity: '1' }),
    // })
    //   .then(res => res.json())
    //   .then(res => console.log('성공', res));
  };

  render() {
    const { productList, quantity } = this.state;

    if (!Object.keys(productList).length) return <Loading />;
    return (
      <div className="Cart">
        <div className="cart-main">
          <div className="cart-left">
            <h1 className="cart-title">장바구니</h1>
            <div className="cart-list">
              <div className="product">
                <div className="image-wrapper">
                  <img src="/image/detail1.jpg" alt="" />
                </div>
                <div className="content-wrapper">
                  <div className="information">
                    <div>
                      <Link to="/" className="name">
                        NIKKEBY 니케뷔
                      </Link>
                      <div className="description">
                        4칸서랍장, 그레이그린
                        <br />
                        84x70 cm
                        <br />₩ 89,900개
                      </div>
                    </div>
                    <div className="price">₩ 269,700</div>
                  </div>
                  <div className="buttons">
                    <select
                      className="quantity-selection"
                      value={quantity}
                      onChange={this.handleSelect}
                    >
                      {[...Array(20)].map((i, idx) => (
                        <option value={idx + 1}>{idx + 1}</option>
                      ))}
                    </select>
                    <button className="delete-button">삭제</button>
                  </div>
                </div>
              </div>
              <div className="product">
                <div className="image-wrapper">
                  <img src="/image/detail1.jpg" alt="" />
                </div>
                <div className="content-wrapper">
                  <div className="information">
                    <div>
                      <Link to="/" className="name">
                        NIKKEBY 니케뷔
                      </Link>
                      <div className="description">
                        4칸서랍장, 그레이그린
                        <br />
                        84x70 cm
                        <br />₩ 89,900개
                      </div>
                    </div>
                    <div className="price">₩ 269,700</div>
                  </div>
                  <div className="buttons">
                    <select
                      className="quantity-selection"
                      value={quantity}
                      onChange={this.handleSelect}
                    >
                      {[...Array(20)].map((i, idx) => (
                        <option value={idx + 1}>{idx + 1}</option>
                      ))}
                    </select>
                    <button className="delete-button">삭제</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-right">
            <div className="summary">
              <div className="summary-orderer">
                <div className="label">주문 내역</div>
                <div>주문자: 홍길동</div>
                <div>연락처: 010-0000-0000</div>
                <div>
                  배송지: 서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉
                  2호점)
                </div>
                <div className="label">
                  ※ 이 금액에는 배송비가 포함되어 있지 않으며, 배송지에 따라
                  구매가 불가할 수 있습니다.
                </div>
              </div>
              <hr className="summary-hr" />
              <div className="summary-price">
                <div className="label">총 주문금액</div>
                <div className="price">₩ 449,500</div>
              </div>
            </div>
            <button className="payment-button">
              <span className="button-text">결제하기</span>
              <span className="button-arrow round-button">
                <i className="fas fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="cart-plus">
          <h2 className="title">추천 제품</h2>
          <Slider
            productList={productList}
            itemWidth={window.innerWidth / 5}
            itemNums={productList.length}
          />
        </div>
      </div>
    );
  }
}

export default Cart;
