import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import './_CountryImage.css'

const CountryImage = ({ srcUrl, altText }) => {
  const [hovering, setHover] = useState(false)

  const overlay = 
    <div 
      class='overlay'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p class='overlay-text'>{altText}</p>        
    </div>

  return (
    <div class='img-container'>
      <img
        class='tile-img'
        src={srcUrl}
        alt={altText}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      {hovering && overlay}
    </div>
  )
}

export default CountryImage