import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; // CSS 파일

const MainPage = () => {
  return (
    <div className="main-page">
      <nav className="navbar">
        <Link to="/signup" className="signup-link">Sign Up</Link> {/* Sign Up 링크 추가 */}
        <Link to="/signin" className="signip-link">Sign In</Link> {/* Sign In 링크 추가 */}
      </nav>
      <div className="body-part">
        <img src="human.png" alt="Human Body" className="body-image" />
        <Link to="/arms" className="arm-link">팔</Link>
        <Link to="/abs" className="abs-link">배</Link>
        <Link to="/legs" className="leg-link">하체</Link>
      </div>
    </div>
  );
};

export default MainPage;
