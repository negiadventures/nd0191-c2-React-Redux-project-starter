import React from "react";
import serializeForm from "form-serialize";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { formatCredentials } from "../utils/helpers";
import { setAuthedUser } from "../actions/authedUser";
const Login = (props) => {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [pass, setPass] = useState("");
  const handleAuthenticate = (username) => {
    props.dispatch(setAuthedUser(username));
    navigate("/");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    if (
      Object.keys(props.credentials).includes(values.username) &&
      props.credentials[values.username] === values.password
    ) {
      handleAuthenticate(values.username);
    } else {
      setError("Invalid Credentials. Try again.");
    }
  };
  const autofillPassword = (e) => {
    const user = e.target.value;
    if (user !== "Select a User") {
      setPass(props.credentials[user]);
    }
  };
  const setPassw = (e) => {
    setPass(e.target.value);
  };
  return (
    <div className="login-container">
      <p className="center">Employee Polls</p>
      <div className="login-image-container">
        <img
          src="https://i.ibb.co/f8vfTmB/employee-poll.jpg"
          alt="employee-poll"
          border="0"
        />
      </div>
      <h3 className="center">Log In</h3>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <label>User</label>
          <select
            className="input-text"
            name="username"
            onChange={autofillPassword}
          >
            <option>Select a User</option>
            {Object.keys(props.credentials).map((u) => {
              return (
                <option key={u} value={u}>
                  {u}
                </option>
              );
            })}
          </select>
          <label>Password</label>
          <input
            className="input-text"
            name="password"
            type="text"
            onChange={setPassw}
            value={pass}
          />
          <center>
            <button>Submit</button>
          </center>
          {error !== "" && <p className="center">{error}</p>}
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser: authedUser,
    credentials: formatCredentials(users),
  };
};
export default connect(mapStateToProps)(Login);
