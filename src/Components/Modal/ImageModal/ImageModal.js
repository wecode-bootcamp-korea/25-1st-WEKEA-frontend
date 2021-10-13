import React from 'react';
import Slider from '../../Slider/Slider';
import './ImageModal.scss';

class ImageModal extends React.Component {
  render() {
    const { imageList, selectedImg, closeModal } = this.props;

    return (
      <div className="ImageModal modal">
        <div className="container">
          <button className="close-button round-button" onClick={closeModal}>
            <i className="fas fa-times" />
          </button>
          <Slider
            productList={imageList}
            showItem="1"
            itemNums={imageList.length}
            selectedImg={selectedImg}
          />
        </div>
      </div>
    );
  }
}

export default ImageModal;
