import React, { Component } from 'react';
import Info from './Info/Info';
import FilterBar from './Filter/FilterBar';

class Header extends Component {
  render() {
    const { subcategoryInfo } = this.props;
    return (
      <div className="Header">
        <Info subcategoryInfo={subcategoryInfo} />
        <FilterBar />
      </div>
    );
  }
}

export default Header;
