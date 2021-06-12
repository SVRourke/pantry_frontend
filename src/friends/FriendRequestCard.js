import React from "react";
import {
  CardBody,
  TimeDisplay,
  RequestCancel,
  AcceptButton,
  DeclineButton,
} from "../common/elements";

import ageFormatter from "../common/TimeFormatter";

const FriendRequestCard = ({
  record: { requestor_name, requestee_name, record_age, type, id },
  clickHandler,
}) => {
  const style = { color: type === "sent" ? "#ccc" : "var(--offblack-color)" };
  const heading = type === "sent" ? requestee_name : requestor_name;

  return (
    <CardBody typeStyle={type}>
      <h3 className="card-heading" style={style}>
        {heading}
      </h3>

      <div className="row">
        <TimeDisplay>{ageFormatter(record_age, 2)} ago</TimeDisplay>

        <RequestCancel
          displayType={type}
          onClick={() => clickHandler(id, "CANCEL")}
        >
          cancel?
        </RequestCancel>
      </div>

      <div className="row">
        <AcceptButton
          onClick={() => clickHandler(id, "ACCEPT")}
          displayType={type}
        >
          accept
        </AcceptButton>

        <DeclineButton
          onClick={() => clickHandler(id, "CANCEL")}
          displayType={type}
        >
          decline
        </DeclineButton>
      </div>
    </CardBody>
  );
};

export default FriendRequestCard;
