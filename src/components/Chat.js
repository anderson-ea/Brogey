import { onSnapshot, query, where, collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { db } from '../firebase';

export const Chat = () => {
  const [matches, setMatches] = useState([]);
  const { user } = useAuth();
  const [selectedFriend, setSelectedFriend] = useState("Matt Michelet");
  const [matchedUsers, setMatchedUsers] = useState(null);
  const [addedUsers, setAddedUsers] = useState([])

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

  useEffect(() => {
    const justUsers = matches.map(item => {
      return item.users
    })
  
    const finalMatches = { ...justUsers }
    for (let i = 0; i < justUsers.length; i++) {
      delete finalMatches[i][user.uid]
    }

    setMatchedUsers(finalMatches)
  }, [matches, user])

  useEffect(() => {
    onSnapshot(collection(db, "users", user.uid, "added"), snapshot => {
      setAddedUsers(snapshot.docs.filter(doc => doc.id)
      .map(doc => ({
        id: doc.id
      })))
    })
  }, [])

  console.log(addedUsers)
  console.log(matchedUsers)
  // console.log(matchedUsers[0].QdPVPzSz3oblmVqPsNbugZ7ruRo1.photoURL)
  
  // const chatList = matches.length > 0 ?
  //   matchedUsers.map(match => {
  //     return (
  //       <div className="chat--match" key={match.id}>
  //         <img src={} alt='user thumbnail'/>
  //         <p>{match.displayName}</p>
  //       </div>
  //     )
  //   }) : <p>No friends yet</p>

  return (
    <div className='chat--container'>
      <div className="chat--box">
        <h4>{user.displayName}</h4>
        {/* <h4>{selectedFriend}</h4> */}
        {/* {chatList} */}
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
