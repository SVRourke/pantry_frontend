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
      <CardHeading>{user.username}</CardHeading>
      <SubHeading>since {user.record_age} minutes ago</SubHeading>
      <TimeDisplay>{ user.item_count } items</TimeDisplay>
    </CardBody>
  );
}

export default MemberCard;
