import React from 'react';

const FriendList = ({records}) => {
  console.log(records)
  const cards = records.map(r => <p>{r.friend_name}- {r.record_age}</p>)
  return (
    <div>
      {cards}
    </div>
  );
}

export default FriendList;
