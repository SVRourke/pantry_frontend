import React from 'react'
import ListCardContainer from '../ListCardContainer'
import ListInvitesContainer from '../ListInvitesContainer'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
const FancyLink = styled.div`
  display: block;   
    a {
      border: solid black 2px;
      padding: .5rem 2rem;
      margin: 2rem 0;
    }
`;

const testLists = [
  { "id": 3, "name": "Squad", "contributor_count": 5, "item_count": 0 },
  { "id": 2, "name": "Rain & Sam's List", "contributor_count": 2, "item_count": 5 },
  { "id": 1, "name": "Sam's List", "contributor_count": 1, "item_count": 0 }
]

const testInvites = [
  {"id": 1, "record_age": "1 days", "requestor_name": "Sam", "requestee_name": "Jake", "contributor_count": 1, "type": "sent"},
  {"id": 7, "record_age": "5 days", "requestor_name": "Sam", "requestee_name": "Rohan", "contributor_count": 1, "type": "sent"},
  {"id": 2, "record_age": "5 days", "requestor_name": "Autumn", "requestee_name": "Sam", "contributor_count": 0, "type": "received"},
  {"id": 3, "record_age": "5 days", "requestor_name": "Autumn", "requestee_name": "Sam", "contributor_count": 0, "type": "received"}
]

const ListIndex = () => {
  return (
    <div>
      <ListCardContainer records={testLists} />

      <FancyLink>
        <Link to={'lists/new'}>New List Button</Link>
      </FancyLink>

      <ListInvitesContainer invites={testInvites} />
    </div>
  )
}

export default ListIndex

// Connects to slice of redux store
