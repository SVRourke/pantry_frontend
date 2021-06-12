import React from "react";
import { Link } from "react-router-dom";
import { CardBody, MemberCount } from "../../common/elements";

const ListCard = ({ list: { id, name, item_count, contributor_count } }) => {
  return (
    <Link to={`/lists/${id}`}>
      <CardBody>
        <h3 className="card-heading truncate">{name}</h3>

        <p>{item_count} items</p>

        <MemberCount>{contributor_count} members</MemberCount>
      </CardBody>
    </Link>
  );
};
export default ListCard;
