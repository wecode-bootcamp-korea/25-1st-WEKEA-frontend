import React, { Component } from 'react';
import FilterList from './FilterList';

class FilterBtn extends Component {
  render() {
    const { item, currentBtn, buttonOn, handleFilter } = this.props;
    const { name, list } = item;
    const isMatch = currentBtn === name;
    return (
      <div>
        <button
          id={name}
          className={`FilterBtn ${isMatch ? 'focus' : ''}`}
          onClick={buttonOn}
        >
          {name}
          <i
            id={name}
            className={`fas fa-chevron-${isMatch ? 'up' : 'down'} `}
            onClick={buttonOn}
          ></i>
        </button>
        {isMatch && (
          <FilterList
            id={name}
            name={name}
            list={list}
            handleFilter={handleFilter}
          />
        )}
      </div>
    );
  }
}

export default FilterBtn;
