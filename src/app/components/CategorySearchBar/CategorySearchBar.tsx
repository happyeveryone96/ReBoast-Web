import React, { useEffect, useState } from 'react';
import css from 'app/components/CategorySearchBar/CategorySearchBar.module.css';
import CategoryTag from 'app/components/CategoryTag/CategoryTag';
import CATEGORY_TAG_DATA from 'app/data/categoryTagData';

interface CategoryTagType {
  id: number;
  categoryTag: string;
}

const CategorySearchBar = () => {
  const [data, setData] = useState<CategoryTagType[]>([]);

  useEffect(() => {
    setData(CATEGORY_TAG_DATA);
  }, []);

  return (
    <div className={css['menubar-container']}>
      <div className={css.header}>
        <span className={css.all}>전체 강의</span>
        <span className={css.divider}>/</span>
        <span className={css.category}>창업</span>
      </div>
      <div className={css['top-menu-bar']}>
        <div className={css.step}>창업단계</div>
        <select className={css['step-select']}>
          <option value="select">선택해주세요</option>
          <option value="spare">예비</option>
          <option value="founded">창업</option>
          <option value="growth">성장</option>
          <option value="all">All</option>
        </select>
        <div className={css.interests}>관심분야</div>
        <select className={css['interests-select']}>
          <option value="select">선택해주세요</option>
          <option value="commercialization">사업화</option>
          <option value="technology-development">기술개발 (R&D)</option>
          <option value="facility-space-childcare">시설 · 공간 · 보육</option>
          <option
            value="
mentoring-consulting"
          >
            멘토링 · 컨설팅
          </option>
          <option value="global">글로벌</option>
          <option value="manpower">인력</option>
          <option value="loan">융자</option>
          <option
            value="
event-network"
          >
            행사 · 네트워크
          </option>
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
