import React, { useState } from 'react';
import css from 'app/components/CategoryToggle/CategoryToggle.module.css';

interface CategoryToggleType {
  category: string;
  subCategory: string[];
}

const CategoryToggle = (props: CategoryToggleType) => {
  const { category, subCategory } = props;
  const [isToggleOpened, setIsToggleOpened] = useState(false);

  return (
    <>
      <div
        className={css.category}
        onClick={() => setIsToggleOpened(!isToggleOpened)}
      >
        {category}
        {isToggleOpened ? (
          <img className={css.toggle} src="/images/down.png" alt="토글" />
        ) : (
          <img className={css.toggle} src="/images/right.png" alt="토글" />
        )}
      </div>
      {isToggleOpened && (
        <>
          <div className={css['all-category']}>ALL</div>
          {subCategory.map((category) => (
            <div key={category} className={css['sub-category']}>
              {category}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default CategoryToggle;
