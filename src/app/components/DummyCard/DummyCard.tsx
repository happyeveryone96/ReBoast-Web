import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'app/components/DummyCard/DummyCard.css';

interface CardType {
  card: {
    id: number;
    category: string;
    author: string;
    rateCount: number;
    image: string;
    title: string;
    content: string;
    rate: number;
    tags: string[];
  };
}

const DummyCard = (props: CardType) => {
  const [showAllTags, setShowAllTags] = useState(false);
  const { id, category, author, rateCount, image, title, content, rate, tags } =
    props.card;
  const isMoreThanTwo = tags.length > 3;
  const moreTagsNum = tags.length - 3;

  return (
    <div className="card" title={title}>
      <Link to={`/lecture/${id}`} className="preview-link">
        <img src={image} className="card-img-top" alt="강의 샘플 이미지" />
        <div className="card-body">
          <h5 className="card-title">
            <span className="category">[{category}]</span>
            {title}
          </h5>
          <div className="rate-box">
            <img src="/images/rate.png" alt="평점" className="rate-img" />
            <div className="rate-text">
              {rate.toFixed(1)}
              <span className="rate-count">({rateCount})</span>
            </div>
            <img
              src="/images/middle-line.png"
              alt="구분선"
              className="middle-line"
            />
            <div className="author-name">{author}</div>
          </div>
          {/* <p className="card-text">{content}</p> */}
        </div>
      </Link>
      <div className="tags">
        {showAllTags
          ? tags.map((tag) => (
              <div key={tag} className="lecture-tag">
                {tag}
              </div>
            ))
          : tags.slice(0, 3).map((tag) => (
              <div key={tag} className="lecture-tag">
                {tag}
              </div>
            ))}
        {isMoreThanTwo && (
          <div className="more-tag-container">
            <div
              className="more-tag-btn"
              onClick={() => setShowAllTags(!showAllTags)}
            >
              {!showAllTags && '+' + moreTagsNum}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DummyCard;
