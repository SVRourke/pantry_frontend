import React from "react";
import {
  CardBody,
  TimeDisplay,
  RequestCancel,
  AcceptButton,
  DeclineButton,
  MemberCount,
} from "../../common/elements";

import ageFormatter from "../../common/TimeFormatter";

const ListInviteCard = ({ record, clickHandler }) => {
  const {
    id,
    list_name,
    record_age,
    requestor_name,
    requestee_name,
    contributor_count,
    type,
  } = record;

  const style = {
    color: type === "sent" ? "#ccc" : "var(--offblack-color)",
  };

  return (
    <CardBody typeStyle={type}>
      <h3 className="card-heading" style={style}>
        {type === "sent" ? requestee_name : list_name}
      </h3>

      <div className="row">
        <p style={style}>{type === "sent" ? list_name : requestor_name}</p>

        <RequestCancel
          displayType={type}
          onClick={() => clickHandler(id, "DELETE")}
        >
          cancel?
        </RequestCancel>
      </div>

      <TimeDisplay displayType={type}>
        {ageFormatter(record_age, 1)} ago
      </TimeDisplay>

      <MemberCount displayType={type}>{contributor_count} members</MemberCount>

      <div className="row">
        <AcceptButton
          displayType={type}
          onClick={() => clickHandler(id, "ACCEPT")}
        >
          accept
        </AcceptButton>

        <DeclineButton
          displayType={type}
          onClick={() => clickHandler(id, "DELETE")}
        >
          decline
        </DeclineButton>
      </div>
    </CardBody>
  );
};

export default ListInviteCard;
