import React from 'react'

export default function ReceiveMessage({ message }) {
  return (
    <div className='received--message'>
      <img 
        src={message.photoURL} 
        alt='pic thumbnail'
        className='chat--pic'
      />
      <p className='rcv--msg'>{message.message}</p>
    </div>
  )
}
