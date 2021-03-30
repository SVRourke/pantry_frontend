import React from 'react';
import FriendCard from './cards/FriendCard'

const FriendList = ({ records }) => {
  console.log(records)
  const cards = records.map(r => <FriendCard record={r} />)
  return (
    <div>
      {cards}
    </div>
  );
}

export default FriendList;
