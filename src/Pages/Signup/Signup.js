import React, { Component } from 'react';
import SignupMain from './SignupMain';
import SignupAside from './SignupAside';
import './Signup.scss';
export default class Signup extends Component {
  render() {
    return (
      <section className="SignupSection">
        <SignupAside />
        <SignupMain />
      </section>
    );
  }
}
