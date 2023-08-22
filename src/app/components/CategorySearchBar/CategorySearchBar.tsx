import React, { useEffect } from 'react';
import css from 'app/components/CategorySearchBar/CategorySearchBar.module.css';
import CATEGORY_DATA from 'app/data/categoryData';

interface CategorySearchBarType {
  category: string;
  subCategory: string;
}

const CategorySearchBar = (props: CategorySearchBarType) => {
  const { category, subCategory } = props;

  const filterData = () => {
    if (
      subCategory === 'ALL' ||
      subCategory === '코파운더' ||
      subCategory === '파운더'
    ) {
      return CATEGORY_DATA.filter((data) => data.category === 'foundation');
    } else if (subCategory === '개발자') {
      return CATEGORY_DATA.filter((data) => data.category === 'developer');
    }
    return [];
  };

  useEffect(() => {
    filterData();
  }, [subCategory]);

  const filteredSmallCategory = filterData()[0]?.smallCategory;
  const filteredSubCategory = filterData()[0]?.subCategory;

  return (
    <div className={css['menubar-container']}>
      <div className={css.header}>
        <span className={css.all}>{category}</span>
        <span className={css.divider}>/</span>
        <span className={css.category}>{subCategory}</span>
      </div>
      <div className={css['top-menu-bar']}>
        <div className={css.step}>창업단계</div>
        <select className={css['step-select']}>
          <option value="select">선택해주세요</option>
          {filteredSubCategory?.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>
        <div className={css.interests}>관심분야</div>
        <select className={css['interests-select']}>
          <option value="select">선택해주세요</option>
          {filteredSmallCategory?.map((small) => (
            <option key={small} value={small}>
              {small}
            </option>
          ))}
        </select>
        <button className={css.search}>검색하기</button>
      </div>
      <input className={css['search-input']} />

      {/* <div className={css['category-tags']}>
        {data.map((tag) => (
          <CategoryTag key={tag.id} categoryTag={tag.categoryTag} />
        ))}
      </div> */}
    </div>
  );
};

export default CategorySearchBar;
