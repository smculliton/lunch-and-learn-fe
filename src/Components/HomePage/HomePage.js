import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './_HomePage.css'

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
    <div className='container'>
      
      <div>
        <label>
          Search Recipes by Country:
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

    </div>
  );
}

export default HomePage;
