import React, { useState, Dispatch, SetStateAction } from 'react';
import css from 'app/components/CategorySideBar/CategorySideBar.module.css';
import CategoryToggle from 'app/components/CategoryToggle/CategoryToggle';
import useWindowSize from 'app/hooks/useWindowSize';

interface CategorySideBarType {
  setCategory: Dispatch<SetStateAction<string | null>>;
  setSubCategory: Dispatch<SetStateAction<string | null>>;
}

const CategorySideBar = (props: CategorySideBarType) => {
  const { setCategory, setSubCategory } = props;
  const { width } = useWindowSize();
  const isTabletMobile = width < 1024;

  return (
    <div className={isTabletMobile ? css.container : css['desktop-container']}>
      <div className={css.all}>전체 강의</div>
      <CategoryToggle
        category={'창업'}
        subCategory={['코파운더', '파운더']}
        setCategory={setCategory}
        setSubCategory={setSubCategory}
      />
      <CategoryToggle
        category={'취업'}
        subCategory={['개발자']}
        setCategory={setCategory}
        setSubCategory={setSubCategory}
      />
      <CategoryToggle
        category={'취미'}
        subCategory={['음악', '미술', '체육']}
        setCategory={setCategory}
        setSubCategory={setSubCategory}
      />
      <CategoryToggle
        category={'학습'}
        subCategory={['초·중·고', '대학']}
        setCategory={setCategory}
        setSubCategory={setSubCategory}
      />
    </div>
  );
};

export default CategorySideBar;
