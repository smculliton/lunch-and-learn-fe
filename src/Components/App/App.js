import { Route, Routes } from 'react-router-dom'

import React from 'react'
// import './App.css';

import Layout from '../Layout/Layout'
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage/SearchPage';
import LearningPage from '../LearningPage/LearningPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import NotFound from '../NotFound/NotFound';

function App() {
  return (  
  <Routes>
    <Route path='/' element={<Layout />} >
      <Route path='/' element={<HomePage />} />
      <Route path='/search/:keyword' element={<SearchPage />} />
      <Route path='/country/:keyword' element={<LearningPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
  )
}

export default App;
