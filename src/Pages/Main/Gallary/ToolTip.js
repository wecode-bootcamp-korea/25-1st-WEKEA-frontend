import React from 'react';

class ToolTip extends React.Component {
  render() {
    const { id, item } = this.props;
    const { en, kr, explain, price } = item;
    return (
      <div id={id} className="box">
        <div className="text">
          <span className="isNew">New</span>
          <span className="name">{`${en} ${kr}`}</span>
          <span className="explain">{explain}</span>
          <span className="price">{`₩ ${price}`}</span>
        </div>
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  }
}

export default ToolTip;
