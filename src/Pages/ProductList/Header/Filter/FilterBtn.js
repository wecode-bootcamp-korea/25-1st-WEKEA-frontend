import React, { Component } from 'react';

class FilterBtn extends Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <button className="FilterBtn">
          {name}
          <i class="fas fa-chevron-down"></i>
        </button>
      </>
    );
  }
}

export default FilterBtn;
