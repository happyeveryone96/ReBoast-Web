import React, { useState } from 'react';
import css from 'app/components/CategorySideBar/CategorySideBar.module.css';
import CategoryToggle from 'app/components/CategoryToggle/CategoryToggle';
import useWindowSize from 'app/hooks/useWindowSize';

const CategorySideBar = () => {
  const { width } = useWindowSize();
  const isTabletMobile = width < 1024;

  return (
    <div className={isTabletMobile ? css.container : css['desktop-container']}>
      <div className={css.all}>전체 강의</div>
      <CategoryToggle category={'창업'} subCategory={['코파운더', '파운더']} />
      <CategoryToggle category={'취업'} subCategory={['개발자']} />
      <CategoryToggle
        category={'취미'}
        subCategory={['음악', '미술', '체육']}
      />
      <CategoryToggle category={'학습'} subCategory={['초·중·고', '대학']} />
    </div>
  );
};

export default CategorySideBar;
