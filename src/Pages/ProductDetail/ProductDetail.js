import React from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../../Components/Modal/ImageModal/ImageModal';
import AsideModal from '../../Components/Modal/AsideModal/AsideModal';
import Slider from '../../Components/Slider/Slider';
import './ProductDetail.scss';

const INFORMATION_BTN_LIST = [
  { id: 1, name: '제품 설명' },
  { id: 2, name: '제품 크기' },
  { id: 3, name: '상품평' },
];

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      product: {},
      isImageModalShow: false,
      isAsideModalShow: false,
      selectedImg: -1,
      selectedBtn: 0,
      selectedOption: 1,
      isInWishList: false,
    };
  }

  componentDidMount() {
    fetch(`http://10.58.5.115:8000/product/${this.props.match.params.id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data.product,
        });
      });
  }

  showImageModal = id => {
    this.setState({
      isImageModalShow: true,
      selectedImg: id,
    });
  };

  showAsideModal = id => {
    this.setState({
      isAsideModalShow: true,
      selectedBtn: id,
    });
  };

  closeModal = isNameShow => {
    this.setState({ [isNameShow]: false });
  };

  makeSummary = description => {
    return description.split('.')[0] + '.';
  };

  changeOption = option => {
    this.setState({ selectedOption: option, isAsideModalShow: false });
  };

  addToCart = () => {
    this.props.history.push('/cart');
  };

  toggleIsInWishList = () => {
    this.setState({ isInWishList: !this.state.isInWishList });
  };

  render() {
    const {
      productList,
      product,
      isImageModalShow,
      isAsideModalShow,
      selectedImg,
      selectedBtn,
      selectedOption,
      isInWishList,
    } = this.state;

    console.log(product);

    if (!Object.keys(product).length) return <div>Loading...</div>;
    return (
      <div className="ProductDetail">
        <div className="navigation">
          <span>{product.main_category.name}</span>{' '}
          <i className="fas fa-angle-right" />{' '}
          <Link to="/">{product.sub_category.name}</Link>
        </div>
        <div className="detail-main">
          <div className="detail-left">
            <div className="detail-image">
              {product.images.map((el, idx) => {
                return (
                  <div
                    className="image-wrapper"
                    key={el.id}
                    onClick={() => this.showImageModal(idx)}
                  >
                    <img src={el['product_image']} alt="상품 이미지" />
                  </div>
                );
              })}
              {isImageModalShow && (
                <ImageModal
                  imageList={product.images}
                  selectedImg={selectedImg}
                  closeModal={() => this.closeModal('isImageModalShow')}
                />
              )}
            </div>
            <div className="detail-information">
              <div className="summary">
                {this.makeSummary(product.description)}
              </div>
              <section className="information-section">
                {INFORMATION_BTN_LIST.map(el => (
                  <button
                    key={el.id}
                    className="modal-button"
                    onClick={() => this.showAsideModal(el.id)}
                  >
                    <span className="title">{el.name}</span>
                    <i className="fas fa-arrow-right" />
                  </button>
                ))}
              </section>
              {isAsideModalShow && (
                <AsideModal
                  product={product}
                  isNameShow="isAsideModalShow"
                  selectedBtn={selectedBtn}
                  selectedOption={selectedOption}
                  changeOption={option => this.changeOption(option)}
                  closeModal={() => this.closeModal('isAsideModalShow')}
                />
              )}
            </div>
            <div className="detail-similar-products">
              <h2 className="title">유사한 제품</h2>
              <Slider
                productList={productList}
                itemWidth={window.innerWidth / 5}
                itemNums={productList.length}
              />
            </div>
          </div>
          <aside className="detail-right">
            <header className="short-package">
              <div className="package-main">
                <div className="name-wrapper">
                  <h1 className="name">
                    {product.foreign_name} {product.korea_name}
                  </h1>
                  <div className="description">{product.information}</div>
                </div>
                <div className="price-wrapper">
                  <span className="won">￦</span>
                  <span className="price">
                    {(
                      Number(product.price) + (selectedOption === 2 ? 20000 : 0)
                    ).toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="rating"></div>
            </header>
            <section className="option-section">
              <button
                className="modal-button"
                onClick={() => this.showAsideModal(4)}
              >
                <div>
                  <span className="type title">규격</span>
                  <span className="selected">
                    {Math.round(+product.size.width / 10) * 10}x
                    {Math.round(+product.size.length / 10) * 10} cm
                  </span>
                </div>
                <i className="fas fa-angle-right" />
              </button>
            </section>
            <section className="button-section">
              <button className="buynow-button" onClick={this.addToCart}>
                <span>구매하기</span>
              </button>
              <button
                className="heart-button"
                onClick={this.toggleIsInWishList}
              >
                <i className={`${isInWishList ? 'fas' : 'far'} fa-heart`} />
              </button>
            </section>
            <section className="available-section">
              <div className="delivery">
                <i className="fas fa-truck" />
                <span>배송 옵션은 결제 단계에서 확인 가능합니다.</span>
              </div>
              <button className="stock modal-button">
                <i className="fas fa-store" />
                <span>매장 재고 및 재입고 날짜 확인</span>
              </button>
            </section>
          </aside>
        </div>
        <div className="detail-plus">
          <h2 className="title">최근 본 제품</h2>
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

export default ProductDetail;
