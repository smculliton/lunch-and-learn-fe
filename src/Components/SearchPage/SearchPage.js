import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import RecipeCard from '../RecipeCard/RecipeCard'
import './_SearchPage.css'

function SearchPage() {
  const [results, setResults] = useState([])
  const { keyword } = useParams()
  const formattedKeyword = keyword[0].toUpperCase() + keyword.slice(1).toLowerCase()

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/recipes?country=${keyword}`)
      .then(response => response.json())
      .then(data => {
        setResults(
          data.data.map((ele, i) => <RecipeCard info={ele.attributes} key={i}/>)
        )
      })
  }, [])

  return (
    <div>
      <h2>{formattedKeyword} Recipes</h2>
      <Link to={`/country/${keyword}`}><button>Learn About {formattedKeyword}</button></Link>
      <div className='search-container'>
        {results}
      </div>
    </div>
  )
}

export default SearchPage