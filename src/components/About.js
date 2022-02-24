import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
  const [name, setName] = useState(null)
  const [picURL, setPicURL] = useState(null)
  const [job, setJob] = useState(null)
  const [age, setAge] = useState(null)
  const [handicap, setHandicap] = useState(null)
  const [drink, setDrink] = useState(null)
  const [cart, setCart] = useState(null)

  const navigate = useNavigate();

  const incompleteForm = !name || !picURL || !job || !handicap
  || !drink || !cart || !age
  
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
        <h2>General Info</h2>
        <p>Name</p>
        <input
          placeholder='"Shooter" McGavin'
          onChange={event => setName(event.target.value)}
          maxLength={30}
        />
        <p>Profile Pic URL</p>
        <input
          placeholder='Less data storage than uploading'
          onChange={event => setPicURL(event.target.value)}
        />
        <p>Job</p>
        <input
          placeholder='Enter Occupation'
          onChange={event => setJob(event.target.value)}
          maxLength={30}
        />
        <p>Age</p>
        <input
          placeholder='Enter Age'
          onChange={event => {
            if (event.target.value > 123) {
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
            if (event.target.value > 54) {
              return false 
            } else setAge(event.target.value)}}
          maxLength={30}
        />
        <p>Alcohol Consumption</p>
        <input
          placeholder="Drinker, Doesn't Drink, etc..."
          onChange={event => setDrink(event.target.value)}
          maxLength={30}
        />
        <p>Cart or Walk</p>
        <input
          placeholder='Cart, Walk, etc...'
          onChange={event => setCart(event.target.value)}
          maxLength={30}
        />
      </div>
      <button
        disabled={incompleteForm}
        className={!incompleteForm ? 'complete' : 'button--incomplete'}
      >Submit</button>
    </div>
  )
}
