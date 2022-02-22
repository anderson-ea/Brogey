import React, { useRef, useState } from 'react'
import { ProfileCard } from './ProfileCard';

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
    fullName: "Tiger Woods",
    job: "Pro Golfer",
    photoURL: "https://i.imgur.com/C4FkYKT.jpeg",
    drinking: true,
    walking: false,
    age: 45,
    id: 486,
  },
  {
    fullName: "Eric 2",
    job: "Software Developer",
    photoURL: "https://avatars.githubusercontent.com/u/59844963?v=4",
    drinking: true,
    walking: false,
    age: 32,
    id: 103,
  },
  {
    fullName: "Tiger Woods asdfasdfasdfasfd",
    job: "Pro Golfer",
    photoURL: "https://i.imgur.com/C4FkYKT.jpeg",
    drinking: true,
    walking: false,
    age: 45,
    id: 356,
  },
  {
    fullName: "Eric 3",
    job: "Software Developer",
    photoURL: "https://avatars.githubusercontent.com/u/59844963?v=4",
    drinking: true,
    walking: false,
    age: 32,
    id: 23,
  },
  {
    fullName: "Tiger 3",
    job: "Pro Golfer",
    photoURL: "https://i.imgur.com/C4FkYKT.jpeg",
    drinking: true,
    walking: false,
    age: 45,
    id: 46,
  },
  {
    fullName: "Tiger asdf",
    job: "Pro Golfer",
    photoURL: "https://i.imgur.com/C4FkYKT.jpeg",
    drinking: true,
    walking: false,
    age: 45,
    id: 466,
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
          className="search--icon"/>
      </button>
    </div>
  </form>
);

const profilesMapped = dummy.map(item => {
  return (
    <ProfileCard 
      key={item.id}
      data={item}
    />
  )
})

export const ViewProfiles = () => {
  const [isMoved, setIsMoved] = useState(false)
  const [index, setIndex] = useState(0);
  const slideRef = useRef();

  const slideClick = async (direction) => {
    setIsMoved(true)
    let distance = slideRef.current.getBoundingClientRect().x - 50
    if (direction === "left" && index > 0) {
      setIndex(prevIndex => prevIndex - 1)
      slideRef.current.style.transform = `translateX(${285 + distance}px)`
    } else if (direction === "right" && index < profilesMapped.length - 1) {
      setIndex(prevIndex => prevIndex + 1)
      slideRef.current.style.transform = `translateX(${-285 + distance}px)`
    }
  }

  return (
    <div className='profiles--main'>
      <SearchBar />
      <div className='profiles--wrapper'>
        {!isMoved ? null : <img 
          src={require("../images/arrow.png")}
          alt='back arrow' 
          className='back-arrow'
          onClick={() => slideClick("left")} 
        />}
        <div className="profiles--container" ref={slideRef} >
          {profilesMapped}
        </div>
        <img 
          src={require("../images/arrow.png")}
          alt='fwd arrow'
          className='fwd-arrow'
          onClick={() => slideClick("right")} 
        />
      </div>
    </div>
  )
}
