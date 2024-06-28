import React, { useState } from 'react';
//import './Introduction.css'; // CSS 파일 임포트
import HumanShape from './HumanShape.js';
import './Introduction.css';

const Introduction = () => {
  const [isStarted, setIsStarted] = useState(false);

  const onGetStarted = () => {
    setIsStarted(true);
  };


  if (isStarted) {
    return <HumanShape />;
  } else {
    return (
      <div className="introduction-container">
        <div className="image-container">
        <img src="/images/big_logo.png" alt="abs Exercise" className="exercise-image" />
      </div>
        <div className="introduction-content">
          <h1>우리의 웹서비스를 소개합니다</h1>
          <p>여기에 서비스 설명을 작성합니다.</p>
          <button onClick={onGetStarted}>Get Started</button>
        </div>
      </div>
    );
  }
  
};

export default Introduction;
