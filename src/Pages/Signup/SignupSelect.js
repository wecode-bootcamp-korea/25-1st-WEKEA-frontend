import React, { Component } from 'react';

class SignupSelect extends Component {
  render() {
    const { name, options, handleChange } = this.props;
    return (
      <select
        name={name}
        onChange={e => handleChange(e)}
        className="signupSelect"
      >
        {options.map((el, idx) => (
          <>
            <option value={el.id} key={idx}>
              {el.option}
            </option>
          </>
        ))}
      </select>
    );
  }
}

export default SignupSelect;
