import React from 'react';
import { withRouter } from 'react-router';
import './Slider.scss';

class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      itemWidth: 0,
      position: 0,
      viewNums: 0,
      viewWidth: 0,
      isLeftBtnShow: false,
      isRightBtnShow: true,
      hasTransition: false,
      thumbPosition: 0,
    };
    this.slider = React.createRef();
  }

  componentDidMount() {
    const { showItem, itemWidth, itemNums, selectedImg } = this.props;
    const viewWidth = this.slider.current.offsetWidth;
    const selectedImgPosition = -viewWidth * (selectedImg - 1);

    this.setState({
      itemWidth: showItem ? viewWidth : itemWidth,
      position: selectedImg ? selectedImgPosition : 0,
      viewNums: showItem ? 1 : Math.floor(viewWidth / itemWidth),
      viewWidth: viewWidth,
      isLeftBtnShow: selectedImg === 1 || !selectedImg ? false : true,
      isRightBtnShow: !(selectedImg === itemNums),
      thumbPosition: selectedImg ? -selectedImgPosition / itemNums : 0,
    });
  }

  clickArrowBtn = arrow => {
    const { itemWidth, position, viewNums } = this.state;
    const newPosition =
      position + viewNums * itemWidth * (arrow === 'left' ? 1 : -1);

    this.handleSlider(newPosition);
  };

  handleSlider = newPo => {
    const maxPo = this.calcMaxPosition();

    if (newPo >= 0) {
      this.setState({
        position: 0,
        isLeftBtnShow: false,
        isRightBtnShow: true,
        hasTransition: true,
        thumbPosition: 0,
      });
    } else if (newPo <= maxPo) {
      this.setState({
        position: maxPo,
        isLeftBtnShow: true,
        isRightBtnShow: false,
        hasTransition: true,
        thumbPosition: Math.abs(maxPo) * this.calcSliderRatio(),
      });
    } else {
      this.setState({
        position: newPo,
        isLeftBtnShow: true,
        isRightBtnShow: true,
        hasTransition: true,
        thumbPosition: Math.abs(newPo) * this.calcSliderRatio(),
      });
    }
  };

  calcMaxPosition = () => {
    const { itemNums } = this.props;
    const { itemWidth, viewNums, viewWidth } = this.state;
    return viewNums === 1
      ? -itemWidth * (itemNums - 1)
      : viewWidth - itemWidth * itemNums;
  };

  calcSliderRatio = () => {
    const { viewWidth, itemWidth } = this.state;
    const { itemNums } = this.props;
    return viewWidth / (itemNums * itemWidth);
  };

  calcThumbWidth = () => {
    const { viewWidth, itemWidth } = this.state;
    const { itemNums } = this.props;
    return (
      (viewWidth * viewWidth) /
      (itemWidth * itemNums === 0 ? 1 : itemNums * itemWidth)
    );
  };

  clickScrollbar = e => {
    const { itemWidth } = this.state;
    const newPosition =
      -Math.floor(e.nativeEvent.offsetX / this.calcSliderRatio() / itemWidth) *
      itemWidth;
    this.handleSlider(newPosition);
  };

  clickItem = () => {
    this.props.history.push('/');
  };

  render() {
    const {
      itemWidth,
      position,
      isLeftBtnShow,
      isRightBtnShow,
      hasTransition,
      thumbPosition,
    } = this.state;
    const { productList, selectedImg } = this.props;

    const sliderListStyle = {
      marginLeft: position,
      transition: hasTransition ? '0.3s' : '0',
    };
    const itemStyle = { flexBasis: itemWidth };
    const thumbStyle = {
      width: this.calcThumbWidth(),
      left: thumbPosition,
      transition: hasTransition ? '0.3s' : '0',
    };

    return (
      <div className="Slider">
        <div className="list-wrapper">
          <ul className="slider-list" ref={this.slider} style={sliderListStyle}>
            {productList.map(product => {
              return (
                <li
                  className="item"
                  key={product.id}
                  style={itemStyle}
                  onClick={selectedImg ? null : this.clickItem}
                >
                  <img
                    src={`/image/${
                      selectedImg ? product.url : product.img[0].url
                    }`}
                    alt="상품 이미지"
                  />
                  <div className="title">{product.name}</div>
                  <div>{product.description}</div>
                  <div className="price-wrapper">
                    <span className="won">￦</span>
                    <span className="price">
                      {product.price && product.price.toLocaleString()}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="button-wrapper">
          <button
            className={`left-button round-button ${
              isLeftBtnShow ? '' : 'hide'
            }`}
            onClick={() => this.clickArrowBtn('left')}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            className={`right-button round-button ${
              isRightBtnShow ? '' : 'hide'
            }`}
            onClick={() => this.clickArrowBtn('right')}
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>
        <div className="scrollbar-wrapper" onClick={this.clickScrollbar}>
          <div className="scrollbar">
            <div
              className="thumb"
              style={thumbStyle}
              onClick={e => e.stopPropagation()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Slider);
