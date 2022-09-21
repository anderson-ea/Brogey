import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import { db } from '../firebase';
import SendMessage from './SendMessage';
import ReceiveMessage from './ReceiveMessage';

export default function ChatConversation({ matchDetails }) {
  const { user } = useAuth();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  // sets message state to messages between users
  useEffect(() => onSnapshot(query(
    collection(db, "matches", matchDetails.id, "messages"), 
      orderBy("timestamp", "desc")), (snapshot) => 
        setMessages(
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
  ), [matchDetails]);

  // places message in firestore
  const sendMessage = () => {
    addDoc(collection(db, "matches", matchDetails.id, "messages"), {
      timestamp: serverTimestamp(),
      userId: user.uid,
      displayName: user.displayName,
      photoURL: matchDetails.users[user.uid].photoURL,
      message: input,
    });
    setInput("");
  };

  // displays messages based on sent or received
  const chatMessages = messages.map(msg => {
    return (
      msg.userId === user.uid ? (
        <SendMessage key={msg.id} message={msg} />
      ) : (
        <ReceiveMessage key={msg.id} message={msg} />
      )
    )
  })

  const handleKeyUp = event => {
    if (event.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <div>
      <div className='chat--convo--texts'>
        {chatMessages}
      </div>
      <div className='chat--input--wrapper'>
        <input
          className='chat--input'
          placeholder="Send a Message..."
          onChange={event => setInput(event.target.value)}
          onKeyUp={handleKeyUp}
          value={input}
        />
        <button className="msg--button" onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}
