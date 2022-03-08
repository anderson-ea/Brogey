import { collection, doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { ProfileCard } from './ProfileCard';
import { SearchBar } from './SearchBar';
import { db } from '../firebase';

export const ViewProfiles = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [index, setIndex] = useState(0);
  const [searchCity, setSearchCity] = useState("");
  const [profiles, setProfiles] = useState([]);
  const { user } = useAuth();
  const slideRef = useRef();
  const navigate = useNavigate();


  useLayoutEffect(() => {
    if (user === null) {
      navigate('/login')
    } else {
      onSnapshot(doc(db, "users", user.uid), (snapshot) => {
        if (!snapshot.exists()) {
          navigate('/about');
        }
      })
    }
  }, [user, navigate])

  useEffect(() => {
    onSnapshot(collection(db, "users"), snapshot => {
      setProfiles(snapshot.docs.filter(doc => doc.id !== user.uid)
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      )
    })
  }, [user.uid])

  const profilesMapped = profiles.filter(search => {
    if (searchCity === "") {
      return search
    } else if (search.city.toLowerCase().includes(searchCity.toLowerCase())) {
      return search
    } else {return null}
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
      slideRef.current.style.transform = `translateX(${345 + distance}px)`
    } else if (direction === "right" && index < profilesMapped.length - 1) {
      setIndex(prevIndex => prevIndex + 1)
      slideRef.current.style.transform = `translateX(${-345 + distance}px)`
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
          {user ? profilesMapped : <Link to={'/login'}>You must login to view profiles</Link>}
        </div>
        <img 
          src={require("../images/arrow.png")}
          alt='fwd arrow'
          className='fwd-arrow'
          onClick={(event) => slideClick(event, "right")} 
        />
      </div>
      {user ? 
        <div className="chat--bubble">
          <img 
            className='chat--bubble--img'
            alt='chat bubble' 
            src={require("../images/chatBubble.png")}
            onClick={() => navigate('/chat')}
          />
        </div> : null
      }
    </div>
  )
}
