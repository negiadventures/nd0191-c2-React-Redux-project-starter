import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Nav = (props) => {
  const linkStyle = {
    margin: "0.5rem",
    textDecoration: "none",
    color: "#000000",
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <ul>
          <li>
            <NavLink to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" style={linkStyle}>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" style={linkStyle}>
              New
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <img
              className="avatar"
              src={props.avatarURL}
              alt={props.avatarURL}
            />
          </li>
          <li>{props.authedUser}</li>
          <li>
            <NavLink
              to="#"
              onClick={() => props.dispatch(setAuthedUser(""))}
              style={linkStyle}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    avatarURL: users[authedUser].avatarURL,
  };
};
export default connect(mapStateToProps)(Nav);
