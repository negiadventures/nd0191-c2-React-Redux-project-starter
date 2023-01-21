import React from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";
import { useState } from "react";
const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };
  return ComponentWithRouterProp;
};

const Question = (props) => {
  const [value, setValue] = useState(0);
  function handleOpt(optionValue) {
    props.dispatch(
      handleAnswerQuestion({
        authedUser: props.authedUser,
        qid: props.question.id,
        answer: optionValue,
      })
    );
    setValue(value + 1);
  }
  const question = props.question;
  const calculate_perc = (optionCount) => {
    return (
      (optionCount * 100) /
      (question.optionOne.votes.length + question.optionTwo.votes.length)
    ).toFixed(2);
  };
  return (
    <div className="poll-container">
      <p className="center">Poll by {question.author}</p>
      <div className="poll-image-container">
        <img
          className="poll-image"
          src={props.authorAvatar}
          alt={props.authorAvatar}
        />
      </div>
      {props.isAnswered ? (
        <div className="poll-options-container">
          <div className="poll-options-results">
            <table>
              <tbody>
                <tr>
                  <th>Would You Rather</th>
                  <th>Your Vote</th>
                  <th>Number of people Voted</th>
                  <th>% of people Voted</th>
                </tr>
                <tr>
                  <td>{question.optionOne.text}</td>
                  <td>
                    {props.user.answers[question.id] === "optionOne" ? "✓" : ""}
                  </td>
                  <td>{question.optionOne.votes.length}</td>
                  <td>{calculate_perc(question.optionOne.votes.length)}</td>
                </tr>
                <tr>
                  <td>{question.optionTwo.text}</td>
                  <td>
                    {props.user.answers[question.id] === "optionTwo" ? "✓" : ""}
                  </td>
                  <td>{question.optionTwo.votes.length}</td>
                  <td>{calculate_perc(question.optionTwo.votes.length)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="poll-options-container">
          <div className="poll-options">
            <ul>
              <li>
                <p className="center">{question.optionOne.text}</p>
              </li>
              <li>
                <button
                  className="poll-option-button"
                  onClick={() => handleOpt("optionOne")}
                >
                  Click
                </button>
              </li>
            </ul>
            <ul>
              <li>
                <p className="center">{question.optionTwo.text}</p>
              </li>
              <li>
                <button
                  className="poll-option-button"
                  onClick={() => handleOpt("optionTwo")}
                >
                  Click
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { question_id } = props.router.params;
  const question = questions[question_id];
  return {
    authedUser,
    authorAvatar: users[question.author].avatarURL,
    isAnswered: Object.keys(users[authedUser].answers).includes(question_id),
    user: users[authedUser],
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
};
export default withRouter(connect(mapStateToProps)(Question));
