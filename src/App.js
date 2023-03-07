import React, { useState } from 'react'
import './App.css';
import Recipe from './Components/Recipe'

function App() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    fetch(`http://localhost:4000/api/v1/recipes?country=${search}`)
      .then(response => response.json())
      .then(data => {
        setResults(
          data.data.map(d => <Recipe info={d.attributes} />)
        )
      })
    clearSearch()
  }

  const clearSearch = () => {
    setSearch('')
  }

  return (
    <div>
      <h1>Lunch and Learn</h1>
      <label>
        Search:
        <input 
          type="text" 
          name="search" 
          value={search}
          onChange={handleChange}
          onKeyDown={event => handleKeyDown(event)}
        />
      </label>
      <button onClick={handleSubmit}>Search</button>
      {results}
    </div>
  );
}

export default App;
