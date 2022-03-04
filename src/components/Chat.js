import { onSnapshot, query, where, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { db } from '../firebase';

export const Chat = () => {
  const [matches, setMatches] = useState();
  const { user } = useAuth();

  useEffect(() => {
    onSnapshot(query(collection(db, "matches"),
      where("usersMatched", "array-contains", user.uid)),
      (snapshot) => 
        setMatches(snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })))
    )
  }, [user])

  return (
    <div className='chat--container'>
      <div className="chat--box">
        <h4>anderson.ea</h4>
        <h4>Matt Michelet</h4>
        <ul>
          <li>person1</li>
          <li>another person</li>
        </ul>
        <div>
          <p>text</p>
          <p>text</p>
          <p>text</p>
          <input></input>
        </div>
      </div>
    </div>
  )
}
