import React, { Component } from 'react';
import Info from './Info/Info';
import FilterBar from './Filter/FilterBar';

class Header extends Component {
  render() {
    const { itemList } = this.props;
    return (
      <div className="Header">
        <Info itemList={itemList} />
        <FilterBar />
      </div>
    );
  }
}

export default Header;
