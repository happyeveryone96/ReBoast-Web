import React, { useState, useEffect } from 'react';
import LECTURE_DETAIL_DATA from 'app/data/lectureDetailData';
import { Link } from 'react-router-dom';
import css from 'app/pages/LectureDetail/LectureDetail.module.css';

const LectureDetail = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(LECTURE_DETAIL_DATA);
  }, []);
  const { authorId, authorImage, title, desc, authorName, createdAt } = data;

  return (
    <div className="article-page">
      <div className={css.banner}>
        <div className={css['lecture-container']}>
          <div className={css['profile-box']}>
            <img
              className={css['author-profile-img']}
              src={authorImage}
              alt="강사 프로필 사진"
            />
            <div className={css['author-box']}>
              <div className={css.author}>{authorName}</div>
              <div className={css.date}>{createdAt}</div>
            </div>
          </div>
          <div className={css.title}>{title}</div>
        </div>
      </div>
      <div className={css.desc}>{desc}</div>
      <hr />
    </div>
  );
};

export default LectureDetail;
