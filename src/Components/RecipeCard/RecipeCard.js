import React, { useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'

import { MdStar } from 'react-icons/md'
import { MdStarBorder } from 'react-icons/md'

import './_RecipeCard.css'

function RecipeCard({info}) {
  const [saved, setSaved] = useState(false)

  const toggleSaved = () => {
    setSaved(!saved)
  }

  return (
    <div className='recipe-container'>
      <div onClick={toggleSaved} className='favorite-star'>
        {saved ? <MdStar size='3em' /> : <MdStarBorder size='3em'/>}
      </div>
      <div className='recipe-img-container'>
        <img className='recipe-img' src={info.image} alt={info.country}/>
        <a className='recipe-text' href={info.url}>
          {info.title}
        </a>
      </div> 
    </div>
  )
}


export default RecipeCard