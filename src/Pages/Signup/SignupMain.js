import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignupInput from './SignUpInput';
import SignupSelect from './SignupSelect';
import SignupButton from './SignupButton';
import SignupCheckBox from './SignupCheckBox';

class SignupMain extends Component {
  state = {
    lastNameValue: '',
    firstNameValue: '',
    birthDayValue: '',
    phoneNumberValue: '',
    postNumberValue: '',
    roadNumberValue: '',
    addressValue: '',
    emailValue: '',
    passwordValue: '',
    gender: '',
    favorite: '',
    checkAll: false,
    checkUser: false,
    checkAgree: false,
    checkOut: false,
  };

  componentDidMount() {
    this.setState({
      gender: '0',
      favorite: '0',
    });
  }

  // componentDidUpdate() {
  //   const { birthDayValue } = this.state;
  //   if (birthDayValue.length === 8) {
  //     this.setState({
  //       ),
  //     });
  //   }
  // }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleCheck = e => {
    const { name } = e.target;
    this.setState({
      [name]: true,
    });
  };

  handleClick = () => {
    // this.props.history.push('/login');
    const {
      lastNameValue,
      firstNameValue,
      birthDayValue,
      phoneNumberValue,
      roadNumberValue,
      addressValue,
      postNumberValue,
      emailValue,
      passwordValue,
      gender,
      favorite,
      checkAll,
      checkUser,
      checkAgree,
      checkOut,
    } = this.state;

    const birthDayValid = birthDayValue.includes('-');
    const phoneNumberValid = phoneNumberValue.length > 9;
    const roadNumberValid = roadNumberValue.includes('길');
    const addressValid = addressValue.length > 5;
    const postNumberValid = postNumberValue.length === 5;
    const emailValid = emailValue.includes('@');
    const passwordValid = passwordValue.length > 8;
    const genderValid = gender > 0;
    const favoriteValid = favorite > 0;
    const checkValid = checkAll && checkUser && checkAgree && checkOut;

    if (
      lastNameValue &&
      firstNameValue &&
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
      this.props.history.push('/login');
      alert('회원가입이 완료 되었습니다.');
    } else {
      alert('양식이 잘못 되었습니다. ');
    }

    // fetch('http://10.58.5.115:8000/user/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     last_name: lastNameValue,
    //     first_name: firstNameValue,
    //     birthday: birthDayValue,
    //     email: emailValue,
    //     password: passwordValue,
    //     mobile_phone: phoneNumberValue,
    //     zip_code: postNumberValue,
    //     name_of_street: roadNumberValue,
    //     default_address: addressValue,
    //     gender: Number(gender)
    //     favorite_store: Number(favorite)
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     if (response.token) {
    //       localStorage.setItem('token', response.token);
    //       this.props.history.push('/login');
    //     }
    //   });
    //   this.props.history.push('/login');
  };

  render() {
    console.log(this.state);
    return (
      <article className="SignupMain_article">
        <form>
          <SignupInput
            name="lastNameValue"
            placeholder="성"
            text="성 필드는 필수 필드입니다."
            handleChange={this.handleChange}
          />

          <SignupInput
            name="firstNameValue"
            placeholder="이름"
            handleChange={this.handleChange}
          />

          <SignupInput
            name="birthDayValue"
            placeholder="생일 (YYYY-MM-DD)"
            handleChange={this.handleChange}
          />

          <SignupInput
            name="phoneNumberValue"
            placeholder="KR (+82)"
            handleChange={this.handleChange}
          />

          <SignupSelect
            handleChange={this.handleChange}
            name="gender"
            value="성별 (선택 사항)"
            options={[
              { id: '0', option: '' },
              { id: '1', option: '남성' },
              { id: '2', option: '여성' },
              { id: '3', option: '선택안함' },
            ]}
          />

          <SignupInput
            name="roadNumberValue"
            placeholder="도로명 주소"
            handleChange={this.handleChange}
          />

          <SignupInput
            name="addressValue"
            placeholder="상세 주소"
            handleChange={this.handleChange}
          />

          <SignupInput
            name="postNumberValue"
            placeholder="우편번호"
            handleChange={this.handleChange}
          />

          <SignupSelect
            handleChange={this.handleChange}
            name="favorite"
            value="선호하는 매장"
            options={[
              { id: '1', option: '고양' },
              { id: '2', option: '광명' },
              { id: '3', option: '기흥' },
              { id: '4', option: '동부산' },
            ]}
          />

          <SignupInput
            name="emailValue"
            placeholder="이메일"
            handleChange={this.handleChange}
          />

          <SignupInput
            name="passwordValue"
            placeholder="비밀번호"
            type="password"
            handleChange={this.handleChange}
          />

          <SignupCheckBox
            name="checkAll"
            placeholder="(필수) 약관을 모두 읽고 동의합니다."
            checkboxLink="이용약관"
            type="checkbox"
            handleCheck={this.handleCheck}
          />

          <SignupCheckBox
            name="checkUser"
            placeholder="(필수) 개인정보 수집 / 이용에 동의합니다."
            checkboxLink="개인정보 수집 / 이용 동의"
            type="checkbox"
            handleCheck={this.handleCheck}
          />

          <SignupCheckBox
            name="checkAgree"
            placeholder="(필수) 개인정보 처리 위탁에 동의합니다."
            checkboxLink="개인정보 처리 위탁"
            type="checkbox"
            handleCheck={this.handleCheck}
          />

          <div className="signupCheckBoxLastchild">
            <SignupCheckBox
              name="checkOut"
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
