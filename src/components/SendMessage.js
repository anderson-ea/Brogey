import React from 'react'

export default function SendMessage({ message }) {
  return (
    <div className='sent--message'>
      <p>{message.message}</p>
    </div>
  )
}
