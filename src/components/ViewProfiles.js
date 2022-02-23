import React, { useRef, useState } from 'react'
import { ProfileCard } from './ProfileCard';
import { SearchBar } from './SearchBar';

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
    photoURL: "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-9/122164937_4419783811427576_9148646352251222530_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ILrfdmLRLBwAX_lnJR_&_nc_ht=scontent.fapa1-1.fna&oh=00_AT_wo7axpmfbWE3oj6NfSr7aanoE0PLXgFixHN929KEz6Q&oe=623DE487",
    city: "Los Angeles",
    drinking: true,
    walking: false,
    handicap: 12,
    age: 32,
    id: 103,
  },
  {
    fullName: "Donald Trump",
    job: "Pro Golfer",
    photoURL: "https://i.imgur.com/WodUnKA.png",
    city: "New York City",
    drinking: false,
    walking: false,
    handicap: 12,
    age: 75,
    id: 356,
  },
  {
    fullName: "Matt Michelet",
    job: "Growth Associate",
    photoURL: "https://media-exp1.licdn.com/dms/image/C5603AQEB-wwmEVJAng/profile-displayphoto-shrink_800_800/0/1627346929555?e=1651104000&v=beta&t=qjIXbC4wMmC0ECc_4Gq-kEhaWY_43FHkjmppHmLu1oA",
    city: "Denver",
    drinking: true,
    walking: true,
    handicap: 12,
    age: 24,
    id: 23,
  },
  {
    fullName: `"Shooter" McGavin`,
    job: "Pro Golfer",
    photoURL: "https://i.imgur.com/Ce6D7g5.jpeg",
    city: "Denver",
    drinking: true,
    walking: true,
    handicap: 12,
    age: 45,
    id: 46,
  },
  {
    fullName: "Happy Gilmore",
    job: "Pro Golfer",
    photoURL: "https://i.imgur.com/ACYiczK.png",
    city: "Denver",
    drinking: false,
    walking: false,
    handicap: 12,
    age: 45,
    id: 466,
  },
]

export const ViewProfiles = () => {
  const [isMoved, setIsMoved] = useState(false)
  const [index, setIndex] = useState(0);
  const slideRef = useRef();
  const [searchCity, setSearchCity] = useState("");

  const profilesMapped = dummy.filter(search => {
    if (searchCity == "") {
      return search
    } else if (search.city.toLowerCase().includes(searchCity.toLowerCase())) {
      return search
    }
  }).map(item => {
    return (
      <ProfileCard 
        key={item.id}
        data={item}
      />
    )
  })

  const slideClick = (event, direction) => {
    event.stopPropagation()
    setIsMoved(true)
    let distance = slideRef.current.getBoundingClientRect().x - 50
    if (direction === "left" && index > 0) {
      setIndex(prevIndex => prevIndex - 1)
      slideRef.current.style.transform = `translateX(${305 + distance}px)`
    } else if (direction === "right" && index < profilesMapped.length - 1) {
      setIndex(prevIndex => prevIndex + 1)
      slideRef.current.style.transform = `translateX(${-305 + distance}px)`
    }
  }

  return (
    <div className='profiles--main'>
      <SearchBar setSearchCity={setSearchCity} />
      <div className='profiles--wrapper'>
        {!isMoved ? null : <img 
          src={require("../images/arrow.png")}
          alt='back arrow' 
          className='back-arrow'
          onClick={(event) => slideClick(event, "left")} 
        />}
        <div className="profiles--container" ref={slideRef} >
          {profilesMapped}
        </div>
        <img 
          src={require("../images/arrow.png")}
          alt='fwd arrow'
          className='fwd-arrow'
          onClick={(event) => slideClick(event, "right")} 
        />
      </div>
    </div>
  )
}
