import React, { useEffect } from 'react';
import './BodyPage.css'; // CSS 파일 임포트

const ArmsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 최상단으로 스크롤
  }, []);

  return (
    <div className="body-page-container">
      {/* body-image-container */}
      <div className="body-image-container">
        <img src="/images/ArmsPage.png" alt="Arms Exercise" className="exercise-image" />
      </div>
      <h1 className='title'>팔</h1>
      <hr/>
      {/* content-container */}
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
      <div className="content-container">
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/R2-QUEff8NY?si=DIzSkRFfhNDeLExG"
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
            src="https://www.youtube.com/embed/eRpPqnmb0PM?si=kCtf0dT8VNslgsYF"
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
