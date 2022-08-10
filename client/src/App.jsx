/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './page/HomePage';
import PreorderPage from './page/PreorderPage';
import OrderDetailsPage from './page/OrderDetailsPage';
import NotFound from './page/NotFound';
import HeaderBar from './component/HeaderBar';

export default function App() {
  return (
    <>
      <HeaderBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preorders" element={<PreorderPage />} />
          <Route path="/orderdetails" element={<OrderDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
