import React from 'react';

const AbsPage = () => {
  return (
    <div>
      <h1>배 운동</h1>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=example1" target="_blank" rel="noopener noreferrer">
            배 운동 1
          </a>
          <p>배 운동 1에 대한 설명입니다.</p>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=example2" target="_blank" rel="noopener noreferrer">
            배 운동 2
          </a>
          <p>배 운동 2에 대한 설명입니다.</p>
        </li>
        {/* 추가 운동 링크와 설명 */}
      </ul>
    </div>
  );
};

export default AbsPage;
