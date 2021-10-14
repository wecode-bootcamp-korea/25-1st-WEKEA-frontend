import React from 'react';
import './AsideModal.scss';

class AsideModal extends React.Component {
  render() {
    const { closeModal } = this.props;

    return (
      <div className="AsideModal modal">
        <div className="container">
          <button className="close-button round-button" onClick={closeModal}>
            <i className="fas fa-times" />
          </button>
          <h2 className="title">제품 설명</h2>
          <div className="main">
            침대 협탁으로 사용할 수도 있습니다.
            <br />
            <br />벽 재질에 맞는 고정장치를 사용해야 합니다. 제품을 설치할 벽
            재질에 맞는 고정장치를 사용하세요.
          </div>
        </div>
      </div>
    );
  }
}

export default AsideModal;
