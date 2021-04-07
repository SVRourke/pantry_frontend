import React from 'react';
import {
  CardBody,
  CardHeading,
  TimeDisplay,
  SubHeading
} from "../../common/elements";


// ALERT: add record_age and itemCount to contributors in seriaizer
const MemberCard = ({ user }) => {
  return (
    <CardBody>
      <CardHeading>{user.name}</CardHeading>
      <SubHeading>since 3 weeks ago{/*user.user_age*/}</SubHeading>
      <TimeDisplay>2 items{/* user.itemCount */}</TimeDisplay>
    </CardBody>
  );
}

export default MemberCard;
