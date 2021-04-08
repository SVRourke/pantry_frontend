// ALERT: DELETE
import React from 'react';
import FriendCard from './FriendCard'

const FriendList = ({ records }) => {
  const cards = records.map(r => <FriendCard record={r} />)
  
  return (
    <div style={{overflowY: "scroll"}}>
      {cards}
    </div>
  );
}

export default FriendList;
