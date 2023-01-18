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
      const { answer } = action;
      let answeringTo = {};
      const isOptionOne =
        answer.text === state[answer.questionId].optionOne.text;
      answeringTo = isOptionOne
        ? {
            [answer.questionId]: {
              ...state[answer.questionId],
              optionOne: {
                text: state[answer.questionId].optionOne.text,
                votes: state[answer.questionId].optionOne.votes.concat([
                  action.authedId,
                ]),
              },
            },
          }
        : {
            [answer.questionId]: {
              ...state[answer.questionId],
              optionTwo: {
                text: state[answer.questionId].optionTwo.text,
                votes: state[answer.questionId].optionTwo.votes.concat([
                  action.authedId,
                ]),
              },
            },
          };
      return {
        ...state,
        [action.questionId]: answeringTo,
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
