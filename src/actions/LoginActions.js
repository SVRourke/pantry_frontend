import api from "../api/Index";

const loginSuccess = (info) => ({
  type: "LOGGEDIN",
  id: info.id,
});

const reset = () => ({
  type: "RESET",
});

const info = (info) => ({
  type: "GETPROFILE",
  info,
});

const logout = (cb) => {
  return (dispatch) => {
    api.auth
      .logout()
      .then((r) => {
        return r.status === 410 ? r.json() : Promise.reject(r);
      })
      .then((r) => {
        dispatch(reset());
        localStorage.clear();
      })
      .then(() => cb())
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : alert("That didn't work, try again later")
      );
  };
};

const handleLogin = (data) => {
  return (dispatch) => {
    api.auth
      .login(data)
      .then((res) => {
        return res.ok ? res.json() : Promise.reject(res);
      })
      .then((d) => {
        dispatch(loginSuccess(d));
      })
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : alert("That didn't work, try again later")
      );
  };
};

const authCheck = () => {
  return (dispatch) => {
    api.auth
      .checkAuth()
      .then((res) => {
        return res.ok ? res.json() : Promise.reject(res);
      })
      .then((d) => dispatch(loginSuccess(d.user)))
      .catch((error) =>
        error.status === 401
          ? dispatch({ type: "LOGOUT" })
          : alert("That didn't work, try again later")
      );
  };
};
// ALERT: SHOULD ALL BE CHANGED TO MULTI CONDITION TERNARY?
const profile = (userId) => {
  return (dispatch) => {
    api.auth
      .profile(userId)
      .then((response) => {
        return response.ok
          ? response.json()
          : response.status === 401
          ? dispatch({ type: "LOGOUT" })
          : Promise.reject(response);
      })
      .then((data) => dispatch(info(data.user)))
      .catch((error) => alert("That didn't work, try again later"));
  };
};

const signUp = (user) => {
  return (dispatch) => {
    api.auth
      .signUp(user)
      .then((response) =>
        response.status === 201 ? response.json() : Promise.reject(response)
      )
      .then((data) => {
        dispatch(loginSuccess(data));
      })
      // make flexible for error messages
      .catch((error) => console.log("SIGNUP ERROR", error));
  };
};

const closeAccount = (userId) => {
  return (dispatch) => {
    api.auth
      .deleteAccount(userId)
      .then((response) =>
        response.status === 410 ? response.json() : Promise.reject(response)
      )
      .then((data) => dispatch(reset()))
      .catch((error) => console.log("DELETE ACCOUNT ERROR", error));
  };
};

export { authCheck, handleLogin, logout, profile, signUp, closeAccount };
