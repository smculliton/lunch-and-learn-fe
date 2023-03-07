import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <>
      <h1>Lunch and Learn</h1>
      <Link to='/'>Home</Link> | <Link to='/register'>Register</Link> | <Link to='/login'>Login</Link>
      <br/>
    </>
  )
}

export default Header