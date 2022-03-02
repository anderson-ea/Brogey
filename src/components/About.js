import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import useAuth from '../hooks/useAuth'

export const About = () => {
  const [picURL, setPicURL] = useState(null)
  const [job, setJob] = useState(null)
  const [age, setAge] = useState(null)
  const [handicap, setHandicap] = useState(null)
  const [drink, setDrink] = useState(null)
  const [cart, setCart] = useState(null)
  const [city, setCity] = useState(null)
  const [bio, setBio] = useState(null)

  const { user } = useAuth()

  const navigate = useNavigate();

  const incompleteForm = !city|| !picURL || !job || !handicap
  || !drink || !cart || !age || !bio

  const updateProfile = () => {
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      displayName: user.displayName,
      photoURL: picURL,
      job: job,
      age: age,
      handicap: handicap,
      drink: drink,
      cart: cart,
      city: city,
      bio: bio,
      timestamp: serverTimestamp(),
    }).then(() => {navigate('/')}
    ).catch(error => alert(error.message))
  }
  
  return (
    <div className='about--container'>
      <div className="back">
        <img 
          src={require('../images/back.png')} 
          alt='go back' 
          onClick={() => navigate('/')}
        />
      </div>
      <div className="about--wrapper">
        <h2>Welcome, {user.displayName}</h2>
        <p>Profile Pic URL</p>
        <input
          placeholder='Less data storage than uploading'
          onChange={event => setPicURL(event.target.value)}
          value={picURL}
        />
        <p>Job</p>
        <input
          placeholder='Enter Occupation'
          onChange={event => setJob(event.target.value)}
          maxLength={30}
          value={job}
        />
        <p>Age</p>
        <input
          placeholder='Enter Age'
          onChange={event => {
            if (event.target.value > 123 ||
              event.target.value < 0
            ) {
              return false 
            } else setAge(event.target.value)}
          }
          type="number"
          value={age}
        />
        <p>Handicap</p>
        <input
          placeholder="The max is 54"
          onChange={event => {
            if (event.target.value > 54 || 
              event.target.value < 0 ||
              event.target.value[0] === 0
            ) { 
              return false 
            } else setHandicap(event.target.value)}}
          type='number'
          maxLength={30}
          value={handicap}
        />
        <p>Alcohol Consumption</p>
        <input
          placeholder="Drinker, Doesn't Drink, etc..."
          onChange={event => setDrink(event.target.value)}
          maxLength={30}
          value={drink}
        />
        <p>Cart or Walk</p>
        <input
          placeholder='Cart, Walk, etc...'
          onChange={event => setCart(event.target.value)}
          maxLength={30}
          value={cart}
        />
        <p>City</p>
        <input
          placeholder='Enter City'
          onChange={event => setCity(event.target.value)}
          maxLength={30}
          value={city}
        />
        <p>Bio</p>
        <textarea
          className='bio--form'
          placeholder='Max 155 characters'
          onChange={event => setBio(event.target.value)}
          maxLength={155}
          value={bio}
        ></textarea>
        <p className='required'>all fields required</p>
      </div>
      <button
        disabled={incompleteForm}
        className={!incompleteForm ? 'complete' : 'button--incomplete'}
        onClick={updateProfile}
      >Submit</button>
    </div>
  )
}
