import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  ChangeEvent,
  useState,
} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './DummyLoginModal.css';
import { clearMessage } from 'app/slices/message';
import FormField from '../FormField/FormField';
import { Form, Formik } from 'formik';
import { login, socialLogin } from 'app/slices/auth';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { AppDispatch } from 'app/store';

interface LoginModalProps {
  isOpen: boolean;
  setIsDummyLoggedIn: Dispatch<SetStateAction<boolean>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setSavedEmail: Dispatch<SetStateAction<string>>;
  close: () => void;
}

interface MessageType {
  message: {
    message: string;
  };
}

const DummyLoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  close,
  setIsDummyLoggedIn,
  setEmail,
  setSavedEmail,
}) => {
  const navigate = useNavigate();

  const searchParams = useLocation().search;
  const query = qs.parse(searchParams);
  const {
    accessToken: accessTokenFromSocialLogin,
    refreshToken: refreshTokenFromSocialLogin,
  } = query;

  const { message } = useSelector((state: MessageType) => state.message);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(clearMessage());
    if (query.accessToken) {
      localStorage.setItem('accessToken', accessTokenFromSocialLogin as string);
      localStorage.setItem(
        'refreshToken',
        refreshTokenFromSocialLogin as string,
      );
      dispatch(socialLogin(query.accessToken));
    }
  }, [
    dispatch,
    accessTokenFromSocialLogin,
    refreshTokenFromSocialLogin,
    query.accessToken,
  ]);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
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
        (value: string) => {
          const optionalSpeciesCount = [
            /[A-Z]/.test(value),
            /[a-z]/.test(value),
            /[\u3131-\uD79D]/.test(value),
          ].filter(Boolean).length;

          const essentialSpeciesCount = [
            /[@$!%*?&]/.test(value),
            /\d/.test(value),
          ].filter(Boolean).length;

          return optionalSpeciesCount >= 1 && essentialSpeciesCount === 2;
        },
      ),
  });

  const isObjectEmpty = (obj: any) => {
    return Object.keys(obj).length === 0;
  };

  const hasEmptyString = (obj: any) => {
    return Object.values(obj).some((value) => {
      return value === '';
    });
  };

  const [saveId, setSaveId] = useState(false);

  const handleLogin = (
    formValue: { email: string; password: string },
    errors: any,
  ) => {
    const { email, password } = formValue;
    console.log(email);
    if (saveId === true) localStorage.setItem('savedEmail', email);

    if (isObjectEmpty(errors) && !hasEmptyString(formValue)) {
      setEmail(email);
      setIsDummyLoggedIn(true);
      close();
      // dispatch(login({ email, password }))
      //   .unwrap()
      //   .then(() => {
      //     navigate('/');
      //     close();
      //   })
      //   .catch((err: any) => console.log(err));
    }
  };

  const readyAlert = () => {
    alert('준비중입니다.');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSaveId(event.target.checked);
  };

  const savedEmail = localStorage.getItem('savedEmail') || '';

  return (
    <>
      {isOpen ? (
        <div className="modal">
          <div className="loginModal">
            <span className="close" onClick={close}>
              &times;
            </span>
            <div className="modalContents">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                {({ values, errors, touched, setFieldValue }) => (
                  <Form>
                    <div className="login-container">
                      <h1>로그인하기</h1>
                      <FormField
                        placeholder="아이디"
                        name="email"
                        type="text"
                        errors={errors}
                        touched={touched}
                        savedEmail={savedEmail}
                        setFieldValue={setFieldValue}
                      />
                      <FormField
                        placeholder="비밀번호"
                        name="password"
                        type="password"
                        errors={errors}
                        touched={touched}
                        place="login"
                      />
                    </div>

                    <div className="loginMid">
                      <label className="saveId" htmlFor="hint">
                        <input
                          type="checkbox"
                          id="saveId"
                          onChange={handleChange}
                        />
                        아이디 저장
                      </label>
                      <div className="text-xs-center find">
                        <Link to="/findId" onClick={close}>
                          아이디 찾기
                        </Link>
                        <div className="middleLine">|</div>
                        <Link to="/findPw" onClick={close}>
                          비밀번호 찾기
                        </Link>
                      </div>
                    </div>

                    <div className="loginRegisterBox">
                      <button
                        onClick={() => handleLogin(values, errors)}
                        className="form-group btn btn-lg btn-primary pull-xs-right loginBtn"
                      >
                        <span>로그인하기</span>
                      </button>
                      <div className="register">
                        <Link to="/register" onClick={close}>
                          회원가입하기
                        </Link>
                      </div>
                    </div>

                    <div className="socialBox">
                      <div className="socialHeader">
                        <div className="line"></div>
                        <div className="socialText">간편 SNS 로그인하기</div>
                        <div className="line"></div>
                      </div>
                      <div className="kakao" onClick={readyAlert}>
                        <img
                          className="kakaoLogo"
                          src="/images/kakao.png"
                          alt="kakao Logo"
                        />
                        <div className="kakaoText">카카오로 시작하기</div>
                      </div>
                      <div className="google" onClick={readyAlert}>
                        <img
                          className="googleLogo"
                          src="/images/google.png"
                          alt="Google Logo"
                        />
                        <div className="googleText">Sign in with Google</div>
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
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DummyLoginModal;
