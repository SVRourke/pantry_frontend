import React from 'react';
// ALERT: add record_age and itemCount to contributors in seriaizer
const MemberCard = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <h4>3 weeks{/*user.user_age*/}</h4>
      <h4>2 items{/* user.itemCount */}</h4>
    </div>
  );
}

export default MemberCard;
