import React, { useState } from 'react';
import css from 'app/components/CategorySideBar/CategorySideBar.module.css';

const CategorySideBar = () => {
  const [isFoundedOpened, setIsFoundedOpened] = useState(false);
  const [isEmploymentOpened, setIsEmploymentOpened] = useState(false);
  const [isHobbyOpened, setIsHobbyOpened] = useState(false);
  const [isLearningOpened, setIsLearningOpened] = useState(false);

  return (
    <div className={css.container}>
      <div className={css.all}>전체 강의</div>
      <div
        className={css.founded}
        onClick={() => setIsFoundedOpened(!isFoundedOpened)}
      >
        창업
        {isFoundedOpened ? (
          <img className={css.toggle} src="/images/down.png" alt="토글" />
        ) : (
          <img className={css.toggle} src="/images/right.png" alt="토글" />
        )}
      </div>
      {isFoundedOpened && (
        <>
          <div className={css['all-category']}>ALL</div>
          <div className={css['sub-category']}>코파운더</div>
          <div className={css['sub-category']}>파운더</div>
        </>
      )}
      <div
        className={css.employment}
        onClick={() => setIsEmploymentOpened(!isEmploymentOpened)}
      >
        취업
        {isEmploymentOpened ? (
          <img className={css.toggle} src="/images/down.png" alt="토글" />
        ) : (
          <img className={css.toggle} src="/images/right.png" alt="토글" />
        )}
      </div>
      {isEmploymentOpened && (
        <>
          <div className={css['all-category']}>ALL</div>
          <div className={css['sub-category']}>서비스업</div>
          <div className={css['sub-category']}>금융업</div>
        </>
      )}
      <div
        className={css.hobby}
        onClick={() => setIsHobbyOpened(!isHobbyOpened)}
      >
        취미
        {isHobbyOpened ? (
          <img className={css.toggle} src="/images/down.png" alt="토글" />
        ) : (
          <img className={css.toggle} src="/images/right.png" alt="토글" />
        )}
      </div>
      {isHobbyOpened && (
        <>
          <div className={css['all-category']}>ALL</div>
          <div className={css['sub-category']}>음악</div>
          <div className={css['sub-category']}>미술</div>
          <div className={css['sub-category']}>체육</div>
        </>
      )}
      <div
        className={css.learning}
        onClick={() => setIsLearningOpened(!isLearningOpened)}
      >
        학습
        {isLearningOpened ? (
          <img className={css.toggle} src="/images/down.png" alt="토글" />
        ) : (
          <img className={css.toggle} src="/images/right.png" alt="토글" />
        )}
      </div>
      {isLearningOpened && (
        <>
          <div className={css['all-category']}>ALL</div>
          <div className={css['sub-category']}>국어</div>
          <div className={css['sub-category']}>영어</div>
          <div className={css['sub-category']}>수학</div>
        </>
      )}
    </div>
  );
};

export default CategorySideBar;
