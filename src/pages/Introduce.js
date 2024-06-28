import React from 'react';
import './Introduce.css'; // CSS 파일 임포트

const Introduce = ({ onGetStarted }) => {
  return (
    <div className="introduce-container">
      <div className="introduce-content">
        <h1>우리의 웹서비스를 소개합니다</h1>
        <p>여기에 서비스 설명을 작성합니다.</p>
        <button onClick={onGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default Introduce;
