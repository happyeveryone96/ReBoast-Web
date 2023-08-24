import React, { useState, useEffect } from 'react';
import UserService from 'app/services/user.service';
import Lecture from 'app/components/Lecture/Lecture';
import LECTURE_CARD_DATA from 'app/data/lectureCardData';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LectureCard from 'app/components/LectureCard/LectureCard.tsx';
import 'app/pages/LecturePage/LecturePage.css';
import CategorySearchBar from 'app/components/CategorySearchBar/CategorySearchBar.tsx';
import CategorySideBar from 'app/components/CategorySideBar/CategorySideBar.tsx';
import CATEGORY_DATA from 'app/data/categoryData.ts';

const LecturePage = () => {
  const accessToken = localStorage.getItem('accessToken');
  const userName = localStorage.getItem('username');

  const [category, setCategory] = useState('창업');
  const [subCategory, setSubCategory] = useState('ALL');

  const { isLoggedIn } = useSelector((state) => state.auth);

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(LECTURE_CARD_DATA);
  }, []);

  useEffect(() => {
    if (accessToken && isLoggedIn) {
      UserService.getUserProfile(accessToken)
        .then((response) => {
          if (response.status === 200) {
            const { username } = response.data;
            if (!userName) {
              localStorage.setItem('username', username);
            }
          }
        })
        .catch(() => {
          window.location.reload();
        });
    }
  }, [userName, accessToken, isLoggedIn]);

  const { state } = useLocation();
  const stateFilter = state?.filter;

  const [filter, setFilter] = useState('popularity');

  const filterByNewest = () => {
    setFilter('newest');
  };

  const filterByPopularity = () => {
    setFilter('popularity');
  };

  const filterByView = () => {
    setFilter('view');
  };

  const isNewest = filter === 'newest';
  const isByPopularity = filter === 'popularity';
  const isByView = filter === 'view';

  const convertToDate = (dateString) => new Date(dateString);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (stateFilter === 'new') {
      setFilter('newest');
    }
  }, []);

  return (
    <div className="home-page lecture-home-page">
      <CategorySideBar
        setCategory={setCategory}
        setSubCategory={setSubCategory}
      />
      <CategorySearchBar category={category} subCategory={subCategory} />
      <div className="filter">
        <div
          className={`by-popularity ${isByPopularity && 'selected'}`}
          onClick={filterByPopularity}
        >
          인기순
        </div>
        <div
          className={`newest ${isNewest && 'selected'}`}
          onClick={filterByNewest}
        >
          최신순
        </div>

        <div
          className={`by-view ${isByView && 'selected'}`}
          onClick={filterByView}
        >
          조회순
        </div>
      </div>
      <div className="card-deck lecture-card-deck">
        {isByPopularity &&
          [...data]
            .sort((a, b) => b.rate - a.rate)
            .map((card) => <LectureCard key={card.id} card={card} />)}
        {isNewest &&
          [...data]
            .sort((a, b) => convertToDate(b.date) - convertToDate(a.date))
            .map((card) => <LectureCard key={card.id} card={card} />)}
        {isByView &&
          [...data]
            .sort((a, b) => b.viewCount - a.viewCount)
            .map((card) => <LectureCard key={card.id} card={card} />)}
      </div>
      {/* <Carousel
          nextIcon={<img src="/images/chevronRight.png" alt="다음 버튼" />}
          prevIcon={<img src="/images/chevronLeft.png" alt="이전 버튼" />}
        > */}
      {/* {slides.map((slide, index) => (
          <Carousel.Item key={index} className="carousel-item">
            <Row>
              {slide.map((card) => (
                <Col key={card.id} md={3} className="col">
                  <Card className="carousel-card">
                    <Card.Img
                      className="card-img"
                      variant="top"
                      src={card.image}
                      alt={card.title}
                    />
                    <Card.Body className="card-body">
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.content}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))} */}
      {/* </Carousel> */}
      {/* {data.map((lecture) => (
        <Lecture key={lecture.id} lecture={lecture} />
      ))} */}
    </div>
  );
};

export default LecturePage;
