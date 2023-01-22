import React from "react";
import serializeForm from "form-serialize";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
const Login = (props) => {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [pass, setPass] = useState("");
  const [passHint, setPassHint] = useState("");
  const handleAuthenticate = (username) => {
    props.dispatch(setAuthedUser(username));
    setPass("");
    navigate("/");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    if (
      Object.keys(props.credentials).includes(values.username) &&
      props.credentials[values.username] === values.password
    ) {
      setError("");
      handleAuthenticate(values.username);
    } else {
      setError("Invalid Credentials. Try again.");
    }
  };
  const autofillPassword = (e) => {
    const user = e.target.value;
    if (Object.keys(props.credentials).includes(user)) {
      setPassHint(props.credentials[user]);
    } else {
      setPassHint("");
    }
  };
  const setPassw = (e) => {
    setPass(e.target.value);
  };
  return (
    <div className="login-container">
      <h1 className="center">Employee Polls</h1>
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
            id="username"
            name="username"
            data-testid="username"
            onChange={autofillPassword}
          >
            <option name="username">Select a User</option>
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
            data-testid="password"
            type="text"
            name="password"
            onChange={setPassw}
            value={pass}
          />
          <label>{passHint !== "" && "Password hint: " + passHint}</label>
          <center>
            <button data-testid="submit-button" className="login-button">
              Submit
            </button>
          </center>
          {error !== "" && (
            <p className="center" data-testid="error">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser: authedUser,
    credentials: {
      sarahedo: "password123",
      tylermcginnis: "tylermcginnis",
      mtsamis: "xyz123",
      zoshikanlu: "zoshikanlu",
    },
  };
};
export default connect(mapStateToProps)(Login);
