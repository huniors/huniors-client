import React from 'react';
import './BodyPage.css'; // CSS 파일 임포트

const AbsPage = () => {
  return (
    <div className="body-page-container">
      <div className="image-container">
        <img src="/images/abs.png" alt="abs Exercise" className="exercise-image" />
      </div>
      <div className="content-container">
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/QSZ0mUGO_CA?si=ZRS6X5Giq-VqPSYc"
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
            src="https://www.youtube.com/embed/mVsORhCxNL0?si=15s-z-cZwxg1N2ip"
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
            src="https://www.youtube.com/embed/2G_P1Y9UG0Q?si=-RW0kgM2ghXnal-A"
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
            src="https://www.youtube.com/embed/3JaMsw1cqcU?si=JF_X62qTV5N3pvoj"
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

export default AbsPage;
