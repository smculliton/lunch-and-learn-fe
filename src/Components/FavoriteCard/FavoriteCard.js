import React, { useState } from 'react'
import { useUpdateUser } from '../../Providers/UserContext'
import { Link } from 'react-router-dom'
import { MdDeleteOutline } from 'react-icons/md'

import './_FavoriteCard.css'


function FavoriteCard({info}) {
  const capitalize = (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  const updateUser = useUpdateUser()
  
  // TODO: Refactor in to reusable hook so this doesnt exist both here and in recipe card component
  const handleClick = () => {
    console.log('removed!')
    const params = new URLSearchParams({api_key: 'guest_api_key', favorite_id: info.id})

    fetch('http://localhost:4000/api/v1/favorites?' + params, { method: 'DELETE'})
      .then(response => updateUser())
  }

  return (
    <div className='favorite-container'>
      {/* TODO: image_urls expire after a certain amount of time */}
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
      <div className='trashcan' onClick={handleClick}>
        <MdDeleteOutline size='4em' />
      </div>
    </div>
  )
}


export default FavoriteCard