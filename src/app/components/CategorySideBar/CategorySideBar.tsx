import React, { useState } from 'react';
import css from 'app/components/CategorySideBar/CategorySideBar.module.css';
import CategoryToggle from 'app/components/CategoryToggle/CategoryToggle';

const CategorySideBar = () => {
  return (
    <div className={css.container}>
      <div className={css.all}>전체 강의</div>
      <CategoryToggle category={'창업'} subCategory={['코파운더', '파운더']} />
      <CategoryToggle category={'취업'} subCategory={['서비스업', '금융업']} />
      <CategoryToggle
        category={'취미'}
        subCategory={['음악', '미술', '체육']}
      />
      <CategoryToggle
        category={'학습'}
        subCategory={['국어', '영어', '수학']}
      />
    </div>
  );
};

export default CategorySideBar;
