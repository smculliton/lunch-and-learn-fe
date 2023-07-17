import React from 'react'
import { Link } from 'react-router-dom'
import './_NavBar.css'

const NavBar = () => {
  return(
    <nav>
      <Link to='/'>Home</Link> | <Link to='/favorites'>Favorites</Link> | <Link to='/login' className='disabled-link'>Logout</Link>
    </nav>
  )
}

export default NavBar