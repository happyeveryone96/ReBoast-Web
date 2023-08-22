import React, { useState } from 'react';
import css from 'app/components/CategoryToggle/CategoryToggle.module.css';
import useWindowSize from 'app/hooks/useWindowSize';

interface CategoryToggleType {
  category: string;
  subCategory: string[];
}

const CategoryToggle = (props: CategoryToggleType) => {
  const { category, subCategory } = props;
  const [isToggleOpened, setIsToggleOpened] = useState(false);

  const { width } = useWindowSize();
  const isTabletMobile = width < 1024;
  const isFoundation = category === '창업';

  return (
    <>
      <div
        className={css.category}
        onClick={() => setIsToggleOpened(!isToggleOpened)}
      >
        {category}
        {isToggleOpened ? (
          <img className={css.toggle} src="/images/up.png" alt="토글" />
        ) : (
          <img
            className={css.toggle}
            src={isTabletMobile ? '/images/down.png' : '/images/right.png'}
            alt="토글"
          />
        )}
      </div>
      {isToggleOpened && (
        <>
          {isFoundation && (
            <div
              className={css['all-category']}
              onClick={(e) =>
                console.log(category, e.currentTarget.textContent)
              }
            >
              ALL
            </div>
          )}
          {subCategory.map((category) => (
            <div
              key={category}
              className={css['sub-category']}
              onClick={(e) =>
                console.log(props.category, e.currentTarget.textContent)
              }
            >
              {category}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default CategoryToggle;
