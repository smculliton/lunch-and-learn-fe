import React, { useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { FaBeer } from 'react-icons/fa'

import './_RecipeCard.css'

function RecipeCard({info}) {
  const [saved, setSaved] = useState(false)

  const toggleSaved = () => {
    setSaved(!saved)
  }

  return (
    <div>
      <h2>
        <div className='recipe-container'>
          <div onClick={toggleSaved} className='favorite-star'>
            {saved ? <AiFillStar size='2em'/> : <AiOutlineStar size='2em'/>}
          </div>
          <img src={info.image} alt={info.country}/>
          <div>
            <a href={info.url}>
              {info.title}
            </a>
          </div>
        </div>  
      </h2>
    </div>
  )
}


export default RecipeCard