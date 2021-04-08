import React from 'react';
import { useRouteMatch } from 'react-router-dom'
import MemberCard from './components/MemberCard'
import { NiceLink } from '../common/elements'

const MembersContainer = ({ contributors }) => {
  const { path, url } = useRouteMatch()
  const members = contributors.map(c => <MemberCard user={c} />)
  console.log(path)
  return (
    <div>
      {members}
      <NiceLink to={`${url}/invite`}>invite a user</NiceLink>
    </div>
  );
}
export default MembersContainer;