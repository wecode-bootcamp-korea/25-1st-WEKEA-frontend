import React from 'react';
import ImageModal from './ImageModal/ImageModal';
import AsideModal from './AsideModal/AsideModal';
import Slider from './Slider/Slider';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      product: {},
      isImageModalShow: false,
      isAsideModalShow: false,
      selected: 0,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/productDetailData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ productList: data, product: data[1] });
      });
  }

  showImageModal = id => {
    this.setState({ isImageModalShow: true, selected: id });
  };

  closeImageModal = () => {
    this.setState({ isImageModalShow: false });
  };

  showAsideModal = id => {
    this.setState({ isAsideModalShow: true });
  };

  closeAsideModal = () => {
    this.setState({ isAsideModalShow: false });
  };

  render() {
    const {
      productList,
      product,
      isImageModalShow,
      isAsideModalShow,
      selected,
    } = this.state;

    //scss파일에서 src 경로 에러 뜨는거 임시방편
    const imgCursorStyle = {
      cursor: "URL('/image/zoomCursor.png') 20 20, zoom-in",
    };

    return (
      <div className="ProductDetail">
        <div className="detail-main">
          <div className="detail-left">
            <div className="left-top">
              {product.img &&
                product.img.map(el => {
                  return (
                    <div
                      className="image-wrapper"
                      key={el.id}
                      onClick={() => this.showImageModal(el.id)}
                      style={imgCursorStyle}
                    >
                      <img src={`/image/${el.url}`} alt="" />
                    </div>
                  );
                })}
              {isImageModalShow && (
                <ImageModal
                  imageList={product.img}
                  selected={selected}
                  closeImageModal={this.closeImageModal}
                />
              )}
            </div>
            <div className="left-middle">
              <div className="summary">{product.summary}</div>
              <section className="information-section">
                <button className="modal-button" onClick={this.showAsideModal}>
                  <span className="title">제품 설명</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
                <button className="modal-button">
                  <span className="title">제품 크기</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
                <button className="modal-button">
                  <span className="title">상품평</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </section>
              {isAsideModalShow && (
                <AsideModal closeAsideModal={this.closeAsideModal} />
              )}
            </div>
            <div className="left-bottom">
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
                  <h1 className="name">{product.name}</h1>
                  <div className="description">{product.description}</div>
                </div>
                <div className="price-wrapper">
                  <span className="won">￦</span>
                  <span className="price">
                    {product.price && product.price.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="rating"></div>
            </header>
            <section className="option-section">
              <button className="modal-button">
                <div>
                  <span className="type title">규격</span>
                  <span className="selected">
                    {product.option && product.option[0].tag}
                  </span>
                </div>
                <i className="fas fa-angle-right"></i>
              </button>
            </section>
            <section className="button-section">
              <button className="buynow-button">
                <span>구매하기</span>
              </button>
              <button className="heart-button">
                <i className="far fa-heart"></i>
              </button>
            </section>
            <section className="available-section">
              <div className="delivery">
                <i className="fas fa-truck"></i>
                <span>배송 옵션은 결제 단계에서 확인 가능합니다.</span>
              </div>
              <button className="stock modal-button">
                <i className="fas fa-store"></i>
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
