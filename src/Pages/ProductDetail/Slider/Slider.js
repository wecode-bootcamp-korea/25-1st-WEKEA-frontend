import React from 'react';
import './Slider.scss';

class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      sliderWidth: 0,
      scrollWidth: 0,
      currentPosition: 0,
      itemWidth: window.innerWidth / 5,
    };
    this.slider = React.createRef();
  }

  componentDidMount() {
    this.setState({
      sliderWidth: this.slider.current.offsetWidth,
      scrollWidth: this.slider.current.scrollWidth,
    });
  }

  clickArrowBtn = arrow => {
    const newPosition = this.calcNewPosition(
      arrow,
      this.state.currentPosition,
      this.calcMovingWidth()
    );
    this.setState({ currentPosition: newPosition });
    this.slider.current.scrollTo(newPosition, 0);
  };

  calcMovingWidth = () => {
    const { sliderWidth, itemWidth } = this.state;
    const itemNums = Math.floor(sliderWidth / itemWidth);
    return itemWidth * itemNums;
  };

  calcNewPosition = (arrow, currentPosition, movingWidth) => {
    return currentPosition + (arrow === 'left' ? -movingWidth : movingWidth);
  };

  isBtnShow = arrow => {
    const { scrollWidth, currentPosition, itemWidth } = this.state;
    return (
      (arrow === 'left' && currentPosition > 0) ||
      (arrow === 'right' && currentPosition < scrollWidth - itemWidth * 3)
    );
  };

  render() {
    return (
      <div className="slider-wrapper">
        <div className="slider" ref={this.slider}>
          <div className="item">
            <img src="/image/example.jpg" alt="" />
            <div className="title">VALEVÅG 발레보그</div>
            <div>포켓스프링매트리스, 150x200 cm</div>
            <div className="price-wrapper">
              <span className="won">￦</span>
              <span className="price">149,000</span>
            </div>
          </div>
          <div className="item">
            <img src="/image/example.jpg" alt="" />
            <div className="title">VALEVÅG 발레보그</div>
            <div>포켓스프링매트리스, 150x200 cm</div>
            <div className="price-wrapper">
              <span className="won">￦</span>
              <span className="price">149,000</span>
            </div>
          </div>
          <div className="item">
            <img src="/image/example.jpg" alt="" />
            <div className="title">VALEVÅG 발레보그</div>
            <div>포켓스프링매트리스, 150x200 cm</div>
            <div className="price-wrapper">
              <span className="won">￦</span>
              <span className="price">149,000</span>
            </div>
          </div>
          <div className="item">
            <img src="/image/example.jpg" alt="" />
            <div className="title">VALEVÅG 발레보그</div>
            <div>포켓스프링매트리스, 150x200 cm</div>
            <div className="price-wrapper">
              <span className="won">￦</span>
              <span className="price">149,000</span>
            </div>
          </div>
          <div className="item">
            <img src="/image/example.jpg" alt="" />
            <div className="title">VALEVÅG 발레보그</div>
            <div>포켓스프링매트리스, 150x200 cm</div>
            <div className="price-wrapper">
              <span className="won">￦</span>
              <span className="price">149,000</span>
            </div>
          </div>
          <div className="item">
            <img src="/image/example.jpg" alt="" />
            <div className="title">VALEVÅG 발레보그</div>
            <div>포켓스프링매트리스, 150x200 cm</div>
            <div className="price-wrapper">
              <span className="won">￦</span>
              <span className="price">149,000</span>
            </div>
          </div>
        </div>
        <div className="arrow">
          <button
            className={`left-button ${this.isBtnShow('left') ? '' : 'hide'}`}
            onClick={() => this.clickArrowBtn('left')}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className={`right-button ${this.isBtnShow('right') ? '' : 'hide'}`}
            onClick={() => this.clickArrowBtn('right')}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
