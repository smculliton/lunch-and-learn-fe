import { Route, Routes } from 'react-router-dom'

import React from 'react'
// import './App.css';

import Header from '../Header/Header'
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage/SearchPage';

function App() {
  return (  
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/search/:keyword' element={<SearchPage />} />
  </Routes>
  )
}

export default App;
