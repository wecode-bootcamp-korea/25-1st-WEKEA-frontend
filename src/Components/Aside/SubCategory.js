import React, { Component } from 'react';

export default class SubCategory extends Component {
  render() {
    const { id, catName } = this.props;

    return (
      <>
        <li key={id}>{catName}</li>
      </>
    );
  }
}
