import React from 'react';
import 'app/components/ConsultingCard/ConsultingCard.css';
import { useLocation } from 'react-router-dom';

interface ConsultingCardType {
  profileImage: string;
  author: string;
  date: string;
  like: number;
  title: string;
  content: string;
  tags: string[];
}

const ConsultingCard = (props: ConsultingCardType) => {
  const { hash } = useLocation();
  const isExistTag = hash !== '';
  const tag = hash.split('tag/')[1];
  const { profileImage, author, date, like, title, content, tags } = props;
  const includeTag = tags.includes(tag);

  return (
    <div
      className={`article-preview ${
        isExistTag && !includeTag ? 'filtered-card' : null
      }`}
    >
      <div className="article-meta">
        <a href="#/profile/Anah Benešová">
          <img src={profileImage} />
        </a>

        <div className="info">
          <a className="author" href="#/profile/Anah Benešová">
            {author}
          </a>
          <span className="date">{date}</span>
        </div>

        <button className="btn btn-sm pull-xs-right btn-outline-primary">
          <i className="ion-heart"></i>
          <span className="counter"> {like} </span>
        </button>
      </div>

      <a
        className="preview-link"
        href="#/article/Try-to-transmit-the-HTTP-card-maybe-it-will-override-the-multi-byte-hard-drive!-120863"
      >
        <h1>{title}</h1>
        <p>{content}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {tags.map((tag, index) => (
            <li className="tag-default tag-pill tag-outline" key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </a>
    </div>
  );
};

export default ConsultingCard;
