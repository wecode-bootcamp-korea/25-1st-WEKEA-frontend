import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      sliderWidth: 0,
      scrollWidth: 0,
      currentPosition: 0,
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
      this.state.sliderWidth
    );
    this.setState({ currentPosition: newPosition });
    this.slider.current.scrollTo(newPosition, 0);
  };

  calcNewPosition = (arrow, currentPosition, sliderWidth) => {
    return currentPosition + (arrow === 'left' ? -sliderWidth : sliderWidth);
  };

  isBtnShow = arrow => {
    const { sliderWidth, scrollWidth, currentPosition } = this.state;
    return (
      (arrow === 'left' && currentPosition > 0) ||
      (arrow === 'right' && currentPosition < scrollWidth - sliderWidth)
    );
  };

  render() {
    return (
      <div className="Modal">
        <div className="container">
          <div className="slider-wrapper">
            <div className="slider" ref={this.slider}>
              <div className="item">
                <img src="/image/example.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/image/example.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/image/example.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/image/example.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/image/example.jpg" alt="" />
              </div>
              <div className="item">
                <img src="/image/example.jpg" alt="" />
              </div>
            </div>
            <div className="arrow">
              <button
                className={`left-button ${
                  this.isBtnShow('left') ? '' : 'hide'
                }`}
                onClick={() => this.clickArrowBtn('left')}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className={`right-button ${
                  this.isBtnShow('right') ? '' : 'hide'
                }`}
                onClick={() => this.clickArrowBtn('right')}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
