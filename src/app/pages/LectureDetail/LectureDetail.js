import React, { useState, useEffect } from 'react';
import LECTURE_DETAIL_DATA from 'app/data/lectureDetailData';
import { Link } from 'react-router-dom';
import 'app/pages/LectureDetail/LectureDetail.css';

const LectureDetail = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(LECTURE_DETAIL_DATA);
  }, []);
  // const { authorId, authorImage, title, desc, authorName, createdAt } = data;

  return (
    // <div className="article-page">
    //   <div className={css.banner}>
    //     <div className={css['lecture-container']}>
    //       <div className={css['profile-box']}>
    //         <img
    //           className={css['author-profile-img']}
    //           src={authorImage}
    //           alt="강사 프로필 사진"
    //         />
    //         <div className={css['author-box']}>
    //           <div className={css.author}>{authorName}</div>
    //           <div className={css.date}>{createdAt}</div>
    //         </div>
    //       </div>
    //       <div className={css.title}>{title}</div>
    //     </div>
    //   </div>
    //   <div className={css.desc}>{desc}</div>
    //   <hr />
    // </div>

    <div className="edu_box">
      <div className="edu_wrap">
        <div className="quick_box">
          <button className="btn_r--sd text_icon">
            <span className="material-icons icon_g"></span>
            일정 등록하기
          </button>
          <button className="btn_r--sd mono_icon">
            <span className="material-icons">share</span>
          </button>
          <button className="btn_r--sd mono_icon">
            <span className="material-icons q_active">grade</span>
          </button>
        </div>
        <div className="tittle">
          <div className="img_area"></div>
          <div className="text_box">
            <div className="tit_top">
              <p className="made_name"> 백기선</p>
              <p className="user_visitor"> 맘에 들어요👍 + 9,999 </p>
            </div>
            <div className="tit_middle">
              <h1>
                마이크로소프트 개발자가 알려주는 자바 스프링(Spring) 완전 정복
              </h1>
              <p>
                마이크로소프트 개발자가 알려주는 자바스프링(Spring) 완전 정복을
                위해서 작성하는 웹페이지 디자인 최대한 몇글자
              </p>
            </div>
            <div className="tit_bottom">
              <ul>
                <li className="edu_tag--r">Java</li>
                <li className="edu_tag--r">Spring</li>
                <li className="edu_tag--r">Spring Boot</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="contents">
          <img src="/images/dumidumi.jpg" />
        </div>
      </div>
    </div>
  );
};

export default LectureDetail;
