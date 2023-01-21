import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Nav = (props) => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/add">New</Link>
        </li>
        <li>
          <button
            onClick={() => {
              localStorage.clear();
              props.dispatch(setAuthedUser(""));
            }}
          >
            Logout
          </button>
        </li>
        <li>{props.authedUser}</li>
        <li>
          <img className="avatar" src={props.avatarURL} alt={props.avatarURL} />
        </li>
      </ul>
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
