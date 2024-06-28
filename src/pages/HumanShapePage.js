import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const HumanShapePage = () => {
  return (
    <div className="main-page">
      <div className="body-part">
        <img src="human.png" alt="Human Body" className="body-image" />
        <Link to="/arms" className="arm-link">팔</Link>
        <Link to="/abs" className="abs-link">배</Link>
        <Link to="/legs" className="leg-link">하체</Link>
      </div>
    </div>
  );
};

export default HumanShapePage;
