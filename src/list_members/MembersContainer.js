import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom'
import MemberCard from './components/MemberCard'
import styled from 'styled-components'

const NiceLink = styled(Link)`
  border: solid var(--offblack-color) 2px;
  padding: .3rem .7rem;
  border-radius: 3rem;
  display: block;
  width: fit-content;
`;

const MembersContainer = ({contributors}) => {
  const { path, url } = useRouteMatch()
  const members = contributors.map(c => <MemberCard user={c} />)

  return (
    <div>

      <Route exact path={path} >
        {members}
        {/* TODO: LINK TO Contributor INVITE PAGE */}
        <NiceLink to={`${url}/invite`}>invite a user</NiceLink>
      </Route>

      <Route path={`${path}/invite`} >
        <h1>INVITE MEMBER</h1>
      </Route>
    </div>
  );
}

export default MembersContainer;
// ALERT: FIX INVITE ROUTE