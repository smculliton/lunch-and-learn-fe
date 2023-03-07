import { Route, Routes } from 'react-router-dom'

import React from 'react'
// import './App.css';

import Layout from '../Layout/Layout'
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage/SearchPage';

function App() {
  return (  
  <Routes>
    <Route path='/' element={<Layout />} >
      <Route path='/' element={<HomePage />} />
      <Route path='/search/:keyword' element={<SearchPage />} />
    </Route>
  </Routes>
  )
}

export default App;
