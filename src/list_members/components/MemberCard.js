import React from "react";
import { CardBody, TimeDisplay } from "../../common/elements";

import ageFormatter from "../../common/TimeFormatter";

const MemberCard = ({ user: { username, record_age, item_count } }) => {
  return (
    <CardBody>
      <h3 className="card-heading">{username}</h3>

      <p>since {ageFormatter(record_age, 2)} ago</p>

      <TimeDisplay>{item_count} items</TimeDisplay>
    </CardBody>
  );
};

export default MemberCard;
