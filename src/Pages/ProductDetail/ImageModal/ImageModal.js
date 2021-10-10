import React from 'react';
import Slider from '../Slider/Slider';
import './ImageModal.scss';

class ImageModal extends React.Component {
  render() {
    const { imageList, selected, closeImageModal } = this.props;

    return (
      <div className="ImageModal modal">
        <div className="container">
          <button
            className="close-button round-button"
            onClick={closeImageModal}
          >
            <i className="fas fa-times"></i>
          </button>
          <Slider
            productList={imageList}
            showItem="1"
            itemNums={imageList.length}
            selected={selected}
          />
        </div>
      </div>
    );
  }
}

export default ImageModal;
