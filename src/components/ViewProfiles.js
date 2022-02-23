import React, { useRef, useState } from 'react'
import { ProfileCard } from './ProfileCard';

const dummy = [
  {
    fullName: "Eric Anderson",
    job: "Software Developer",
    photoURL: "https://avatars.githubusercontent.com/u/59844963?v=4",
    city: "Seattle",
    drinking: false,
    walking: false,
    handicap: 12,
    age: 32,
    id: 123,
  },
  {
    fullName: "Tiger Woods",
    job: "Pro Golfer",
    photoURL: "https://i.imgur.com/C4FkYKT.jpeg",
    city: "Dallas",
    drinking: true,
    walking: false,
    handicap: 12,
    age: 45,
    id: 486,
  },
  {
    fullName: "Jimmy John",
    job: "Software Developer",
    photoURL: "https://avatars.githubusercontent.com/u/59844963?v=4",
    city: "Los Angeles",
    drinking: true,
    walking: false,
    handicap: 12,
    age: 32,
    id: 103,
  },
  {
    fullName: "Kevin Cain",
    job: "Pro Golfer",
    photoURL: "https://i.imgur.com/C4FkYKT.jpeg",
    city: "Denver",
    drinking: false,
    walking: false,
    handicap: 12,
    age: 45,
    id: 356,
  },
  {
    fullName: "Matt Michelet",
    job: "Software Developer",
    photoURL: "https://avatars.githubusercontent.com/u/59844963?v=4",
    city: "Denver",
    drinking: true,
    walking: true,
    handicap: 12,
    age: 32,
    id: 23,
  },
  {
    fullName: "Deebo Samuel",
    job: "Pro Golfer",
    photoURL: "https://i.imgur.com/C4FkYKT.jpeg",
    city: "Denver",
    drinking: true,
    walking: true,
    handicap: 12,
    age: 45,
    id: 46,
  },
  {
    fullName: "Marky Mark",
    job: "Pro Golfer",
    photoURL: "https://i.imgur.com/C4FkYKT.jpeg",
    city: "Denver",
    drinking: false,
    walking: false,
    handicap: 12,
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
    let distance = slideRef.current.getBoundingClientRect().x - 53
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
