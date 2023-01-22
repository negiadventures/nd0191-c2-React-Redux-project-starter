import { connect } from "react-redux";
import React from "react";
import Tabs from "./Tabs";
const Home = (props) => {
  return (
    <div>
      <Tabs />
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  newQuestionIds: Object.keys(questions)
    .filter((n) => !Object.keys(users[authedUser].answers).includes(n))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  answeredQuestionIds: Object.keys(users[authedUser].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
});

export default connect(mapStateToProps)(Home);
