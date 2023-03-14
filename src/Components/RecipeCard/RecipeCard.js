import React, { useState } from 'react'
import savedTrue from '../../images/starred.png'
import savedFalse from '../../images/unstarredDark.png'
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
          <img 
            className='favorite-star'
            src={saved ? savedTrue : savedFalse}
            onClick={toggleSaved}
          />
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