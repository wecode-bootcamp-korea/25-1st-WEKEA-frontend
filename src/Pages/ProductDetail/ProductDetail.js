import React from 'react';
import ImageModal from '../../Components/Modal/ImageModal/ImageModal';
import AsideModal from '../../Components/Modal/AsideModal/AsideModal';
import Slider from '../../Components/Slider/Slider';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      product: {},
      isImageModalShow: false,
      isAsideModalShow: false,
      selectedImg: 0,
      selectedOption: 1,
    };
  }

  componentDidMount() {
    fetch('/data/productDetailData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ productList: data, product: data[0] });
      });
  }

  showModal = (isNameShow, id) => {
    this.setState({
      [isNameShow]: true,
      selectedImg: id,
    });
  };

  closeModal = isNameShow => {
    this.setState({ [isNameShow]: false });
  };

  render() {
    const {
      productList,
      product,
      isImageModalShow,
      isAsideModalShow,
      selectedImg,
    } = this.state;

    //scss파일에서 src 경로 에러 뜨는거 임시방편
    const imgCursorStyle = {
      cursor: "URL('/image/zoomCursor.png') 20 20, zoom-in",
    };

    return (
      <div className="ProductDetail">
        <div className="detail-main">
          <div className="detail-left">
            <div className="detail-image">
              {product.img &&
                product.img.map(el => {
                  return (
                    <div
                      className="image-wrapper"
                      key={el.id}
                      onClick={() => this.showModal('isImageModalShow', el.id)}
                      style={imgCursorStyle}
                    >
                      <img src={`/image/${el.url}`} alt="상품 이미지" />
                    </div>
                  );
                })}
              {isImageModalShow && (
                <ImageModal
                  imageList={product.img}
                  selectedImg={selectedImg}
                  closeModal={() => this.closeModal('isImageModalShow')}
                />
              )}
            </div>
            <div className="detail-information">
              <div className="summary">{product.summary}</div>
              <section className="information-section">
                <button
                  className="modal-button"
                  onClick={() => this.showModal('isAsideModalShow', 0)}
                >
                  <span className="title">제품 설명</span>
                  <i className="fas fa-arrow-right" />
                </button>
                <button className="modal-button">
                  <span className="title">제품 크기</span>
                  <i className="fas fa-arrow-right" />
                </button>
                <button className="modal-button">
                  <span className="title">상품평</span>
                  <i className="fas fa-arrow-right" />
                </button>
              </section>
              {isAsideModalShow && (
                <AsideModal
                  isNameShow="isAsideModalShow"
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
                <i className="fas fa-angle-right" />
              </button>
            </section>
            <section className="button-section">
              <button className="buynow-button">
                <span>구매하기</span>
              </button>
              <button className="heart-button">
                <i className="far fa-heart" />
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
