import React from 'react'
import { Link } from 'react-router-dom'
import './_Header.css'
import logo from '../../images/logo.png'

const Header = () => {
  return(
    <header>
      <img src={logo} />
      <br/>
    </header>
  )
}

export default Header