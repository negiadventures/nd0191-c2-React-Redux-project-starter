import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
  ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ANSWER_QUESTION:
      const { authedUser, answer, qid } = action;
      let answeringTo = {};
      const isOptionOne = answer === "optionOne";
      answeringTo = isOptionOne
        ? {
            ...state[qid],
            optionOne: {
              text: state[qid].optionOne.text,
              votes: state[qid].optionOne.votes.concat([authedUser]),
            },
          }
        : {
            ...state[qid],
            optionTwo: {
              text: state[qid].optionTwo.text,
              votes: state[qid].optionTwo.votes.concat([authedUser]),
            },
          };
      return {
        ...state,
        [qid]: answeringTo,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
