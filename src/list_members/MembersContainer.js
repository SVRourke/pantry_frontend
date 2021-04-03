import React from 'react';
import { MemberCount } from '../common/elements';
import MemberCard from './components/MemberCard'
const MembersContainer = ({contributors}) => {
  const members = contributors.map(c => <MemberCard user={c} />)

  return (
    <div>
      {members}
    </div>
  );
}

export default MembersContainer;
