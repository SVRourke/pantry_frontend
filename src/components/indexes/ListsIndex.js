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


const ListIndex = () => {
  return (
    <div>
      <ListCardContainer />

      <FancyLink>
        <Link to={'lists/new'}>New List Button</Link>
      </FancyLink>

      <ListInvitesContainer />
    </div>
  )
}

export default ListIndex

// 