import React from 'react'
import { Link } from 'react-router-dom'
import {
  CardBody,
  CardHeading,
  MemberCount,
} from "../../common/elements"

const ListCard = ({ 
  list: {
    id, 
    name, 
    item_count, 
    contributor_count
  } 
}) => {

  return (
    <Link to={`/lists/${id}`} >
      <CardBody>
        <CardHeading>{name}</CardHeading>
        <p>{item_count} items</p>
        <MemberCount>{contributor_count} members</MemberCount>
      </CardBody>
    </Link>
  )
}
export default ListCard