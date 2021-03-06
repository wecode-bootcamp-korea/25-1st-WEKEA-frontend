import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignupInput from './SignupInput';
import SignupSelect from './SignupSelect';
import SignupButton from './SignupButton';
import SignupCheckBox from './SignupCheckBox';
import { API } from '../../config';

class SignupMain extends Component {
  state = {
    lastName: '',
    firstName: '',
    birthDay: '',
    phoneNumber: '',
    postNumber: '',
    roadNumber: '',
    address: '',
    email: '',
    password: '',
    defaultAddress: 0,
    gender: 0,
    favorite: 0,

    isAgreementChecked: false,
    isPersonalInfoChecked: false,
    isConsignmentChecked: false,
    isTransferChecked: false,

    toggleSecret: false,
    isSelectFavorite: false,
    isSelectGender: false,
    isWarn: false,
  };

  handleChange = e => {
    const { name, value } = e.target;

    if (name === 'gender' || name === 'favorite') {
      this.setState({
        [name]: Number(value),
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleCheck = e => {
    const { name } = e.target;
    this.setState({
      [name]: true,
    });
  };

  handleWarn = e => {
    const { isWarn } = this.state;
    this.setState({
      isWarn: !isWarn,
    });
  };
  handleGender = e => {
    this.setState({
      isSelectGender: true,
    });
  };

  handleFavorite = e => {
    this.setState({
      isSelectFavorite: true,
    });
  };

  toggleSecret = e => {
    const { toggleSecret } = this.state;
    this.setState({
      toggleSecret: !toggleSecret,
    });
  };

  handleClick = e => {
    e.preventDefault();
    const {
      defaultAddress,
      lastName,
      firstName,
      birthDay,
      phoneNumber,
      roadNumber,
      address,
      postNumber,
      email,
      password,
      gender,
      favorite,
      isAgreementChecked,
      isPersonalInfoChecked,
      isConsignmentChecked,
      isTransferChecked,
    } = this.state;

    const birthDayValid = birthDay.includes('-');
    const phoneNumberValid = phoneNumber.length > 9;
    const roadNumberValid = roadNumber.includes('???');
    const addressValid = address.length > 5;
    const postNumberValid = postNumber.length === 5;
    const emailValid =
      email.includes('@') && email.includes('.com') && email.length > 5;
    const passwordValid = password.length > 8;
    const genderValid = gender > 0;
    const favoriteValid = favorite > 0;
    const checkValid =
      isAgreementChecked &&
      isPersonalInfoChecked &&
      isConsignmentChecked &&
      isTransferChecked;

    if (
      lastName &&
      firstName &&
      birthDayValid &&
      phoneNumberValid &&
      roadNumberValid &&
      addressValid &&
      postNumberValid &&
      emailValid &&
      passwordValid &&
      genderValid &&
      favoriteValid &&
      checkValid
    ) {
      fetch(`${API}/user/signup`, {
        method: 'POST',
        body: JSON.stringify({
          last_name: lastName,
          first_name: firstName,
          email: email,
          password: password,
          mobile_phone: phoneNumber,
          birthday: birthDay,
          zip_code: postNumber,
          name_of_street: roadNumber,
          detail_address: address,
          default_address: defaultAddress,
          gender: gender,
          favorite_store: favorite,
        }),
      })
        .then(response => response.json())
        .then(response => {
          alert('???????????????! ??????????????? ?????????????????????.');
          this.props.history.push('/login');
        });
    }
  };

  render() {
    const {
      toggleSecret,
      isSelectFavorite,
      isSelectGender,
      isWarn,
      lastName,
      firstName,
      birthDay,
      phoneNumber,
      postNumber,
      address,
      roadNumber,
      email,
      password,
    } = this.state;

    return (
      <article className="SignupMain_article">
        <form>
          <SignupInput
            inputValue={lastName}
            name="lastName"
            placeholder="???"
            text="??? ????????? ?????? ???????????????."
            handleChange={this.handleChange}
          />

          <SignupInput
            inputValue={firstName}
            name="firstName"
            placeholder="??????"
            text="?????? ????????? ?????? ???????????????."
            handleChange={this.handleChange}
          />
          <div className="questionBox">
            {
              <div className={isWarn ? 'warnOn' : 'warnOff'}>
                ??? 14??? ????????? ????????? ??? ????????????.
              </div>
            }

            <SignupInput
              inputValue={birthDay}
              name="birthDay"
              placeholder="?????? (YYYY-MM-DD)"
              text="?????? ????????? ?????? ???????????????."
              handleChange={this.handleChange}
            />
            <div className="questionMark" onClick={this.handleWarn}>
              <i className="far fa-question-circle"></i>
            </div>
          </div>

          <SignupInput
            handleGender={this.handleGender}
            inputValue={phoneNumber}
            name="phoneNumber"
            text="????????? ????????? ?????? ???????????????."
            placeholder="KR (+82)"
            handleChange={this.handleChange}
          />

          <div className="selectBox">
            <div className={isSelectGender ? 'selectTextFalse' : 'selectText'}>
              ??????(?????? ??????)
            </div>

            <SignupSelect
              handleSelected={this.handleGender}
              handleChange={this.handleChange}
              name="gender"
              options={[
                { id: 0, option: '' },
                { id: 1, option: '??????' },
                { id: 2, option: '??????' },
                { id: 3, option: '????????????' },
              ]}
            />
          </div>
          <SignupInput
            inputValue={roadNumber}
            name="roadNumber"
            placeholder="????????? ??????"
            handleChange={this.handleChange}
          />
          <SignupInput
            inputValue={address}
            name="address"
            text="?????? ?????? ????????? ?????? ???????????????."
            placeholder="?????? ??????"
            handleChange={this.handleChange}
          />
          <SignupInput
            inputValue={postNumber}
            name="postNumber"
            placeholder="????????????"
            handleChange={this.handleChange}
          />
          <div className="selectBox">
            <div
              className={
                isSelectFavorite ? 'selectTextFalse' : 'selectTextAddress'
              }
            >
              ???????????? ??????
            </div>
            <SignupSelect
              handleSelected={this.handleFavorite}
              handleChange={this.handleChange}
              name="favorite"
              value="???????????? ??????"
              options={[
                { id: 1, option: '??????' },
                { id: 2, option: '??????' },
                { id: 3, option: '??????' },
                { id: 4, option: '?????????' },
              ]}
            />
          </div>
          <SignupInput
            inputValue={email}
            name="email"
            text="????????? ????????? ?????? ???????????????."
            placeholder="?????????"
            handleChange={this.handleChange}
          />
          <div className="signupFormPassword">
            <SignupInput
              toggleSecret={toggleSecret}
              inputValue={password}
              name="password"
              text="???????????? ????????? ?????? ???????????????."
              placeholder="????????????"
              type="password"
              handleChange={this.handleChange}
            />
            <span className="toggleEye" onClick={this.toggleSecret}>
              {toggleSecret ? (
                <i className="far fa-eye-slash"></i>
              ) : (
                <i className="far fa-eye"></i>
              )}
            </span>
          </div>

          <div className="signupCheckBoxFirst">
            <SignupCheckBox
              name="isAgreementChecked"
              placeholder="(??????) ????????? ?????? ?????? ???????????????."
              checkboxLink="????????????"
              type="checkbox"
              handleCheck={this.handleCheck}
            />
          </div>
          <SignupCheckBox
            name="isPersonalInfoChecked"
            placeholder="(??????) ???????????? ?????? / ????????? ???????????????."
            checkboxLink="???????????? ?????? / ?????? ??????"
            type="checkbox"
            handleCheck={this.handleCheck}
          />
          <SignupCheckBox
            name="isConsignmentChecked"
            placeholder="(??????) ???????????? ?????? ????????? ???????????????."
            checkboxLink="???????????? ?????? ??????"
            type="checkbox"
            handleCheck={this.handleCheck}
          />
          <div className="signupCheckBoxLast">
            <SignupCheckBox
              name="isTransferChecked"
              placeholder="(??????) ???????????? ??????????????? ???????????????."
              checkboxLink="???????????? ????????????"
              type="checkbox"
              handleCheck={this.handleCheck}
            />
          </div>
          <SignupButton
            handleClick={this.handleClick}
            text="?????? ?????? ????????????"
          />
        </form>
      </article>
    );
  }
}

export default withRouter(SignupMain);
