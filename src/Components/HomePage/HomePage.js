import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Header from '../Header/Header'

function HomePage() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      navigate(`/search/${search}`)
      clearSearch()
    }
  }

  const clearSearch = () => {
    setSearch('')
  }

  return (
    <div>
      <Header />
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
      <Link to={`/search/${search}`}><button>Submit</button></Link>
    </div>
  );
}

export default HomePage;
