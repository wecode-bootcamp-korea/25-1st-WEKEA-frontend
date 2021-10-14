import React from 'react';
import Description from '../../../Pages/ProductDetail/Description/Description';
import Size from '../../../Pages/ProductDetail/Size/Size';
import Review from '../../../Pages/ProductDetail/Review/Review';
import Option from '../../../Pages/ProductDetail/Option/Option';
import './AsideModal.scss';

class AsideModal extends React.Component {
  changeComponent = selectedBtn => {
    const { product, selectedOption, changeOption } = this.props;

    switch (selectedBtn) {
      case 1:
        return <Description description={product.description} />;
      case 2:
        return <Size size={product.sizes[0]} />;
      case 3:
        return <Review reviewList={product.reviews} />;
      case 4:
        return (
          <Option
            option={product.sizes[0]}
            selectedOption={selectedOption}
            changeOption={option => changeOption(option)}
          />
        );
      default:
        break;
    }
  };

  render() {
    const { selectedBtn, closeModal } = this.props;

    return (
      <div className="AsideModal modal">
        <div className="container">
          <button className="close-button round-button" onClick={closeModal}>
            <i className="fas fa-times" />
          </button>
          {this.changeComponent(selectedBtn)}
        </div>
      </div>
    );
  }
}

export default AsideModal;
