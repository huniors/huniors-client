import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Introduce from './Introduce';
import HumanShapePage from './HumanShapePage';

const MainPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/login/check')
      .then(response => {
        setIsLoggedIn(response.data.isLoggedIn);
        setLoading(false);
      })
      .catch(error => {
        console.error('로그인 상태 확인 중 오류 발생:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isLoggedIn) {
    return <HumanShapePage />;
  }

  return <Introduce onGetStarted={() => setIsLoggedIn(true)} />;
};

export default MainPage;
