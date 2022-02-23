import React, { useState } from 'react'

export const SearchBar = () => {
  const [searchCity, setSearchCity] = useState(null);

  return (
    <div className="search--bar">
      <input 
        type="text"
        onChange={event => setSearchCity(event.target.value)}
        placeholder="Search City..."
        name="s"
        className='search--field'
      />
      <button type="submit" className="search--button">
        <img 
          alt="search" 
          src={require("../images/search.png")} 
          className="search--icon"/>
      </button>
    </div>
  )

};
