import React from 'react';
import './BodyPage.css'; // CSS 파일 임포트

const AbsPage = () => {
  return (
    <div className="body-page-container">
      <div className="image-container">
        <img src="/images/legs.png" alt="abs Exercise" className="exercise-image" />
      </div>
      <div className="content-container">
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/LZWORB39zQk?si=ai921DiZCphagmsH"
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
            src="https://www.youtube.com/embed/dpBYYEhdofI?si=LMc7qiKzO_CesvXL"
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
            src="https://www.youtube.com/embed/Al46E7jJWx0?si=-_qSV1rnaperZZfB"
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
            src="https://www.youtube.com/embed/OKyuFF3uh5o?si=_xaLII_MYCJHPaMj"
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
