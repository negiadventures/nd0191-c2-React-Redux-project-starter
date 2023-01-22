import { connect } from "react-redux";
import React from "react";
import QuestionBrief from "./QuestionBrief";
import PropTypes from "prop-types";

const UnansweredQuestions = (props) => {
  return (
    <div>
      <div className="container-question">
        <h3 className="center">New Questions</h3>
        {props.newQuestionIds.length === 0 ? (
          <p className="center">No New Questions at the moment.</p>
        ) : (
          <ul className="question-list">
            {props.newQuestionIds.map((id) => (
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
  newQuestionIds: Object.keys(questions)
    .filter((n) => !Object.keys(users[authedUser].answers).includes(n))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
});

UnansweredQuestions.propTypes = {
  authedUser: PropTypes.string.isRequired,
  newQuestionIds: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(UnansweredQuestions);
