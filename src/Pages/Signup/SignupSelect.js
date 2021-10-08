import React, { Component } from 'react';

class SignupSelect extends Component {
  render() {
    const { value, firstOption, secondOption, thirdOption } = this.props;
    return (
      <select className="signupSelect">
        <option>{value}</option>
        <option>{firstOption}</option>
        <option>{secondOption}</option>
        <option>{thirdOption}</option>
      </select>
    );
  }
}

export default SignupSelect;
