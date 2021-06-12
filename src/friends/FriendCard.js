import React from "react";
import { CardBody, TimeDisplay } from "../common/elements";
import ageFormatter from "../common/TimeFormatter";

const FriendCard = ({
  record: { mutual_list_count, friend_name, record_age, friend_id, id },
  cb,
}) => {
  const callBackHandler = (event) => cb(friend_id, id);

  return (
    <CardBody>
      <h3 className="card-heading">{friend_name}</h3>

      <div className="row">
        <TimeDisplay>since {ageFormatter(record_age, 1)} ago</TimeDisplay>

        <button className="unfriend-button" onClick={callBackHandler}>
          unfriend?
        </button>
      </div>

      <p>{mutual_list_count} shared lists</p>
    </CardBody>
  );
};

export default FriendCard;
