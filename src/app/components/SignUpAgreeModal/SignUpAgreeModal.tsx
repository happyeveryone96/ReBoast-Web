import React, { useState, ChangeEvent, FormEvent } from 'react';
import 'app/components/SignUpAgreeModal/SignUpAgreeModal.css';
import { useNavigate } from 'react-router-dom';

interface SignUpModalProps {
  isOpen: boolean;
  close: () => void;
}

const SignUpAgreeModal: React.FC<SignUpModalProps> = ({ isOpen, close }) => {
  const navigate = useNavigate();

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const optionValue = event.target.value;
    if (selectedOptions.length === 4) {
      setIsCheckedAll(false);
    }

    if (selectedOptions.includes(optionValue)) {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== optionValue),
      );
    } else {
      setSelectedOptions([...selectedOptions, optionValue]);
    }
  };

  const handleCheckboxChange = () => {
    setIsCheckedAll(!isCheckedAll);

    if (selectedOptions.length === 4) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(['option1', 'option2', 'option3', 'option4']);
    }
  };

  const resetAgreeOption = () => {
    setIsCheckedAll(false);
    setSelectedOptions([]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      selectedOptions.includes('option1') &&
      selectedOptions.includes('option2') &&
      selectedOptions.includes('option3')
    ) {
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
        <div className="modal">
          <div className="register-modal">
            <div className="modal-contents">
              <form onSubmit={handleSubmit} className="agree-form">
                <div className="register-agree">
                  회원가입 <br />
                  <span className="agree">개인정보동의</span>
                </div>
                <div className="agree-box">
                  <input
                    type="checkbox"
                    checked={isCheckedAll}
                    onChange={handleCheckboxChange}
                  />
                  약관 전체 동의하기
                </div>
                <div className="modal-line"></div>
                <div className="agree-box">
                  <input
                    type="checkbox"
                    value="option1"
                    checked={selectedOptions.includes('option1')}
                    onChange={handleOptionChange}
                  />
                  14세 미만 회원가입 (필수)
                </div>
                <div className="agree-box">
                  <input
                    type="checkbox"
                    value="option2"
                    checked={selectedOptions.includes('option2')}
                    onChange={handleOptionChange}
                  />
                  이용약관 동의(필수)
                </div>
                <div className="agree-box">
                  <input
                    type="checkbox"
                    value="option3"
                    checked={selectedOptions.includes('option3')}
                    onChange={handleOptionChange}
                  />
                  개인정보 수집 및 이용동의(필수)
                </div>
                <div className="agree-box">
                  <input
                    type="checkbox"
                    value="option4"
                    checked={selectedOptions.includes('option4')}
                    onChange={handleOptionChange}
                  />
                  E-mail 및 SMS 광고성 정보 수신동의(선택)
                </div>
                <div className="btn-box">
                  <button
                    className="register-btn"
                    type="submit"
                    // disabled={!isChecked || selectedOptions.length === 0}
                  >
                    회원가입하기
                  </button>
                  <button className="cancel" onClick={close}>
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
