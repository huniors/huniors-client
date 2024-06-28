import React, { useEffect, useState } from 'react';
import './BodyPage.css'; // CSS 파일 임포트

const videos = [
  { id: 'LZWORB39zQk', title: '운동 영상 1' },
  { id: 'dpBYYEhdofI', title: '운동 영상 2' },
  { id: 'Al46E7jJWx0', title: '운동 영상 3' },
  { id: 'OKyuFF3uh5o', title: '운동 영상 4' }
];

const LegsPage = () => {
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
        <img src="/images/LegsPage.png" alt="Legs Exercise" className="exercise-image" />
      </div>
      <h1 className='title'>다리</h1>
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

export default LegsPage;
