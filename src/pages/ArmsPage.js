import React from 'react';
import './ArmsPage.css'; // CSS 파일 임포트

const ArmsPage = () => {
  return (
    <div className="arms-page-container">
      <div className="image-container">
        <img src="/images/armsPelican.jpeg" alt="Arms Exercise" className="exercise-image" />
      </div>
      <div className="content-container">
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/ZDIIg4kvY-c?si=dw4ebCA0Q1cSuhlR" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <div className="description-container">
          <p>운동에 대한 설명입니다. 이곳에 운동에 대한 상세 설명을 작성하세요.</p>
        </div>
      </div>
      <div className="content-container">
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/JsF2nzetLBU?si=lh2Zv_6sQesCZ9kq" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <div className="description-container">
          <p>운동에 대한 설명입니다. 이곳에 운동에 대한 상세 설명을 작성하세요.</p>
        </div>
      </div>
    </div>
  );
};

export default ArmsPage;
