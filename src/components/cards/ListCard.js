// ALERT: ADD LATEST ACTIVITY TIME TO LIST INDEX RESPONSE * BACKEND * 
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  CardBody,
  CardHeading,
  MemberCount,
  TimeDisplay
} from './elements'

const ListCard = (props) => {
  const { id, name, contributor_count, item_count } = props.user
  return (
    <Link to={`/lists/${id}`} >
      <CardBody>
        <CardHeading>{name}</CardHeading>
        <p>Add most recent to response!</p>

        {/* <TimeDisplay style={{ color: color }}>
                  activity {latestactivity} ago
              {/* </TimeDisplay> */}

        <MemberCount>{contributor_count} members</MemberCount>
      </CardBody>
    </Link>
  )
}

export default ListCard

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
