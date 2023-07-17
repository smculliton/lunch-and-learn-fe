import React, { useState } from 'react'
import { useUpdateUser } from '../../Providers/UserContext'
import { Link } from 'react-router-dom'
import { MdDeleteOutline } from 'react-icons/md'
import logo from '../../images/logo2.png'

import './_FavoriteCard.css'


function FavoriteCard({info}) {
  const capitalize = (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  const updateUser = useUpdateUser()
  const [favoriteInfo, setFavoriteInfo] = useState(info)
  
  // TODO: Refactor in to reusable hook so this doesnt exist both here and in recipe card component
  const handleClick = () => {
    console.log('removed!')
    const params = new URLSearchParams({api_key: 'guest_api_key', favorite_id: favoriteInfo.id})

    fetch(process.env.REACT_APP_BASE_URL + '/api/v1/favorites?' + params, { method: 'DELETE'})
      .then(response => updateUser())
  }

  const updateImageUrl = () => {
    const { image_url: _, ...newInfo } = favoriteInfo
    setFavoriteInfo(
      newInfo
    )
  }

  return (
    <div className='favorite-container'>
      <img src={favoriteInfo.image_url ? favoriteInfo.image_url : logo} className='favorite-image' onError={updateImageUrl} />
      <div className='favorite-info'>
        <h2>{favoriteInfo.recipe_title}</h2>
        <a href={favoriteInfo.recipe_link}>
          See Recipe
        </a>
        <br/>
        <Link to={`/country/${favoriteInfo.country}`}>
          Learn About {capitalize(favoriteInfo.country)}
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