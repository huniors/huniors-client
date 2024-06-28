import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ onGetStarted }) => {
  return (
    <div>
      <h1>우리의 웹서비스를 소개합니다</h1>
      <p>여기에 서비스 설명을 작성합니다.</p>
      <button onClick={onGetStarted}>Get Started</button>
    </div>
  );
};

export default Home;
