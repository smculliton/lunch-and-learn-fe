import React, { useEffect } from 'react'
import FavoriteCard from '../FavoriteCard/FavoriteCard'

import { useUser, useUpdateUser } from '../../Providers/UserContext'

import './_FavoritesPage.css'

function FavoritesPage() {
  const userFavorites = useUser()
  const updateUser = useUpdateUser()

  useEffect(() => {
    updateUser()
  }, [])

  console.log(userFavorites)

  const favorites = userFavorites.map((ele, i) => <FavoriteCard info={ele} key={i} />)

  return (
    <div className='favorites'>
      <h1>Your Favorites</h1>
      {favorites}
    </div>
  )
}

export default FavoritesPage