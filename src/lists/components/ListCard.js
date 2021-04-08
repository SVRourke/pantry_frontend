// TODO: API- ADD RECORD AGE TO ITEMS IN LIST SERIALIZER

import React from 'react'
import { Link } from 'react-router-dom'
import {
  CardBody,
  CardHeading,
  MemberCount,
} from "../../common/elements"

const ListCard = (props) => {
  const { id, name, contributors, items } = props.list
  return (
    <Link to={`/lists/${id}`} >
      <CardBody>
        <CardHeading>{name}</CardHeading>
        {/* <p>Add most recent Item age OR "Empty List"</p> */}
        <p>{items.length} items</p>


        <MemberCount>{contributors.length} members</MemberCount>
      </CardBody>
    </Link>
  )
}
export default ListCard
// ALERT: add most recent activity to api
//<TimeDisplay style={{ color: color }}>
//          activity {latestactivity} ago
//</TimeDisplay>

// * LOGIC FOR CHANGING THE TEXT Color depending on how much time has passed
// const timeType = latestactivity.split(" ")[1];
// let color = "";

// switch (timeType) {
//     case "minutes":
//     color = "var(--green-color)";
//     break;
//     case "hours":
//     color = "var(--blue-color)";
//     break;
//     case "days":
//     color = "var(--offBlack-color)";
//     break;
//     default:
//     color = "var(--gray-color)";
// }
