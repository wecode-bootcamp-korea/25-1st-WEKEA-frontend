import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignupInput from './SignupInput';
import SignupSelect from './SignupSelect';
import SignupButton from './SignupButton';
import SignupCheckBox from './SignupCheckBox';
import { API } from '../../config.js';

class SignupMain extends Component {
  state = {
    lastName: '',
    firstName: '',
    birthDay: '',
    phoneNumber: '',
    postNumber: 0,
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
    const roadNumberValid = roadNumber.includes('길');
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
          alert('환영합니다! 회원가입이 완료되었습니다.');
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
            placeholder="성"
            text="성 필드는 필수 필드입니다."
            handleChange={this.handleChange}
          />

          <SignupInput
            inputValue={firstName}
            name="firstName"
            placeholder="이름"
            text="이름 필드는 필수 필드입니다."
            handleChange={this.handleChange}
          />
          <div className="questionBox">
            {
              <div className={isWarn ? 'warnOn' : 'warnOff'}>
                만 14세 이상만 가입할 수 있습니다.
              </div>
            }

            <SignupInput
              inputValue={birthDay}
              name="birthDay"
              placeholder="생일 (YYYY-MM-DD)"
              text="생일 필드는 필수 필드입니다."
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
            text="휴대폰 필드는 필수 필드입니다."
            placeholder="KR (+82)"
            handleChange={this.handleChange}
          />

          <div className="selectBox">
            <div className={isSelectGender ? 'selectTextFalse' : 'selectText'}>
              성별(선택 사항)
            </div>

            <SignupSelect
              handleSelected={this.handleGender}
              handleChange={this.handleChange}
              name="gender"
              options={[
                { id: 0, option: '' },
                { id: 1, option: '남성' },
                { id: 2, option: '여성' },
                { id: 3, option: '선택안함' },
              ]}
            />
          </div>
          <SignupInput
            inputValue={roadNumber}
            name="roadNumber"
            placeholder="도로명 주소"
            handleChange={this.handleChange}
          />
          <SignupInput
            inputValue={address}
            name="address"
            text="상세 주소 필드는 필수 필드입니다."
            placeholder="상세 주소"
            handleChange={this.handleChange}
          />
          <SignupInput
            inputValue={postNumber}
            name="postNumber"
            placeholder="우편번호"
            handleChange={this.handleChange}
          />
          <div className="selectBox">
            <div
              className={
                isSelectFavorite ? 'selectTextFalse' : 'selectTextAddress'
              }
            >
              선호하는 매장
            </div>
            <SignupSelect
              handleSelected={this.handleFavorite}
              handleChange={this.handleChange}
              name="favorite"
              value="선호하는 매장"
              options={[
                { id: 1, option: '고양' },
                { id: 2, option: '광명' },
                { id: 3, option: '기흥' },
                { id: 4, option: '동부산' },
              ]}
            />
          </div>
          <SignupInput
            inputValue={email}
            name="email"
            text="이메일 필드는 필수 필드입니다."
            placeholder="이메일"
            handleChange={this.handleChange}
          />
          <div className="signupFormPassword">
            <SignupInput
              toggleSecret={toggleSecret}
              inputValue={password}
              name="password"
              text="비밀번호 필드는 필수 필드입니다."
              placeholder="비밀번호"
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
              placeholder="(필수) 약관을 모두 읽고 동의합니다."
              checkboxLink="이용약관"
              type="checkbox"
              handleCheck={this.handleCheck}
            />
          </div>
          <SignupCheckBox
            name="isPersonalInfoChecked"
            placeholder="(필수) 개인정보 수집 / 이용에 동의합니다."
            checkboxLink="개인정보 수집 / 이용 동의"
            type="checkbox"
            handleCheck={this.handleCheck}
          />
          <SignupCheckBox
            name="isConsignmentChecked"
            placeholder="(필수) 개인정보 처리 위탁에 동의합니다."
            checkboxLink="개인정보 처리 위탁"
            type="checkbox"
            handleCheck={this.handleCheck}
          />
          <div className="signupCheckBoxLast">
            <SignupCheckBox
              name="isTransferChecked"
              placeholder="(필수) 개인정보 국외이전에 동의합니다."
              checkboxLink="개인정보 국외이전"
              type="checkbox"
              handleCheck={this.handleCheck}
            />
          </div>
          <SignupButton
            handleClick={this.handleClick}
            text="입력 정보 제출하기"
          />
        </form>
      </article>
    );
  }
}

export default withRouter(SignupMain);
