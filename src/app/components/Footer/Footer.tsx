import React, { ChangeEvent, useState } from 'react';
import 'app/components/Footer/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const showAlert = () => {
    alert('준비중 입니다.');
  };

  const goToSite = (url: string) => {
    window.location.href = url;
  };

  const [site, setSite] = useState('');

  const onChangeSite = (e: ChangeEvent<HTMLSelectElement>) => {
    setSite(e.target.value);
  };

  return (
    <footer className="footer">
      <div className="footerWrap">
        <div className="footer_inner">
          <div className="footer_left">
            <div className="footer_topTxt">
              <Link to="" className="txt_blue" onClick={showAlert}>
                개인정보처리방침
              </Link>
              <Link to="" onClick={showAlert}>
                사이트맵
              </Link>
              <Link to="" onClick={showAlert}>
                웹접근성정책
              </Link>
              <Link to="" onClick={showAlert}>
                뷰어모음 다운로드
              </Link>
            </div>
            <div className="footer_botTxt">
              <p className="address">
                14786 경기 부천시 양지로 229 골든IT타워 826호 데이터스
              </p>
              <p className="copyright">copyright @ </p>
            </div>
          </div>
          <div className="footer_right">
            <div className="site_list">
              <select id="fruit" name="fruit" onChange={onChangeSite}>
                <option value="https://re-boast-web.vercel.app/">
                  관련사이트
                </option>
                <option value="http://www.dataus.co.kr/">DataUs</option>
              </select>
              <button type="button" onClick={() => goToSite(site)}>
                이동
              </button>
            </div>
            <div className="logo_list">
              <a href="http://www.dataus.co.kr/">
                <img
                  src="https://github.com/yoonhyochang/yoonhyochang/blob/main/%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%8A%A4.png?raw=true"
                  alt=""
                />
              </a>
              <a href="https://re-boast-web.vercel.app/">
                <img src="https://github.com/yoonhyochang/yoonhyochang/blob/main/%EB%A6%AC%EB%B6%80%EC%8A%A4%ED%8A%B8.png?raw=true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
