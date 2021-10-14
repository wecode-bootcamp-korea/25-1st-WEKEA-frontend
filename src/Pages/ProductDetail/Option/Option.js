import React from 'react';
import './Option.scss';

class Option extends React.Component {
  render() {
    const { option, selectedOption, changeOption } = this.props;

    return (
      <>
        <h2 className="title">규격</h2>
        <div className="main">
          <div
            className={`option-box ${selectedOption === 1 && 'selected'}`}
            onClick={() => changeOption(1)}
          >
            <span>
              {Math.round(+option.width / 10) * 10}x
              {Math.round(+option.length / 10) * 10} cm
            </span>
          </div>
          <div
            className={`option-box ${selectedOption === 2 && 'selected'}`}
            onClick={() => changeOption(2)}
          >
            <span>
              {Math.round(+option.width / 10) * 10 + 20}x
              {Math.round(+option.length / 10) * 10} cm
            </span>
            <span>+ ￦ 20,000</span>
          </div>
        </div>
      </>
    );
  }
}

export default Option;
