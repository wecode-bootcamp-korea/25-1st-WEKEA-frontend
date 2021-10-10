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
        this.setState({ productList: data, product: data[0] });
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
              <div className="summary">
                직선형 솔기와 섬세한 스티지 디테일이 가미된 깔끔하고 현대적인
                디자인입니다. 부드러운 침대헤드는 늦은 밤 독서를 즐길 때 편안한
                등받이가 되어줍니다. 더 좋은 점은 모든 것이 단일 패키지로
                제공된다는 점입니다. 정말 간편하죠?
              </div>
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
                  <h1 className="name">VESTMARKA 베스트마르카</h1>
                  <div className="description">
                    스프링매트리스, 매우 단단함/라이트블루, 120x200 cm
                  </div>
                </div>
                <div className="price-wrapper">
                  <span className="won">￦</span>
                  <span className="price">149,000</span>
                </div>
              </div>
              <div className="rating"></div>
            </header>
            <section className="option-section">
              <button className="modal-button">
                <div>
                  <span className="type title">규격</span>
                  <span className="selected">120X200 cm</span>
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
