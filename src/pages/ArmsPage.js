import React, { useState, useEffect } from 'react';
import './BodyPage.css'; // CSS 파일 임포트

const videos = [
  { id: 'ZDIIg4kvY-c', title: '운동 영상 1' },
  { id: 'JsF2nzetLBU', title: '운동 영상 2' },
  { id: 'R2-QUEff8NY', title: '운동 영상 3' },
  { id: 'eRpPqnmb0PM', title: '운동 영상 4' }
];

const ArmsPage = () => {
  
  const [likedVideos, setLikedVideos] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 최상단으로 스크롤
    const storedLikedVideos = JSON.parse(localStorage.getItem('likedVideos')) || [];
    setLikedVideos(storedLikedVideos);
  }, []);

  const toggleLike = (videoId) => {
    let updatedLikedVideos;
    if (likedVideos.includes(videoId)) {
      updatedLikedVideos = likedVideos.filter(id => id !== videoId);
    } else {
      updatedLikedVideos = [...likedVideos, videoId];
    }
    setLikedVideos(updatedLikedVideos);
    localStorage.setItem('likedVideos', JSON.stringify(updatedLikedVideos));
  };

  const isLiked = (videoId) => likedVideos.includes(videoId);

  return (
    <div className="body-page-container">
      <div className="body-image-container">
        <img src="/images/ArmsPage.png" alt="Arms Exercise" className="exercise-image" />
      </div>
    <h1 className='title'>팔</h1>
    <hr />
      {videos.map(video => (
        <div className="content-container" key={video.id}>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="description-container">
            <p>{video.title}</p>
            <button onClick={() => toggleLike(video.id)}>
              {isLiked(video.id) ? '❤️' : '♡'}
            </button>
          </div>
        </div>
      ))}
    </div>
  ); 
};

export default ArmsPage;
