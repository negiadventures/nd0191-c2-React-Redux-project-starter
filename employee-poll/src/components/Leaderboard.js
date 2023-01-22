import React from "react";
import { connect } from "react-redux";
import { generateSummary } from "../utils/helpers";
import PropTypes from "prop-types";
const Leaderboard = (props) => {
  return (
    <div className="leaderboard-container">
      {props.summary !== null ? (
        <table>
          <tbody>
            <tr>
              <th>Users</th>
              <th>Answered</th>
              <th>Created</th>
            </tr>
            {props.summary.map((user) => {
              return (
                <tr key={user.username}>
                  <td>
                    <div className="leaderboard-user">
                      <div className="leaderboard-float-left">
                        <img
                          className="avatar"
                          src={user.avatar}
                          alt={user.avatar}
                        />{" "}
                      </div>
                      <div className="leaderboard-float-right">
                        <p className="center">
                          {user.name}
                          <br />
                          {user.username}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>{user.answered}</td>
                  <td>{user.created}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
};
const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  summary: users ? generateSummary(users) : null,
});
Leaderboard.propTypes = {
  authedUser: PropTypes.string.isRequired,
  summary: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(Leaderboard);
