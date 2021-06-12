import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useRouteMatch, useParams, useHistory, Link } from "react-router-dom";
import MemberCard from "./components/MemberCard";

import {
  loadMembers,
  leaveList,
  clearMembers,
} from "../actions/ListMemberActions";

const MembersContainer = ({ members, userId, load, leave, clear }) => {
  const { url } = useRouteMatch();
  const { list_id } = useParams();
  const history = useHistory();

  useEffect(() => {
    load(list_id);
    return () => {
      clear();
    };
  }, []);

  const handleLeave = () => {
    leave(list_id, () => history.push(`/users/${userId}/lists`));
  };

  return (
    <div>
      {members.map((c) => (
        <MemberCard user={c} />
      ))}
      <div className="row">
        <Link className="nice-link" to={`${url}/invite`}>
          invite a user
        </Link>

        <button
          className="nice-button"
          style={{ marginLeft: "1rem" }}
          onClick={handleLeave}
        >
          leave
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  members: state.members,
  userId: state.profile.userId,
});
const mapDispatchToProps = (dispatch) => ({
  load: (list_id) => dispatch(loadMembers(list_id)),
  leave: (list_id, cb) => dispatch(leaveList(list_id, cb)),
  clear: () => dispatch(clearMembers()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MembersContainer);
