import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION, ANSWER_QUESTION } from "../actions/questions";
export default function users(state = {}, action) {
  const { authedUser, answer, qid } = action;
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case ADD_QUESTION:
      const { author, id } = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id]),
        },
      };
    default:
      return state;
  }
}
