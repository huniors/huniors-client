import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ArmsPage from './pages/ArmsPage';
import AbsPage from './pages/AbsPage';
import LegsPage from './pages/LegsPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/arms" element={<ArmsPage />} />
        <Route path="/abs" element={<AbsPage />} />
        <Route path="/legs" element={<LegsPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
