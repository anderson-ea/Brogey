import React from 'react'

export const SearchBar = (props) => {

  return (
    <div className="search--bar">
      <input 
        type="text"
        onChange={event => props.setSearchCity(event.target.value)}
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
