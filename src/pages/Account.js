import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout, profile, closeAccount } from "../actions/LoginActions";

import "./Account.scss";

const Account = ({ logout, history, getProfile, profile, closeAccount }) => {
  useEffect(() => {
    getProfile(profile.userId);
  }, []);

  const handleLogout = () => {
    logout(() => history.push("/login"));
  };

  const handleDelete = () => {
    closeAccount(profile.userId);
    history.push("/");
  };

  return (
    <div className="account">
      <section>
        <h1>hi {profile.name}!</h1>
        <p>email: {profile.email}</p>
        <button onClick={handleLogout}>logout</button>
      </section>

      <div className="small-block">
        <section>
          <h3>lists: {profile.list_count}</h3>
        </section>
        <section>
          <h3>friends: {profile.friend_count}</h3>
        </section>
      </div>

      <section>
        <h3>Friend Requests</h3>
        <p>
          sent: {profile.sent_requests} received: {profile.received_requests}
        </p>
      </section>

      <section>
        <h3>list invites</h3>
        <p>
          sent: {profile.sent_invites} received: {profile.received_invites}
        </p>
      </section>

      <section className="danger">
        <h3>Danger Zone!</h3>
        <button onClick={handleDelete}>delete account</button>
      </section>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: (cb) => dispatch(logout(cb)),
  getProfile: (userId) => dispatch(profile(userId)),
  closeAccount: (userId) => dispatch(closeAccount(userId)),
});
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, mapDispatchToProps)(Account);
