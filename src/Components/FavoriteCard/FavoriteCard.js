import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDeleteOutline } from 'react-icons/md'

import './_FavoriteCard.css'


function FavoriteCard({info}) {
  const capitalize = (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()


  return (
    <div className='favorite-container'>
      <img src={info.image_url} className='favorite-image' />
      <div className='favorite-info'>
        <h2>{info.recipe_title}</h2>
        <a href={info.recipe_link}>
          See Recipe
        </a>
        <br/>
        <Link to={`/country/${info.country}`}>
          Learn About {capitalize(info.country)}
        </Link>
        <br/>
      </div>
      <div className='trashcan'>
        <MdDeleteOutline size='4em' />
      </div>
    </div>
  )
}


export default FavoriteCard