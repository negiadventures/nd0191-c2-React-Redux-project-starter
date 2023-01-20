import React from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
const QuestionBrief = (props) => {
  let navigate = useNavigate();
  const showQuestion = () => {
    navigate(`/question/${props.question.id}`);
  };

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
      <button onClick={showQuestion}>Show</button>
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
