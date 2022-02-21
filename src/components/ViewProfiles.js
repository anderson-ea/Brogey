import React from 'react'

const dummy = [
  {
    fullName: "Eric Anderson",
    job: "Software Developer",
    photoURL: "https://avatars.githubusercontent.com/u/59844963?v=4",
    drinking: true,
    walking: false,
    age: 32,
    id: 123,
  },
  {
    firstName: "Tiger Woods",
    job: "Pro Golfer",
    photoURL: "https://i.imgur.com/C4FkYKT.jpeg",
    drinking: true,
    walking: false,
    age: 45,
    id: 456,
  },
  {
    fullName: "Eric 2",
    job: "Software Developer",
    photoURL: "https://avatars.githubusercontent.com/u/59844963?v=4",
    drinking: true,
    walking: false,
    age: 32,
    id: 123,
  },
  {
    firstName: "Tiger Woods 2",
    job: "Pro Golfer",
    photoURL: "https://i.imgur.com/C4FkYKT.jpeg",
    drinking: true,
    walking: false,
    age: 45,
    id: 456,
  },
  {
    fullName: "Eric 3",
    job: "Software Developer",
    photoURL: "https://avatars.githubusercontent.com/u/59844963?v=4",
    drinking: true,
    walking: false,
    age: 32,
    id: 123,
  },
  {
    firstName: "Tiger 3",
    job: "Pro Golfer",
    photoURL: "https://i.imgur.com/C4FkYKT.jpeg",
    drinking: true,
    walking: false,
    age: 45,
    id: 456,
  },
]

const SearchBar = () => (
  <form action="/" method="get">
    <div className="search--bar">
      <input 
        type="text"
        id="header-search"
        placeholder="Search City..."
        name="s"
        className='search--field'
      />
      <button type="submit" className="search--button">
        <img 
          alt="search" 
          src={require("../images/search.png")} 
          className="search--img"/>
      </button>
    </div>
  </form>
);

export const ViewProfiles = () => {
  return (
    <div className='profiles--main'>
      <SearchBar />
      <div className="profiles--container">
        main content
      </div>
    </div>
  )
}
