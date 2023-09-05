import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import css from 'app/components/DetailFilterItem/DetailFilterItem.module.css';

interface DetailFilterItemProps {
  label: string;
  isReset: boolean;
  setIsReset: Dispatch<SetStateAction<boolean>>;
}

const DetailFilterItem: React.FC<DetailFilterItemProps> = ({
  label,
  isReset,
  setIsReset,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isReset) {
      setIsChecked(false);
      setIsReset(false);
    }
  }, [isReset]);

  return (
    <label className={css.field}>
      <img
        src="/images/unchecked.png"
        alt="Unchecked"
        className={`category-checkbox-image ${isChecked === true && 'none'}`}
        onClick={() => setIsChecked(!isChecked)}
      />
      <img
        src="/images/checked.png"
        alt="Checked"
        className={`category-checkbox-image ${isChecked === false && 'none'}`}
        onClick={() => setIsChecked(!isChecked)}
      />
      {label}
    </label>
  );
};

export default DetailFilterItem;
