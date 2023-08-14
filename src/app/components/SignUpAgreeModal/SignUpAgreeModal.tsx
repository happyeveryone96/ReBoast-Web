import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import css from 'app/components/SignUpAgreeModal/SignUpAgreeModal.module.css';
import { useNavigate } from 'react-router-dom';
import { set } from 'immer/dist/internal';

interface SignUpModalProps {
  isOpen: boolean;
  close: () => void;
}

const SignUpAgreeModal: React.FC<SignUpModalProps> = ({ isOpen, close }) => {
  const navigate = useNavigate();

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isFirstOptionChecked, setIsFirstOptionChecked] = useState(false);
  const [isSecondOptionChecked, setIsSecondOptionChecked] = useState(false);
  const [isThirdOptionChecked, setIsThirdOptionChecked] = useState(false);
  const [isFourthOptionChecked, setIsFourthOptionChecked] = useState(false);

  const handleCheckBox = (option: string) => {
    if (option !== 'all') {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      if (selectedOptions.length === 4) {
        setSelectedOptions([]);
      } else {
        setSelectedOptions(['option1', 'option2', 'option3', 'option4']);
      }
    }

    if (
      option !== 'all' &&
      !selectedOptions.includes(option) &&
      selectedOptions.length === 3
    ) {
      setIsCheckedAll(true);
    }

    if (option !== 'all' && selectedOptions.length === 4) {
      setIsCheckedAll(false);
    }

    if (option === 'option1') {
      setIsFirstOptionChecked(!isFirstOptionChecked);
    } else if (option === 'option2') {
      setIsSecondOptionChecked(!isSecondOptionChecked);
    } else if (option === 'option3') {
      setIsThirdOptionChecked(!isThirdOptionChecked);
    } else if (option === 'option4') {
      setIsFourthOptionChecked(!isFourthOptionChecked);
    } else if (option === 'all' && selectedOptions.length !== 4) {
      setIsCheckedAll(true);
      setIsFirstOptionChecked(true);
      setIsSecondOptionChecked(true);
      setIsThirdOptionChecked(true);
      setIsFourthOptionChecked(true);
    } else if (option === 'all' && selectedOptions.length === 4) {
      setIsCheckedAll(false);
      setIsFirstOptionChecked(false);
      setIsSecondOptionChecked(false);
      setIsThirdOptionChecked(false);
      setIsFourthOptionChecked(false);
    }
  };

  const resetAgreeOption = () => {
    setIsCheckedAll(false);
    setSelectedOptions([]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFirstOptionChecked && isSecondOptionChecked && isThirdOptionChecked) {
      close();
      resetAgreeOption();
      navigate('/register');
    } else {
      alert('필수 항목에 동의해주세요.');
    }
  };

  return (
    <>
      {isOpen ? (
        <div className={css.modal}>
          <div className={css['register-modal']}>
            <div className={css['modal-contents']}>
              <form onSubmit={handleSubmit} className={css['agree-form']}>
                <div className={css['register-agree']}>
                  회원가입 <br />
                  <span className={css['agree']}>개인정보동의</span>
                </div>
                <div className={css['agree-box']}>
                  <img
                    src="/images/unchecked.png"
                    alt="Unchecked"
                    className={
                      css[`${isCheckedAll === true ? 'none' : 'checkbox'}`]
                    }
                    onClick={() => handleCheckBox('all')}
                  />
                  <img
                    src="/images/checked.png"
                    alt="Checked"
                    className={
                      css[`${isCheckedAll === false ? 'none' : 'checkbox'}`]
                    }
                    onClick={() => handleCheckBox('all')}
                  />
                  약관 전체 동의하기
                </div>
                <div className={css['modal-line']}></div>
                <div className={css['agree-box']}>
                  <img
                    src="/images/unchecked.png"
                    alt="Unchecked"
                    className={
                      css[
                        `${isFirstOptionChecked === true ? 'none' : 'checkbox'}`
                      ]
                    }
                    onClick={() => handleCheckBox('option1')}
                  />
                  <img
                    src="/images/checked.png"
                    alt="Checked"
                    className={
                      css[
                        `${
                          isFirstOptionChecked === false ? 'none' : 'checkbox'
                        }`
                      ]
                    }
                    onClick={() => handleCheckBox('option1')}
                  />
                  14세 미만 회원가입 (필수)
                </div>
                <div className={css['agree-box']}>
                  <img
                    src="/images/unchecked.png"
                    alt="Unchecked"
                    className={
                      css[
                        `${
                          isSecondOptionChecked === true ? 'none' : 'checkbox'
                        }`
                      ]
                    }
                    onClick={() => handleCheckBox('option2')}
                  />
                  <img
                    src="/images/checked.png"
                    alt="Checked"
                    className={
                      css[
                        `${
                          isSecondOptionChecked === false ? 'none' : 'checkbox'
                        }`
                      ]
                    }
                    onClick={() => handleCheckBox('option2')}
                  />
                  이용약관 동의(필수)
                </div>
                <div className={css['agree-box']}>
                  <img
                    src="/images/unchecked.png"
                    alt="Unchecked"
                    className={
                      css[
                        `${isThirdOptionChecked === true ? 'none' : 'checkbox'}`
                      ]
                    }
                    onClick={() => handleCheckBox('option3')}
                  />
                  <img
                    src="/images/checked.png"
                    alt="Checked"
                    className={
                      css[
                        `${
                          isThirdOptionChecked === false ? 'none' : 'checkbox'
                        }`
                      ]
                    }
                    onClick={() => handleCheckBox('option3')}
                  />
                  개인정보 수집 및 이용동의(필수)
                </div>
                <div className={css['agree-box']}>
                  <img
                    src="/images/unchecked.png"
                    alt="Unchecked"
                    className={
                      css[
                        `${
                          isFourthOptionChecked === true ? 'none' : 'checkbox'
                        }`
                      ]
                    }
                    onClick={() => handleCheckBox('option4')}
                  />
                  <img
                    src="/images/checked.png"
                    alt="Checked"
                    className={
                      css[
                        `${
                          isFourthOptionChecked === false ? 'none' : 'checkbox'
                        }`
                      ]
                    }
                    onClick={() => handleCheckBox('option4')}
                  />
                  E-mail 및 SMS 광고성 정보 수신동의(선택)
                </div>
                <div className={css['btn-box']}>
                  <button className={css['register-btn']} type="submit">
                    회원가입하기
                  </button>
                  <button className={css.cancel} onClick={close}>
                    취소하기
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SignUpAgreeModal;
