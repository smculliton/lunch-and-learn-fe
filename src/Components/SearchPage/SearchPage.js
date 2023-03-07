import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import RecipeCard from '../RecipeCard/RecipeCard'

function SearchPage() {
  const [results, setResults] = useState([])
  const { keyword } = useParams()

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
    <>
      {results}
    </>
  )
}

export default SearchPage