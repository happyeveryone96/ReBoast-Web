import React from 'react';
import { Link } from 'react-router-dom';
import 'app/components/DummyCard/DummyCard.css';

const DummyCard = () => {
  return (
    <div className="card">
      <Link to={'/lecture/1'} className="preview-link">
        <img
          src="/images/lectureSampleImage.png"
          className="card-img-top"
          alt="강의 샘플 이미지"
        />
        <div className="card-body">
          <div className="rate-box">
            <img src="/images/rate.png" alt="평점" className="rate-img" />
            <div className="rate-text">4.0</div>
          </div>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default DummyCard;
