import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Icon.scss';

export default class Icon extends Component {
  render() {
    const { url } = this.props;
    return (
      <div>
        <Link className="icon" to="/Signup">
          <i class={url}></i>
        </Link>
      </div>
    );
  }
}
