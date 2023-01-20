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
          <input className="input-text" name="username" type="text" />
          <label>Password</label>
          <input className="input-text" name="password" type="text" />
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
