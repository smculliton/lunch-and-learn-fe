import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'

import background from '../../images/bg-image.jpg' 

function Layout() {
  return (
    <> 
      <Header />
      <NavBar />
      <div 
        style={{ backgroundImage: `linear-gradient(to bottom, transparent 0%, #000000bd 70%, #000000 95%), url(${background})`,
          backgroundSize: 'cover',
          height: '90vh',
        }}
      >
        <Outlet />
      </div>
    </>
  )
}

export default Layout