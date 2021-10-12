import React, { Component } from 'react';
import Info from './Info/Info';
import FilterBar from './Filter/FilterBar';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Info />
        <FilterBar />
      </div>
    );
  }
}

export default Header;
