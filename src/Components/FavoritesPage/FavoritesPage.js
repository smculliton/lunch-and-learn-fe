import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FavoriteCard from '../FavoriteCard/FavoriteCard'

import './_FavoritesPage.css'

function FavoritesPage() {
  const [favorites, setFavorites] = useState([])
  
  useEffect(() => { 
    fetch('http://localhost:4000/api/v1/favorites?api_key=guest_api_key')
      .then(response => response.json())
      .then(data => {
        setFavorites(
          data.data.map((ele, i) => <FavoriteCard info={ele.attributes} key={i} />)
        )
      })
  }, [])

  return (
    <div className='favorites'>
      <h1>Your Favorites</h1>
      {favorites}
    </div>
  )
}

export default FavoritesPage