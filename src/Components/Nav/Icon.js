import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Icon.scss';

export default class Icon extends Component {
  render() {
    const { id, url } = this.props;
    return (
      <div>
        <Link className="icon" to="/Signup" key={id}>
          <i className={url}></i>
        </Link>
      </div>
    );
  }
}
