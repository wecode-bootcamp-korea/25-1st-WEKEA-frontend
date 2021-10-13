import React from 'react';
import './Description.scss';

class Description extends React.Component {
  render() {
    const { description } = this.props;

    return (
      <>
        <h2 className="title">제품 설명</h2>
        <div className="main">
          <p>{description && description.split('디자이너')[0]}</p>
          <br />
          <p>
            <b>디자이너</b>
          </p>
          <p>{description && description.split('디자이너')[1]}</p>
        </div>
      </>
    );
  }
}

export default Description;
