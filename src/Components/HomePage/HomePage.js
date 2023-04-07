import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUpdateUser } from '../../Providers/UserContext'
import './_HomePage.css'

function HomePage() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const updateUser = useUpdateUser()

  useEffect(() => {
  updateUser()    
  }, [])

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
            placeholder="'Germany', e.g."
            value={search}
            onChange={handleChange}
            onKeyDown={event => handleKeyDown(event)}
          />
        </label>
        <Link to={`/search/${search}`}><button>Find Recipes</button></Link>
        <Link to={`/search/random`}><button>Pick a Country For Me!</button></Link>
      </div>

    </div>
  );
}

export default HomePage;
