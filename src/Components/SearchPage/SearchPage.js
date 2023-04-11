import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import RecipeCard from '../RecipeCard/RecipeCard'
import './_SearchPage.css'

function SearchPage() {
  const [results, setResults] = useState([])
  const [country, setCountry] = useState([])
  const { keyword } = useParams()

  const url = keyword === 'random' ? process.env.REACT_APP_BASE_URL + '/api/v1/recipes' : process.env.REACT_APP_BASE_URL + `/api/v1/recipes?country=${keyword}`
  
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setResults(
          data.data.map((ele, i) => <RecipeCard info={ele.attributes} key={i}/>)
        )
        setCountry(
          // TODO: fix this capitalization for multi-word countries
          data.data[0].attributes.country[0].toUpperCase() + data.data[0].attributes.country.slice(1).toLowerCase()
        )
      })
  }, [url])

  return (
    <div>
      <h1>{country} Recipes</h1>
      <Link to={`/country/${country}`}><button>Learn About {country}</button></Link>
      <div className='search-container'>
        {results}
      </div>
    </div>
  )
}

export default SearchPage