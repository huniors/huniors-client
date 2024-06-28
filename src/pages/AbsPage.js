import React, { useEffect, useState } from 'react';
import './BodyPage.css'; // CSS 파일 임포트

const videos = [
  { id: 'QSZ0mUGO_CA', title: '운동 영상 1' },
  { id: 'mVsORhCxNL0', title: '운동 영상 2' },
  { id: '2G_P1Y9UG0Q', title: '운동 영상 3' },
  { id: '3JaMsw1cqcU', title: '운동 영상 4' }
];

const AbsPage = () => {
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
        <img src="/images/AbsPage.png" alt="Abs Exercise" className="exercise-image" />
      </div>
      <h1 className='title'>배</h1>
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
            <button onClick={() => toggleLike(video.id)}>
              {isLiked(video.id) ? '❤️' : '♡'}
            </button>
            <p>{video.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AbsPage;
