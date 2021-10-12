import React, { Component } from 'react';
import FilterBtn from './FilterBtn';
import './FilterBar.scss';

class FilterBar extends Component {
  state = {
    currentBtn: '',
  };

  buttonOn = e => {
    const { currentBtn } = this.state;
    this.setState({
      currentBtn: currentBtn === e.target.id ? '' : e.target.id,
    });
  };

  buttonOff = e => {
    this.setState({
      currentBtn: '',
    });
  };

  render() {
    const { buttonOn, buttonOff } = this;
    const { currentBtn } = this.state;

    return (
      <div className="FilterBar">
        {FILTER_BTNS.map((item, idx) => (
          <FilterBtn
            key={idx}
            item={item}
            currentBtn={currentBtn}
            buttonOn={buttonOn}
            buttonOff={buttonOff}
          />
        ))}
      </div>
    );
  }
}

const FILTER_BTNS = [
  { name: '정렬', list: ['낮은 가격순', '최고 가격순', '이름'] },
  { name: '사이즈', list: ['낮은 가격순', '최고 가격순', '이름'] },
  { name: '가격', list: ['낮은 가격순', '최고 가격순', '이름'] },
];

export default FilterBar;
