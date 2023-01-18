import React from "react";
import { connect } from "react-redux";
import { generateSummary } from "../utils/helpers";
const Leaderboard = (props) => {
  return (
    <div>
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
                    <img
                      className="avatar"
                      src={user.avatar}
                      alt={user.avatar}
                    />{" "}
                    {user.name} | {user.username}
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
export default connect(mapStateToProps)(Leaderboard);
