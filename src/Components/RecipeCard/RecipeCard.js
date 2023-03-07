import React, { useState } from 'react'
import savedTrue from '../../images/starred.png'
import savedFalse from '../../images/unstarredDark.png'

function RecipeCard({info}) {
  const [saved, setSaved] = useState(false)

  const toggleSaved = () => {
    setSaved(!saved)
  }

  return (
    <div>
      <h2>
        <img src={info.image} alt={info.country}/>
        <br />
        <a href={info.url}>
          {info.title}
        </a>
        <img 
          src={saved ? savedTrue : savedFalse}
          onClick={toggleSaved}
        />
      </h2>
    </div>
  )
}


export default RecipeCard