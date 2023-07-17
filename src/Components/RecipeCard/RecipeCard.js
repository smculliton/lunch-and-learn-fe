import React, { useState, useEffect } from 'react'
import { useUser, useUpdateUser } from '../../Providers/UserContext'

import logo from '../../images/logo2.png'
import { MdStar } from 'react-icons/md'
import { MdStarBorder } from 'react-icons/md'

import './_RecipeCard.css'

function RecipeCard({info}) {
  const userFavorites = useUser()
  const updateUser = useUpdateUser()
  const [saved, setSaved] = useState({})

  useEffect(() => {
    setSaved(userFavorites.find(element => element.recipe_link === info.url))
  })

  const toggleSaved = () => {
    saved ? handleRemoveFavorite() : handleAddFavorite()
  }

  const handleRemoveFavorite = () => {
    console.log('removed!')
    const params = new URLSearchParams({api_key: 'guest_api_key', favorite_id: saved.id})

    fetch(process.env.REACT_APP_BASE_URL + '/api/v1/favorites?' + params, { method: 'DELETE'})
      .then(response => updateUser()
    )
  }

  const handleAddFavorite = () => {
    console.log('added!')
    const body = {
      api_key: 'guest_api_key',
      country: info.country,
      recipe_link: info.url,
      recipe_title: info.title,
      image_url: info.image
    }

    fetch(process.env.REACT_APP_BASE_URL + '/api/v1/favorites', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => updateUser())    
  }

  const handleError = (e) => {
    e.target.onerror = null
    e.target.src = logo
  }

  return (
    <div className='recipe-container'>
      <div onClick={toggleSaved} className='favorite-star'>
        {saved ? <MdStar size='3em' /> : <MdStarBorder size='3em'/>}
      </div>
      <div className='recipe-img-container'>
        <img className='recipe-img' src={info.image} alt={info.country} onError={handleError}/>
        <a className='recipe-text' href={info.url}>
          {info.title}
        </a>
      </div> 
    </div>
  )
}


export default RecipeCard