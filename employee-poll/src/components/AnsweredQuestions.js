import { connect } from "react-redux";
import React from "react";
import QuestionBrief from "./QuestionBrief";
const AnsweredQuestions = (props) => {
  return (
    <div>
      <div className="container-question">
        <h3 className="center">Done</h3>
        {props.answeredQuestionIds.length === 0 ? (
          <p className="center">No polls voted yet.</p>
        ) : (
          <ul className="question-list">
            {props.answeredQuestionIds.map((id) => (
              <li key={id}>
                <QuestionBrief id={id} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  answeredQuestionIds: Object.keys(users[authedUser].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
});

export default connect(mapStateToProps)(AnsweredQuestions);
