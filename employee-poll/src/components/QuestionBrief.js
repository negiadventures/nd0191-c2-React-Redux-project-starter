import React from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

const QuestionBrief = (props) => {
  if (props.question === null) {
    return <p>Question doesn't exists.</p>;
  }
  const { author, timestamp } = props.question;
  return (
    <div className="question-brief">
      <ul>
        <li>{author}</li>
        <li>{timestamp}</li>
      </ul>
      <button>Show</button>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
};
export default connect(mapStateToProps)(QuestionBrief);
