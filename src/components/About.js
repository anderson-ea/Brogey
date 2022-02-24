import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
  const [name, setName] = useState(null)
  const [picURL, setPicURL] = useState(null)
  const [job, setJob] = useState(null)
  const [handicap, setHandicap] = useState(null)
  const [drink, setDrink] = useState(null)
  const [cart, setCart] = useState(null)

  const navigate = useNavigate();

  const incompleteForm = !name || !picURL || !job || !handicap
  || !drink || !cart
  
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
          placeholder='Enter what people call you...'
          onChange={event => setName(event.target.value)}
          />
        <p>Profile Pic URL</p>
        <input
          placeholder='URL to save data storage...'
          onChange={event => setPicURL(event.target.value)}
          />
        <p>Job</p>
        <input
          placeholder='Enter occupation...'
          onChange={event => setJob(event.target.value)}
          />
        <p>Handicap</p>
        <input
          placeholder="Most of us don't know..."
          onChange={event => setHandicap(event.target.value)}
          />
        <p>Alcohol Consumption</p>
        <input
          placeholder="Drinker, Doesn't Drink..."
          onChange={event => setDrink(event.target.value)}
          />
        <p>Cart or Walk</p>
        <input
          placeholder='Cart, Walk, Both...'
          onChange={event => setCart(event.target.value)}
          />
      </div>
      <button
        disabled={incompleteForm}
        className={!incompleteForm ? 'complete' : 'button--incomplete'}
      >Submit</button>
    </div>
  )
}
