import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import DaumPostcodeEmbed from 'react-daum-postcode';

import { register } from 'app/slices/auth';
import { clearMessage } from 'app/slices/message';

import FormField from 'app/components/FormField/FormField';

import 'app/pages/Register/Register.css';

const Register = () => {
  const { message } = useSelector((state) => state.message);
  const [visible, setVisible] = useState(false);
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(fullAddress);
    setVisible(false);
  };

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    nickname: '',
    email: '',
    password: '',
    passwordCheck: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
    address: '',
  };

  const validationSchema = Yup.object().shape({
    nickname: Yup.string()
      .required('닉네임을 입력해주세요.')
      .min(2, '닉네임은 최소 2자 이상 입력해주세요.')
      .max(20, '닉네임은 최대 20자까지 입력 가능합니다.'),
    email: Yup.string()
      .email('이메일 형식에 맞지 않습니다.')
      .test('includes-dot', '이메일 형식에 맞지 않습니다.', function (value) {
        if (value) {
          return value.includes('.');
        }
        return false;
      })
      .required('이메일을 입력해주세요.'),
    password: Yup.string()
      .required('비밀번호를 입력해주세요.')
      .min(8, '비밀번호는 최소 8자리 이상 입력해주세요.')
      .test(
        'password',
        '비밀번호는 문자, 숫자, 특수문자를 모두 포함해야 합니다.',
        (value) => {
          const optionalSpeciesCount = [
            /[A-Z]/.test(value),
            /[a-z]/.test(value),
            /[\u3131-\uD79D]/.test(value),
          ].filter(Boolean)?.length;

          const essentialSpeciesCount = [
            /[@$!%*?&]/.test(value),
            /\d/.test(value),
          ].filter(Boolean)?.length;

          return optionalSpeciesCount >= 1 && essentialSpeciesCount === 2;
        },
      )
      .test(
        'password',
        '비밀번호는 닉네임과 같을 수 없습니다.',
        (value, { parent }) => {
          const isNicknameMatch = value !== parent.nickname;
          return isNicknameMatch;
        },
      )
      .test(
        'password',
        '비밀번호는 휴대폰 번호를 포함할 수 없습니다.',
        (value, { parent }) => {
          const isPhoneNumberContained = value.includes(parent.phoneNumber);
          return !isPhoneNumberContained;
        },
      )
      .test(
        'password',
        '비밀번호는 생년월일을 포함할 수 없습니다.',
        (value, { parent }) => {
          const { birthDate } = parent;
          if (birthDate !== null) {
            const sixDigitsBirthDate = birthDate?.substr(2, 6);
            const forDigitsBirthDate = birthDate?.substr(4, 4);
            const isBirthDateContained =
              value.includes(birthDate) |
              value.includes(sixDigitsBirthDate) |
              value.includes(forDigitsBirthDate);
            return !isBirthDateContained;
          }
        },
      )
      .test(
        'password',
        '비밀번호는 닉네임을 포함할 수 없습니다.',
        (value, { parent }) => {
          const isNicknameContained = value.includes(parent.nickname);
          return !isNicknameContained;
        },
      )
      .test(
        'password',
        '비밀번호는 이메일 아이디를 포함할 수 없습니다.',
        (value, { parent }) => {
          const emailId = parent.email?.split('@')[0];
          return !value.includes(emailId);
        },
      )
      .test(
        'password',
        '비밀번호는 휴대폰 번호의 마지막 4자리를 포함할 수 없습니다.',
        (value, { parent }) => {
          const phoneNumber = parent.phoneNumber;
          if (phoneNumber !== null) {
            const lastFourDigits = phoneNumber?.substr(phoneNumber?.length - 4);
            return !value.includes(lastFourDigits);
          }
        },
      )
      .test(
        'password',
        '비밀번호는 휴대폰 번호의 중간 자리를 포함할 수 없습니다.',
        (value, { parent }) => {
          const phoneNumber = parent.phoneNumber;
          let middleDigits;
          if (phoneNumber !== null) {
            if (phoneNumber?.length === 11) {
              middleDigits = phoneNumber?.substr(3, 4);
            } else if (phoneNumber?.length === 10) {
              middleDigits = phoneNumber?.substr(3, 3);
            }
            return !value.includes(middleDigits);
          }
        },
      ),
    passwordCheck: Yup.string()
      .required('비밀번호를 한번 더 입력해주세요.')
      .test(
        'passwordCheck',
        '비밀번호와 동일하지 않습니다.',
        (value, { parent }) => {
          const isPasswordMatch = value !== parent.password;
          return !isPasswordMatch;
        },
      ),
    phoneNumber: Yup.string()
      .required('휴대폰 번호를 입력해주세요.')
      .matches(
        /^(010)[0-9]{3,4}[0-9]{4}$/,
        '유효하지 않은 휴대폰 번호 형식입니다.',
      ),
    birthDate: Yup.string()
      .required('생년월일을 입력해주세요.')
      .matches(
        /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/,
        '유효하지 않은 생년월일입니다.',
      )
      .test('valid-date', '유효하지 않은 생년월일입니다.', (value) => {
        const date = moment(value, 'YYYYMMDD', true);
        return date.isValid();
      }),
    gender: Yup.string().required('성별을 선택해주세요.'),
    address: Yup.string().required('주소를 입력해주세요.'),
    detailAddress: Yup.string().required('상세 주소를 입력해주세요.'),
  });

  const isObjectEmpty = (obj) => {
    delete obj.address;
    return Object.keys(obj).length === 0;
  };

  const hasEmptyString = (obj) => {
    if (address === '') return true;
    delete obj.address;
    return Object.values(obj).some((value) => {
      return value === '';
    });
  };

  const handleRegister = (values, errors) => {
    if (hasEmptyString(values)) {
      alert('모든 회원 정보를 입력해주세요.');
      return;
    }
    if (isAvailableEmail === false) {
      alert('이메일 중복 확인이 필요합니다.');
      return;
    }
    if (isAvailableNickname === false) {
      alert('닉네임 중복 확인이 필요합니다.');
      return;
    }
    if (!isObjectEmpty(errors)) {
      const errList = Object.keys(errors).map((err) => {
        if (err === 'email') {
          return '이메일';
        } else if (err === 'nickname') {
          return '닉네임';
        } else if (err === 'password') {
          return '패스워드';
        } else if (err === 'passwordCheck') {
          return '비밀번호 확인';
        } else if (err === 'phoneNumber') {
          return '휴대폰 번호';
        } else if (err === 'birthDate') {
          return '생년월일';
        } else if (err === 'gender') {
          return '성별';
        } else if (err === 'address') {
          return '주소';
        } else if (err === 'detailAddress') {
          return '상세 주소';
        }
      });
      alert('입력된 회원 정보를 확인해주세요.\n' + errList);
    }
    if (
      isAvailableEmail &&
      isAvailableEmail &&
      isObjectEmpty(errors) &&
      !hasEmptyString(values)
    ) {
      alert('회원가입이 완료되었습니다.');
      navigate('/');
      window.scrollTo(0, 0);
      // dispatch(register({ nickname, email, password }))
      //   .unwrap()
      //   .then(() => {
      //     navigate('/');
      //   })
      //   .catch((err) => console.log(err));
    }
  };

  const handleButtonClick = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const [isAvailableEmail, setIsAvailableEmail] = useState(false);
  const checkEmail = (email, errors, values) => {
    if (values.email === '') {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (Object.keys(errors).includes('email')) {
      alert('이메일 형식에 맞지 않습니다.');
      return;
    }
    if (!Object.keys(errors).includes('email') && values.email !== '')
      if (email === 'dataus@dataus.co.kr') {
        setIsAvailableEmail(false);
        alert('중복된 이메일입니다.');
      } else {
        setIsAvailableEmail(true);
        alert('사용 가능한 이메일입니다.');
      }
  };

  const [isAvailableNickname, setIsAvailableNickname] = useState(false);
  const checkNickName = (nickname, errors, values) => {
    if (values.nickname === '') {
      alert('닉네임을 입력해주세요.');
      return;
    }
    if (Object.keys(errors).includes('nickname')) {
      alert('닉네임은 2자 ~ 20자 이내로 입력 하셔야 합니다.');
      return;
    }
    if (!Object.keys(errors).includes('nickname') && values.nickname !== '')
      if (nickname === 'dataus') {
        setIsAvailableNickname(false);
        alert('중복된 닉네임입니다.');
      } else {
        setIsAvailableNickname(true);
        alert('사용 가능한 닉네임입니다.');
      }
  };

  return (
    <div className="register-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ values, errors, touched }) => (
          <Form values={values}>
            <div className="register-box">
              <div className="col-md-6 offset-md-3 col-xs-12">
                <h2 className="text-xs-left">회원정보 입력</h2>
                <FormField
                  label="이메일"
                  placeholder="이메일을 입력해주세요."
                  name="email"
                  type="text"
                  errors={errors}
                  touched={touched}
                />
                <button
                  className={`btn ${!isAvailableEmail && 'invalid'}`}
                  onClick={() => checkEmail(values.email, errors, values)}
                >
                  중복확인
                </button>
                <FormField
                  label="비밀번호"
                  placeholder="문자, 숫자, 특수문자를 모두 포함시켜주세요."
                  name="password"
                  type="password"
                  errors={errors}
                  touched={touched}
                  values={values}
                />
                <FormField
                  label="비밀번호 확인"
                  placeholder="비밀번호를 한번 더 입력해주세요."
                  name="passwordCheck"
                  type="password"
                  errors={errors}
                  touched={touched}
                />
                <div className="individual-info-box">
                  <h2 className="text-xs-left">개인정보 입력</h2>
                  <FormField
                    label="닉네임"
                    placeholder="닉네임을 입력해주세요."
                    name="nickname"
                    type="text"
                    errors={errors}
                    touched={touched}
                  />
                  <button
                    className={`btn ${!isAvailableNickname && 'invalid'}`}
                    onClick={() =>
                      checkNickName(values.nickname, errors, values)
                    }
                  >
                    중복확인
                  </button>
                  <FormField
                    label="휴대폰 번호"
                    placeholder="‘-’ 없이 입력해주세요"
                    name="phoneNumber"
                    type="text"
                    errors={errors}
                    touched={touched}
                  />
                  <FormField
                    label="생년월일"
                    placeholder="YYYYMMDD"
                    name="birthDate"
                    type="text"
                    errors={errors}
                    touched={touched}
                  />
                  <div
                    className="gender-radio"
                    role="group"
                    aria-labelledby="my-radio-group"
                  >
                    성별
                    <br />
                    <Field
                      type="radio"
                      name="gender"
                      value="male"
                      onKeyPress={handleKeyUp}
                    />
                    남성
                    <Field
                      type="radio"
                      name="gender"
                      value="female"
                      onKeyPress={handleKeyUp}
                    />
                    여성
                    <Field
                      type="radio"
                      name="gender"
                      value="none"
                      onKeyPress={handleKeyUp}
                    />
                    선택하지 않음
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="invalid-gender"
                  />
                  <FormField
                    label="주소"
                    placeholder="주소를 입력해주세요."
                    name="address"
                    type="text"
                    errors={errors}
                    touched={touched}
                    value={address}
                    disabled
                  />
                  <FormField
                    label={null}
                    placeholder="상세 주소를 입력해주세요."
                    name="detailAddress"
                    type="text"
                    errors={errors}
                    touched={touched}
                  />
                  {visible ? (
                    <div>
                      <button className="btn" onClick={handleButtonClick}>
                        닫기
                      </button>
                      <DaumPostcodeEmbed
                        className="address"
                        onComplete={handleComplete}
                      />
                    </div>
                  ) : (
                    <button className="btn" onClick={handleButtonClick}>
                      주소 검색
                    </button>
                  )}
                </div>

                <div className="form-group">
                  <button
                    type="button"
                    onClick={() => handleRegister(values, errors)}
                    className="btn btn-lg btn-primary pull-xs-right"
                  >
                    <span>회원가입</span>
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
