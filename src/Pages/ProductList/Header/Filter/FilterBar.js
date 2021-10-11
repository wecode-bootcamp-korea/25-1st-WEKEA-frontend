import React, { Component } from 'react';
import FilterBtn from './FilterBtn';
import './FilterBar.scss';

class FilterBar extends Component {
  render() {
    console.log(FILTER_LIST);
    return (
      <div className="FilterBar">
        {FILTER_LIST.map(item => (
          <FilterBtn name={item} />
        ))}
      </div>
    );
  }
}

const FILTER_LIST = ['정렬', '사이즈', '가격'];

export default FilterBar;
