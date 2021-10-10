import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignupInput from './SignupInput';
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
    // const {
    //   lastNameValue,
    //   firstNameValue,
    //   birthDayValue,
    //   phoneNumberValue,
    //   postNumberValue,
    //   roadNumberValue,
    //   addressValue,
    //   emailValue,
    //   passwordValue,
    //   gender: '',
    //   favorite: '',
    // } = this.state;

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
    //     favorite_store: favorite
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     if (response.token) {
    //       localStorage.setItem('token', response.token);
    //       this.props.history.push('/login');
    //     }
    //   });
    this.props.history.push('/login');
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
            placeholder="생일"
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
            name="postNumberValueValue"
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
