import React from 'react'
import { useNavigate } from 'react-router-dom'
import './_Header.css'
import logo from '../../images/logo.png'

const Header = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return(
    <header>
      <img 
        src={logo} 
        onClick={handleClick}
      />
      <br/>
    </header>
  )
}

export default Header