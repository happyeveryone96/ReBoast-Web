import React from 'react';
import 'app/pages/Sitemap/Sitemap.css';
import { useNavigate } from 'react-router-dom';

const Sitemap = () => {
  const navigate = useNavigate();
  return (
    <div className="sitemap-container">
      <h1 className="sitemap">Sitemap</h1>
      <div className="page" onClick={() => navigate('/lecture')}>
        강의
      </div>
      <div className="page" onClick={() => navigate('/consulting')}>
        상담
      </div>
      <div className="page" onClick={() => navigate('/mentor')}>
        멘토
      </div>
      <div className="page" onClick={() => navigate('/settings')}>
        내정보
      </div>
      <div className="page" onClick={() => navigate('/findId')}>
        아이디 찾기
      </div>
      <div className="page" onClick={() => navigate('/findPw')}>
        비밀번호 찾기
      </div>
    </div>
  );
};

export default Sitemap;
