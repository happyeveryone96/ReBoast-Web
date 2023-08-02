import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'app/components/DummyCard/DummyCard.css';

interface CardType {
  card: {
    id: number;
    image: string;
    title: string;
    content: string;
    rate: number;
    tags: string[];
  };
}

const DummyCard = (props: CardType) => {
  const [showAllTags, setShowAllTags] = useState(false);
  const { id, image, title, content, rate, tags } = props.card;
  const isMoreThanTwo = tags.length > 2;
  const moreTagsNum = tags.length - 2;

  return (
    <div className="card">
      <Link to={`/lecture/${id}`} className="preview-link">
        <img src={image} className="card-img-top" alt="강의 샘플 이미지" />
        <div className="card-body">
          <div className="rate-box">
            <img src="/images/rate.png" alt="평점" className="rate-img" />
            <div className="rate-text">{rate.toFixed(1)}</div>
          </div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
        </div>
      </Link>
      <div className="tags">
        {showAllTags
          ? tags.map((tag) => (
              <div key={tag} className="lecture-tag">
                {tag}
              </div>
            ))
          : tags.slice(0, 2).map((tag) => (
              <div key={tag} className="lecture-tag">
                {tag}
              </div>
            ))}
        {isMoreThanTwo && (
          <div
            className="more-tag-btn"
            onClick={() => setShowAllTags(!showAllTags)}
          >
            {!showAllTags && '+' + moreTagsNum}
          </div>
        )}
      </div>
    </div>
  );
};

export default DummyCard;
