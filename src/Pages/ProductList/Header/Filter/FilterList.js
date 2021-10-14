import React, { Component } from 'react';

class FilterList extends Component {
  render() {
    const { name, list, buttonOff, handleFilter } = this.props;
    return (
      <div className="FilterList" onBlur={buttonOff}>
        {list.map((item, idx) => (
          <div key={idx} className="listItem">
            <label className="itemLabel" for={item[1]}>
              {item[0]}
            </label>
            <input
              id={item[1]}
              name={name}
              type="radio"
              onChange={handleFilter}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default FilterList;
