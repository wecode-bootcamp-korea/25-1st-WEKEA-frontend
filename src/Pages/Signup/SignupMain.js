import React, { Component } from 'react';
import SignupInput from './SignupInput';
import SignupSelect from './SignupSelect';
import SignupButton from './SignupButton';
import SignupCheckBox from './SignupCheckBox';

class SignupMain extends Component {
  render() {
    return (
      <article className="SignupMain_article">
        <SignupInput
          placeholder="성"
          className="signupInput"
          text="성 필드는 필수 필드입니다."
        />
        <SignupInput placeholder="이름" className="signupInput" />
        <SignupInput placeholder="생일" className="signupInput" />
        <SignupInput placeholder="KR (+82)" className="signupInput" />

        <SignupSelect
          value="성별 (선택 사항)"
          firstOption="남성"
          secondOption="여성"
          thirdOption="응답 거부"
        />
        <SignupButton text="우편번호 찾기" />

        <SignupInput placeholder="도로명 주소" className="signupInput" />
        <SignupInput placeholder="상세 주소" className="signupInput" />

        <SignupSelect
          value="선호하는 매장"
          firstOption="광명"
          secondOption="기흥"
          thirdOption="동부산"
        />

        <SignupInput placeholder="이메일" className="signupInput" />
        <SignupInput
          placeholder="비밀번호"
          className="signupInput"
          type="password"
        />

        <SignupCheckBox
          placeholder="(필수) 약관을 모두 읽고 동의합니다."
          checkboxLink="이용약관"
          type="checkbox"
        />

        <SignupCheckBox
          placeholder="(필수) 개인정보 수집 / 이용에 동의합니다."
          checkboxLink="개인정보 수집 / 이용 동의"
          type="checkbox"
        />

        <SignupCheckBox
          placeholder="(필수) 개인정보 처리 위탁에 동의합니다."
          checkboxLink="개인정보 처리 위탁"
          type="checkbox"
        />
        <div className="signupCheckBoxLastchild">
          <SignupCheckBox
            placeholder="(필수) 개인정보 국외이전에 동의합니다."
            checkboxLink="개인정보 국외이전"
            type="checkbox"
          />
        </div>

        <SignupButton text="입력 정보 제출하기" />
      </article>
    );
  }
}

export default SignupMain;
