import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import RecipeCard from '../RecipeCard/RecipeCard'
import Header from '../Header/Header'

function SearchPage() {
  const [results, setResults] = useState([])
  const { keyword } = useParams()
  console.log(keyword)

  const handleSubmit = () => {
    fetch(`http://localhost:4000/api/v1/recipes?country=${keyword}`)
      .then(response => response.json())
      .then(data => {
        setResults(
          data.data.map(d => <RecipeCard info={d.attributes} />)
        )
      })
  }
}

export default SearchPage