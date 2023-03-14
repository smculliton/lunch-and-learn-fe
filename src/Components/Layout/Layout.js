import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

import background from '../../images/bg-image.jpg' 

function Layout() {
  return (
    <> 
      <Header />
      <div 
        style={{ backgroundImage: `linear-gradient(to bottom, transparent 0%, #000000bd 70%, #000000 95%), url(${background})`,
          backgroundSize: 'cover',
          // backgroundAttachment: 'fixed',
          height: '90vh'
        }}
      >
        <Outlet />
      </div>
    </>
  )
}

export default Layout