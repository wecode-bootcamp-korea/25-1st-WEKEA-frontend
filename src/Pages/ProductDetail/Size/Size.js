import React from 'react';

class Size extends React.Component {
  render() {
    const { size } = this.props;

    return (
      <>
        <h2 className="title">제품 크기</h2>
        <div className="main">
          <p>
            <b>길이:</b> {+size.width}
          </p>
          <p>
            <b>폭:</b> {+size.length}
          </p>
          {!!+size.height && (
            <p>
              <b>높이:</b> {+size.height}
            </p>
          )}
        </div>
      </>
    );
  }
}

export default Size;
