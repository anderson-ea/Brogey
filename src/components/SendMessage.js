import React from 'react'

export default function SendMessage({ message }) {
  return (
    <div className='sent--msg--wrap'>
      <p className='sent--message'>{message.message}</p>
    </div>
  )
}
