import React, { Component } from 'react';

class FilterList extends Component {
  render() {
    const { name, list, buttonOff } = this.props;
    return (
      <div className="FilterList" onBlur={buttonOff}>
        {list.map((item, idx) => (
          <div key={idx} className="listItem">
            <label className="itemLabel" for={item}>
              {item}
            </label>
            <input id={item} name={name} type="radio" />
          </div>
        ))}
      </div>
    );
  }
}

export default FilterList;
