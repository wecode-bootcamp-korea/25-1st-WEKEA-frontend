import React, { Component } from 'react';

class SignupSelect extends Component {
  render() {
    const { name, options, handleChange, handleSelected } = this.props;
    return (
      <select
        name={name}
        onChange={handleChange}
        onClick={handleSelected}
        className="signupSelect"
      >
        {options.map((el, idx) => (
          <React.Fragment key={idx}>
            <option value={el.id}>{el.option}</option>
          </React.Fragment>
        ))}
      </select>
    );
  }
}

export default SignupSelect;
